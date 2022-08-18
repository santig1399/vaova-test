import PropTypes from 'prop-types';
import ProfileImage from './profile-image/ProfileImage';
import * as S from './HotelProfile.elements';
import ProfileInfo from './profile-info/ProfileInfo';

const HotelProfile = ({ hotel, handleEdit, handleDelete }) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <ProfileImage image={hotel.logo} />
      </S.ImageWrapper>
      <ProfileInfo
        hotel={hotel}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </S.Wrapper>
  );
};

HotelProfile.propTypes = {
  hotel: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default HotelProfile;
