import { useState } from 'react';
import { Dialog } from 'evergreen-ui';
import { HotelList } from '../../components/hotel-crud';
import { MdCreate } from 'react-icons/md';
import IconButton from '../../components/icon-button/IconButton';
import useHotel from '../../hooks/hotels/useHotel';
const List = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { hotels, deleteHotel } = useHotel();

  const openConfirmDialog = () => {
    setIsDialogOpen(true);
  };
  const closeConfirmDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = () => {
    deleteHotel({});
  };

  return (
    <div>
      <Dialog
        title="Eliminar hotel"
        onConfirm={handleDelete}
        isShown={isDialogOpen}
        onCloseComplete={closeConfirmDialog}
        intent="danger"
        confirmLabel="Eliminar"
        cancelLabel="Cancelar"
        topOffset={100}
      >
        ¿está seguro que desea eliminar el hotel? Esta acción no se puede
        deshacer.
      </Dialog>
      <IconButton href="/hotels/create">
        <MdCreate size={18} />
        <p>Registrar hotel</p>
      </IconButton>
      <HotelList hotels={hotels} handleDelete={openConfirmDialog} />
    </div>
  );
};

export default List;
