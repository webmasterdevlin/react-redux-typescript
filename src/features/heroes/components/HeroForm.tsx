import React from 'react';
import { postHeroAction } from '../hero-actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Formik } from 'formik';
import SharedForm from '../../../shared/shared-form';
import {
  formsInitialValue,
  validationSchema,
} from '../../../shared/forms-initial-values';

const HeroForm: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  return (
    <Formik
      initialValues={formsInitialValue}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(postHeroAction(values));
        actions.resetForm();
      }}
    >
      {formikProps => <SharedForm formikProps={formikProps} />}
    </Formik>
  );
};

export default HeroForm;
