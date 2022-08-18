import CreateHotel from '../../components/hotel-crud/create-form/CreateHotel';
import useHotel from '../../hooks/hotels/useHotel';
const Create = () => {
  const { addHotel, loading } = useHotel();
  return (
    <>
      <CreateHotel addHotel={addHotel} loading={loading} />
    </>
  );
};

export default Create;
