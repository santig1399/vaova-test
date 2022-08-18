import PropTypes from 'prop-types';
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiFillStar,
  AiFillLike
} from 'react-icons/ai';
import { useLocation } from 'wouter';
import * as S from './Card.elements';

const Card = ({ hotel, handleDelete }) => {
  const [, setLocation] = useLocation();
  const handleEdit = () => {
    setLocation(`/hotels/update/${hotel.id}`);
  };

  const handleView = () => {
    setLocation(`/hotels/profile/${hotel.id}`);
  };

  return (
    <>
      <S.CardContainer>
        <S.CardImage image={hotel.logo} />
        <S.CardContent>
          <S.Column>
            <S.CardTitle>{hotel.name}</S.CardTitle>
            <S.CardSubtitle>
              {hotel.city} - {hotel.country}
            </S.CardSubtitle>
          </S.Column>
          <S.Column>
            <S.StarsCount>
              <AiFillStar color="#FFD337" size={24} /> {hotel.type}
              <AiFillLike color="#00a887" size={24} /> {hotel.score}
            </S.StarsCount>
          </S.Column>
        </S.CardContent>
        <S.Toolbar>
          <S.ActionButton onClick={handleView} hoverColor="#00A887">
            <AiOutlineEye size={18} />
            Ver
          </S.ActionButton>
          <S.ActionButton onClick={handleEdit} hoverColor="#00A887">
            <AiOutlineEdit size={18} />
            Editar
          </S.ActionButton>
        </S.Toolbar>
      </S.CardContainer>
    </>
  );
};

Card.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default Card;
