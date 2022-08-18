import PropTypes from 'prop-types';
import Grid from '../../layout/grid/Grid';
import Card from '../../card/Card';
const HotelList = ({ hotels, handleDelete }) => {
  return (
    <Grid>
      {hotels.map((hotel, i) => (
        <Card
          key={`${hotel.id}-${i}`}
          handleDelete={handleDelete}
          hotel={hotel}
        />
      ))}
    </Grid>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired
};

HotelList.defaultProps = {
  hotels: [],
  handleDelete: () => {}
};

export default HotelList;
