import { useEffect, useState } from 'react';
import { Dialog } from 'evergreen-ui';
import { useLocation } from 'wouter';
import HotelProfile from '../../components/hotel-profile/HotelProfile';
import useHotel from '../../hooks/hotels/useHotel';
const Profile = ({ id }) => {
  const { getHotel, deleteHotel } = useHotel();
  const [hotel, setHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [, setLocation] = useLocation();
  const openConfirmationModal = () => {
    setShowModal(true);
  };

  const closeConfirmationModal = () => {
    setShowModal(false);
  };

  const onDelete = () => {
    closeConfirmationModal();
    deleteHotel({ id });
  };

  const handleEdit = () => {
    setLocation('/hotels/update/' + id);
  };

  useEffect(() => {
    getHotel({ id }).then((hotel) => setHotel(hotel));
  }, [id, getHotel]);

  if (!hotel) {
    return 'Cargando...';
  }

  return (
    <>
      <Dialog
        title="Eliminar hotel"
        isShown={showModal}
        onCloseComplete={closeConfirmationModal}
        confirmLabel="Eliminar"
        onConfirm={onDelete}
        cancelLabel="Cancelar"
        topOffset={100}
        intent="danger"
      >
        ¿Está seguro que desea eliminar el hotel {hotel.name}? Esta acción no se
        puede deshacer.
      </Dialog>
      <HotelProfile
        hotel={hotel}
        handleDelete={openConfirmationModal}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default Profile;
