import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { createHotelSchema } from '../../../validations/hotelSchemas';
import InputFile from '../../form/input-file/InputFile';
import InputGroup from '../../form/input-group/InputGroup';
import Textarea from '../../form/textarea/Textarea';
import Select from '../../form/select/Select';
import * as S from '../Hotel.elements';

const CreateHotel = ({ addHotel, loading }) => {
  const handleSubmit = (values, { resetForm }) => {
    addHotel({ newHotel: values, onAddComplete: resetForm });
  };

  return (
    <S.Wrapper>
      <Formik
        initialValues={{
          name: '',
          type: '',
          description: '',
          country: '',
          region: '',
          city: '',
          logo: null,
          score: '',
          single_room: '',
          two_twin_room: '',
          one_queen_bedroom: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={createHotelSchema}
        validateOnBlur
      >
        {({ errors, values, setFieldValue }) => (
          <S.Form>
            <S.Headline>Registrar hotel</S.Headline>
            <S.Group>
              <InputGroup
                id="name"
                name={'name'}
                type="text"
                placeholder={'nombre del hotel'}
                label={'Nombre'}
                errors={errors}
              />
              <Select
                id="type"
                label="Tipo"
                type="text"
                placeholder="Seleccione un tipo"
                name="type"
                errors={errors}
                values={values}
                options={[
                  { value: '', label: 'Seleccione un tipo' },
                  { value: '3', label: '⭐⭐⭐' },
                  { value: '4', label: '⭐⭐⭐⭐' },
                  { value: '5', label: '⭐⭐⭐⭐⭐' }
                ]}
                handleChange={(e) => {
                  setFieldValue('type', e.target.value);
                }}
              />
            </S.Group>
            <S.Group>
              <InputFile
                label={'Logo'}
                name={'logo'}
                id={'logo'}
                file={values.logo}
                handleChange={(e) => {
                  setFieldValue('logo', e.target.files[0]);
                }}
                errors={errors}
              />
              <InputGroup
                id="score"
                name={'score'}
                type="number"
                placeholder={'Calificación'}
                label={'Calificación'}
                errors={errors}
              />
            </S.Group>
            <Textarea
              id="description"
              label={'Descripción'}
              name={'description'}
              placeholder={'Descripción del hotel'}
              cols={30}
              rows={5}
              errors={errors}
              values={values}
              handleChange={(e) => {
                setFieldValue('description', e.target.value);
              }}
            />
            <S.Group>
              <InputGroup
                id="country"
                name={'country'}
                type="text"
                placeholder={'País'}
                label={'País'}
                errors={errors}
              />
              <InputGroup
                id="region"
                name={'region'}
                type="text"
                placeholder={'Departamento'}
                label={'Departamento'}
                errors={errors}
              />
              <InputGroup
                id="city"
                name={'city'}
                type="text"
                placeholder={'Municipio'}
                label={'Municipio'}
                errors={errors}
              />
            </S.Group>
            Disponibilidad de habitaciones
            <S.Group>
              <S.Label>
                <S.Checkbox
                  type="checkbox"
                  name="availableRoomTypes"
                  value="single_room"
                />
                Habitaciones sencillas
              </S.Label>
              <S.Label>
                <S.Checkbox
                  type="checkbox"
                  name="availableRoomTypes"
                  value="two_twin_room"
                />
                Habitaciones dobles
              </S.Label>
              <S.Label>
                <S.Checkbox
                  type="checkbox"
                  name="availableRoomTypes"
                  value="one_queen_bedroom"
                />
                Habitaciones matrimoniales
              </S.Label>
            </S.Group>
            {values.availableRoomTypes?.includes('single_room') && (
              <InputGroup
                id="single_room"
                name={'single_room'}
                type="number"
                placeholder={'Cantidad de habitaciones sencillas'}
                label={'Cantidad de habitaciones sencillas'}
                errors={errors}
              />
            )}
            {values.availableRoomTypes?.includes('two_twin_room') && (
              <InputGroup
                id="two_twin_room"
                name={'two_twin_room'}
                type="number"
                placeholder={'Cantidad de habitaciones dobles'}
                label={'Cantidad de habitaciones dobles'}
                errors={errors}
              />
            )}
            {values.availableRoomTypes?.includes('one_queen_bedroom') && (
              <InputGroup
                id="one_queen_bedroom"
                name={'one_queen_bedroom'}
                type="number"
                placeholder={'Cantidad de habitaciones matrimoniales'}
                label={'Cantidad de habitaciones matrimoniales'}
                errors={errors}
              />
            )}
            <S.Button type="submit" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar hotel'}
            </S.Button>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  );
};

CreateHotel.propTypes = {
  addHotel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default CreateHotel;
