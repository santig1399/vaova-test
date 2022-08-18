import PropTypes from 'prop-types';
import * as S from './IconButton.elements';

const IconButton = ({ href, children }) => {
  return <S.IconButton href={href}>{children}</S.IconButton>;
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default IconButton;
