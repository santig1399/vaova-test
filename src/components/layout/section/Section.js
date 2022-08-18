import PropTypes from 'prop-types';
import * as S from './Section.elements';

const Section = ({ direction, padding, children }) => {
  return (
    <S.Wrapper direction={direction} padding={padding}>
      {children}
    </S.Wrapper>
  );
};

Section.propTypes = {
  direction: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired
};

Section.defaultProps = {
  direction: 'row',
  padding: '1rem'
};

export default Section;
