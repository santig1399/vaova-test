import PropTypes from 'prop-types';
import * as S from '../HotelProfile.elements';

const ProfileImage = ({ image }) => {
  return <S.ProfileImage image={image} />;
};

ProfileImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default ProfileImage;
