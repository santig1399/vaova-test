import PropTypes from 'prop-types';
import * as S from '../HotelProfile.elements';
import { AiFillStar, AiFillLike } from 'react-icons/ai';
import { MdOutlineBedroomChild, MdOutlineBedroomParent } from 'react-icons/md';
const ProfileInfo = ({ hotel, handleDelete, handleEdit }) => {
  return (
    <S.Profile>
      <S.ProfileName>{hotel.name}</S.ProfileName>
      <S.ProfileAddress>
        {hotel.city} - {hotel.region}, {hotel.country}
      </S.ProfileAddress>
      <S.ProfileScore>
        <S.ProfileScoreItem>
          <AiFillStar color="#ffd337" />
          {hotel.type}
        </S.ProfileScoreItem>
        <S.ProfileScoreItem>
          <AiFillLike color="#00a887" />
          {hotel.score}
        </S.ProfileScoreItem>
      </S.ProfileScore>
      {hotel.availableRoomTypes?.length > 0 && (
        <>
          <S.Headline>Disponibilidad de habitaciones</S.Headline>
          <S.ProfileRooms>
            {hotel.availableRoomTypes?.includes('single_room') && (
              <S.ProfileScoreItem>
                <MdOutlineBedroomChild color="#404040" />
                {hotel.single_room}
              </S.ProfileScoreItem>
            )}
            {hotel.availableRoomTypes?.includes('two_twin_room') && (
              <S.ProfileScoreItem>
                <MdOutlineBedroomChild color="#404040" />
                <MdOutlineBedroomChild color="#404040" />
                {hotel.two_twin_room}
              </S.ProfileScoreItem>
            )}
            {hotel.availableRoomTypes?.includes('one_queen_bedroom') && (
              <S.ProfileScoreItem>
                <MdOutlineBedroomParent color="#404040" />
                {hotel.one_queen_bedroom}
              </S.ProfileScoreItem>
            )}
          </S.ProfileRooms>
        </>
      )}

      {!hotel.availableRoomTypes?.length > 0 && (
        <S.Headline>Habitaciones no disponibles</S.Headline>
      )}

      <S.ProfileDescription>
        <S.Headline>Descripcion</S.Headline>
        <p>{hotel.description}</p>
      </S.ProfileDescription>
      <S.Toolbar>
        <S.ActionButton hoverFg="#fff" hoverBg="#00A887" onClick={handleEdit}>
          Editar
        </S.ActionButton>
        <S.ActionButton hoverFg="#fff" hoverBg="#f44336" onClick={handleDelete}>
          Eliminar
        </S.ActionButton>
      </S.Toolbar>
    </S.Profile>
  );
};

ProfileInfo.propTypes = {
  hotel: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};

export default ProfileInfo;
