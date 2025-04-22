import { FormValues } from "./formValues";

export const initialValues: FormValues = {
  customerName: '',
  documentType: { label: 'DUI', value: '13' },
  customerDoc: '',
  email: '',
  tel: '',
  nrc: '',
  name_comercial: '',
  municipio: { label: '', value: '', key: '' },
  departamento: { label: '', value: '', key: '' },
  address: '',
  activity: { label: '', value: 0, key: "" },
};