import PropTypes from 'prop-types';
import * as S from './Grid.elements';

const Grid = ({ md, lg, children }) => {
  return (
    <S.Grid md={md} lg={lg}>
      {children}
    </S.Grid>
  );
};

Grid.propTypes = {
  md: PropTypes.number,
  lg: PropTypes.number
};

Grid.defaultProps = {
  md: 2,
  lg: 3
};

export default Grid;
