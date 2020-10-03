import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addHero } from '../hero-actions';
import { useDispatch } from 'react-redux';
import { HeroModel } from '../hero-types';
import { Dispatch } from 'redux';
import { ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import FormB from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const HeroForm: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const validationSchema = yup.object({
    firstName: yup.string().label('First Name').min(2).required(),
    lastName: yup.string().label('Last Name').min(2).required(),
    house: yup.string().required('required'),
    knownAs: yup.string().required('required'),
  });

  return (
    <Formik
      initialValues={{
        id: '',
        firstName: '',
        lastName: '',
        house: '',
        knownAs: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addHero(values));
        actions.resetForm();
      }}
    >
      {formikProps => (
        <Card bg={'light'}>
          <Card.Body>
            <Form>
              <FormB.Group>
                <FormB.Label>First Name</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange('firstName')}
                  onBlur={formikProps.handleBlur('firstName')}
                  value={formikProps.values.firstName}
                  autoComplete={'off'}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className={'mt-2 alert alert-danger'}
                />
              </FormB.Group>

              <FormB.Group>
                <FormB.Label>Last Name</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange('lastName')}
                  onBlur={formikProps.handleBlur('lastName')}
                  value={formikProps.values.lastName}
                  autoComplete={'off'}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={'mt-2 alert alert-danger'}
                />
              </FormB.Group>

              <FormB.Group>
                <FormB.Label>House</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange('house')}
                  onBlur={formikProps.handleBlur('house')}
                  value={formikProps.values.house}
                  autoComplete={'off'}
                />
                <ErrorMessage
                  name="house"
                  component="div"
                  className={'mt-2 alert alert-danger'}
                />
              </FormB.Group>

              <FormB.Group>
                <FormB.Label>Known as</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange('knownAs')}
                  onBlur={formikProps.handleBlur('knownAs')}
                  value={formikProps.values.knownAs}
                  autoComplete={'off'}
                />
                <ErrorMessage
                  name="knownAs"
                  component="div"
                  className={'mt-2 alert alert-danger'}
                />
              </FormB.Group>
              <Button
                disabled={!formikProps.dirty || !formikProps.isValid}
                type="submit"
              >
                Send
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Formik>
  );
};

export default HeroForm;
