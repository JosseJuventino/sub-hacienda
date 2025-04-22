import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '@/types/formValues';
import { initialValues } from '@/types/initialFormValues';
import { dinamicValidation } from '@/validations/customerValidation';

export function useCustomerForm(
  formType: 'basic' | 'full',
  onSubmit: (values: FormValues) => void
) {
  const schema = Yup.object().shape(
    dinamicValidation({ formType })
  );

  return useFormik<FormValues>({
    initialValues,
    validationSchema: schema,
    onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => {
      onSubmit(values);
      helpers.setSubmitting(false);
    },
  });
}
