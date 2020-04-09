import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { addVillain } from "../villain-actions";
import { useDispatch } from "react-redux";
import { IVillainModel } from "../villain-types";
import { Dispatch } from "redux";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import Card from "react-bootstrap/Card";
import FormB from "react-bootstrap/Form";

const VillainForm: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const [newVillain, setNewVillain] = useState<IVillainModel>({
    firstName: "",
    lastName: "",
    house: "",
    knownAs: "",
  } as IVillainModel);

  const validationSchema = Yup.object({
    firstName: Yup.string().label("First Name").min(2).required(),
    lastName: Yup.string().label("Last Name").min(2).required(),
    house: Yup.string().required("required"),
    knownAs: Yup.string().required("required"),
  });

  return (
    <Formik
      initialValues={newVillain}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addVillain(values));
        actions.resetForm();
      }}
    >
      {(formikProps) => (
        <Card bg={"light"}>
          <Card.Body>
            <Form>
              <FormB.Group>
                <FormB.Label>First Name</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange("firstName")}
                  onBlur={formikProps.handleBlur("firstName")}
                  value={formikProps.values.firstName}
                  autoComplete={"off"}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className={"mt-2 alert alert-danger"}
                />
              </FormB.Group>

              <FormB.Group>
                <FormB.Label>Last Name</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange("lastName")}
                  onBlur={formikProps.handleBlur("lastName")}
                  value={formikProps.values.lastName}
                  autoComplete={"off"}
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={"mt-2 alert alert-danger"}
                />
              </FormB.Group>

              <FormB.Group>
                <FormB.Label>House</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange("house")}
                  onBlur={formikProps.handleBlur("house")}
                  value={formikProps.values.house}
                  autoComplete={"off"}
                />
                <ErrorMessage
                  name="house"
                  component="div"
                  className={"mt-2 alert alert-danger"}
                />
              </FormB.Group>

              <FormB.Group>
                <FormB.Label>Last Name</FormB.Label>
                <FormB.Control
                  onChange={formikProps.handleChange("knownAs")}
                  onBlur={formikProps.handleBlur("knownAs")}
                  value={formikProps.values.knownAs}
                  autoComplete={"off"}
                />
                <ErrorMessage
                  name="knownAs"
                  component="div"
                  className={"mt-2 alert alert-danger"}
                />
              </FormB.Group>
              <Button type="submit">Send</Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Formik>
  );
};

export default VillainForm;
