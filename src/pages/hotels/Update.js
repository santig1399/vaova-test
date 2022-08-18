import { useEffect, useState } from 'react';
import UpdateHotel from '../../components/hotel-crud/update-form/UpdateHotel';
import useHotel from '../../hooks/hotels/useHotel';

const Update = ({ id }) => {
  const { getHotel, updateHotel, loading } = useHotel();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    getHotel({ id }).then((hotel) => {
      setHotel(hotel);
    });
  }, [id, getHotel]);

  if (!hotel) {
    return 'Cargando...';
  }

  return (
    <>
      <UpdateHotel
        initialValues={{ ...hotel, logo: { name: hotel.logo } }}
        id={id}
        updateHotel={updateHotel}
        loading={loading}
      />
    </>
  );
};

export default Update;
