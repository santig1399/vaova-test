import * as Yup from 'yup';

export const createHotelSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  type: Yup.string().required('El tipo es requerido'),
  description: Yup.string().required('La descripción es requerida'),
  country: Yup.string().required('El país es requerido'),
  region: Yup.string().required('El departamento es requerido'),
  city: Yup.string().required('El municipio es requerido'),
  logo: Yup.mixed().required('El logo es requerido'),
  score: Yup.number()
    .required('La calificación es requerida')
    .min(1, 'La calificación debe ser mayor a 0'),
  single_room: Yup.number(
    'Especifique un número de habitaciones disponibles'
  ).min(0, 'La cantidad de habitaciones disponibles no puede ser negativa'),
  two_twin_room: Yup.number(
    'Especifique un número de habitaciones disponibles'
  ).min(0, 'La cantidad de habitaciones disponibles no puede ser negativa'),
  one_queen_bedroom: Yup.number(
    'Especifique un número de habitaciones disponibles'
  ).min(0, 'La cantidad de habitaciones disponibles no puede ser negativa')
});
