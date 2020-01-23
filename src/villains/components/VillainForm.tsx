import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { addVillain } from "../villain-actions";
import { useDispatch } from "react-redux";
import { IVillainModel } from "../villain-types";
import {Dispatch} from "redux";

/*
 * Without Formik
 * Go to HeroForm to see Formik implementation
 * */
const VillainForm: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const [newVillain, setNewVillain] = useState<IVillainModel>({
        firstName: "",
        lastName: "",
        house: "",
        knownAs: ""
    } as IVillainModel);

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const VillainFromForm = { ...newVillain };
        const { id, value } = event.currentTarget;
        VillainFromForm[id] = value;
        setNewVillain(VillainFromForm);
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(addVillain(newVillain));

        let emptyVillainForm: any = {};
        Object.keys(newVillain).forEach(key => {
            emptyVillainForm[key] = "";
        });

        setNewVillain(emptyVillainForm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={"First Name"}
                    id="firstName"
                    onChange={handleInputChange}
                    value={newVillain.firstName}
                />
                <input
                    placeholder={"Last Name"}
                    id="lastName"
                    onChange={handleInputChange}
                    value={newVillain.lastName}
                />
                <input
                    placeholder={"House"}
                    id="house"
                    onChange={handleInputChange}
                    value={newVillain.house}
                />
                <input
                    placeholder={"Known As"}
                    id="knownAs"
                    onChange={handleInputChange}
                    value={newVillain.knownAs}
                />
                <Button type="submit" variant="primary">
                    Send
                </Button>
            </form>
        </div>
    );
};

export default VillainForm;
