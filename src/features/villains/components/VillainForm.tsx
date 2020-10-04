import React from 'react';
import { postVillainAction } from '../villain-actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Formik } from 'formik';
import {
  formsInitialValue,
  validationSchema,
} from '../../../shared/forms-initial-values';
import SharedForm from '../../../shared/shared-form';

const VillainForm: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  return (
    <Formik
      initialValues={formsInitialValue}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(postVillainAction(values));
        actions.resetForm();
      }}
    >
      {formikProps => <SharedForm formikProps={formikProps} />}
    </Formik>
  );
};

export default VillainForm;
