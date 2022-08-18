import { useContext, useState, useCallback, useEffect } from 'react';
import { toaster } from 'evergreen-ui';
import { HotelsContext } from '../../contexts/hotels/HotelsContext';
import { useLocation } from 'wouter';
import {
  getAllHotels as getAllHotelsService,
  getHotel as getHotelService,
  addHotel as addHotelService,
  updateHotel as updateHotelService,
  deleteHotel as deleteHotelService,
  uploadImage
} from '../../services/hotel.services';

const useHotel = () => {
  const [loading, setLoading] = useState(false);
  const { hotels, setHotels } = useContext(HotelsContext);
  const [, setLocation] = useLocation();
  const getAllHotels = useCallback(async () => {
    try {
      const hotels = await getAllHotelsService();
      setHotels(hotels.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      toaster.danger('Error al obtener los hoteles');
    }
  }, [setHotels]);

  const getHotel = useCallback(async ({ id }) => {
    setLoading(true);
    try {
      const hotel = await getHotelService(id);
      setLoading(false);
      return { ...hotel.data(), id: hotel.id };
    } catch (error) {
      toaster.danger('Error al obtener el hotel');
      setLoading(false);
    }
  }, []);

  const addHotel = async ({ newHotel, onAddComplete }) => {
    const { logo, ...hotelData } = newHotel;
    setLoading(true);
    try {
      const logoURL = await uploadImage(logo);
      await addHotelService({ ...hotelData, logo: logoURL });
      onAddComplete();
      getAllHotels();
      toaster.success('Hotel agregado correctamente');
      setLoading(false);
    } catch (error) {
      toaster.danger('Error al agregar el hotel');
      setLoading(false);
    }
  };

  const updateHotel = async ({ id, updatedHotel, onUpdate }) => {
    const { logo, ...hotelData } = updatedHotel;
    setLoading(true);
    try {
      if (!updatedHotel.logo.type) {
        await updateHotelService(id, {
          ...updatedHotel,
          logo: updatedHotel.logo.name
        });
        setLocation(`/hotels/profile/${id}`);
        toaster.success('Hotel actualizado correctamente');
        setLoading(false);
        return;
      }
      const { logo, ...hotelData } = updatedHotel;
      const logoURL = await uploadImage(logo);
      await updateHotelService(id, { ...hotelData, logo: logoURL });
      setLocation(`/hotels/profile/${id}`);
      toaster.success('Hotel actualizado correctamente');
      setLoading(false);
    } catch (error) {
      toaster.danger('Error al actualizar el hotel');
      setLoading(false);
    }
  };

  const deleteHotel = async ({ id }) => {
    setLoading(true);
    try {
      await deleteHotelService(id);
      setHotels(hotels.filter((hotel) => hotel.id !== id));
      setLocation(`/hotels`);
      toaster.success('Hotel eliminado correctamente');
      setLoading(false);
    } catch (error) {
      toaster.danger('Error al eliminar el hotel');
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllHotels();
  }, [getAllHotels]);

  return {
    hotels,
    loading,
    getAllHotels,
    getHotel,
    addHotel,
    updateHotel,
    deleteHotel,
    uploadImage
  };
};

export default useHotel;
