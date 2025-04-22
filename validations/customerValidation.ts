import * as Yup from "yup";

interface dinamicValidationProps {
  formType: string;
}

export const dinamicValidation = ({ formType }: dinamicValidationProps) => {
  const standardValidation = {
    customerName: Yup.string()
      .required("El nombre del cliente es requerido")
      .min(3, "El nombre del cliente debe tener al menos 3 caracteres"),
    customerDoc: Yup.string()
      .when("documentType", {
        is: (value: string | null) => value && value == "36",
        then: () =>
          Yup.string().matches(
            /^\d{4}(?:-\d{6}-\d{3}-\d{1}|\d{4}-\d{1})$/,
            "Formato inválido para documento"
          ),
      })
      .when("documentType", {
        is: (value: string | null) => value && value == "36",
        then: () =>
          Yup.string().matches(
            /^\d{4}-\d{6}-\d{3}-\d{1}$/,
            "Formato inválido para NIT"
          ),
      })
      .when("documentType", {
        is: (value: string | null) => value && value == "13",
        then: () =>
          Yup.string().matches(
            /^\d{4}-\d{6}-\d{3}-\d{1}$/,
            "Formato inválido para NIT"
          ),
      })
      .required("El número de documento es requerido"),
    email: Yup.string()
      .when("emailValid", {
        is: true,
        then: (schema) =>
          schema.matches(
            /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}?$/,
            "El correo no cumple con el formato necesario"
          ),
        otherwise: (schema) =>
          schema.matches(
            /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{3}(?:\.[a-zA-Z]{2})?$/,
            "Incumple formato de correo"
          ),
      })
      .required("El correo es requerido")
      .max(255, "El correo no puede tener más de 50 caracteres")
      .nullable(),
    comercialName: Yup.string()
      .nullable()
      .max(255, "El nombre comercial no puede tener más de 50 caracteres"),
    documentType: Yup.object()
      .shape({
        label: Yup.string().required("El tipo de documento es requerido"),
        value: Yup.string().required("El campo es requerido"),
      })
      .nullable()
      .required("El tipo de documento es requerido"),
    tel: Yup.string().max(
      15,
      "El número de teléfono no puede tener más de 15 caracteres"
    ),
    nrc: Yup.string()
      .matches(/^(\d{6})$/, "Formato inválido para NRC")
      .max(50, "NRC debe tener menos de 50 caracteres")
      .nullable(),
    address: Yup.string()
      .max(255, "La dirección debe tener menos de 256 caracteres")
      .nullable(),
    activity: Yup.object().shape({
      label: Yup.string().required("La actividad es requerida"),
      value: Yup.number().required("El campo es requerido"),
    }),
    departamento: Yup.object()
      .shape({
        label: Yup.string().required("El departamento es requerido"),
        value: Yup.string().required("El campo es requerido"),
        key: Yup.string().required("El campo es requerido"),
      })
      .nullable(),
    municipio: Yup.object()
      .shape({
        label: Yup.string().required("El municipio es requerido"),
        value: Yup.string().required("El campo es requerido"),
        key: Yup.string().required("El campo es requerido"),
      })
      .nullable(),
  };

  if (formType === "full") {
    standardValidation.address = Yup.string()
    .required(
      "La dirección es requerida"
    );
    standardValidation.nrc = Yup.string()
      .matches(/^\d{6}$/, "Formato inválido para NRC")
      .required("El NRC es requerido");
    standardValidation.activity = Yup.object()
      .shape({
        label: Yup.string().required("La actividad es requerida"),
        value: Yup.number().required("El campo es requerido"),
      })
      .nullable()
      .required("La actividad es requerida");
    standardValidation.departamento = Yup.object()
      .shape({
        label: Yup.string().required("El departamento es requerido"),
        value: Yup.string().required("El campo es requerido"),
        key: Yup.string().required("El campo es requerido"),
      })
      .nullable()
      .required("El departamento es requerido");
    standardValidation.municipio = Yup.object()
      .shape({
        label: Yup.string().required("El municipio es requerido"),
        value: Yup.string().required("El campo es requerido"),
        key: Yup.string().required("El campo es requerido"),
      })
      .nullable()
      .required("El municipio es requerido");
  }

  return standardValidation;
};
