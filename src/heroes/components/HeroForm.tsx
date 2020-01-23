import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { addHero } from "../hero-actions";
import { useDispatch } from "react-redux";
import { IHeroModel } from "../hero-types";
import {Dispatch} from "redux";
import {Formik, Form, Field, ErrorMessage, useField} from "formik";
import * as Yup from "yup";

/* Using Formik */
const HeroForm: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const [newHero, setNewHero] = useState<IHeroModel>({
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  } as IHeroModel);

  return (
      <Formik
          initialValues={newHero}
          validationSchema={Yup.object({
              firstName: Yup.string().required('required'),
              lastName: Yup.string().required('required'),
              house: Yup.string().required('required'),
              knownAs: Yup.string().required('required'),
          })}
          onSubmit={(values, actions) => {
              dispatch(addHero(values));
              actions.resetForm();
          }}
      >
        {formikProps => (
            <Form>
                <Field name={'firstName'} />
                <ErrorMessage name="firstName" component="div" />
                <Field name={'lastName'}   />
                <ErrorMessage name="lastName" component="div" />
                <Field name={'house'} />
                <ErrorMessage name="house" component="div" />
                <Field name={'knownAs'} />
                <ErrorMessage name="knownAs" component="div" />
                <Button type="submit" >
                    Send
                </Button>
            </Form>
        )}
      </Formik>
  );
};

export default HeroForm;

/* abstraction of the repeated Field and ErrorMessage above */
const CustomField = ({...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};
