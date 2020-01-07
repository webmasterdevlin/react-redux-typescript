import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { addHero } from "../hero-actions";
import { useDispatch } from "react-redux";
import { IHeroModel } from "../hero-types";
import {Dispatch} from "redux";

const HeroForm: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const [newHero, setNewHero] = useState<IHeroModel>({
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  } as IHeroModel);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const heroFromForm = { ...newHero };
    const { id, value } = event.currentTarget;
    heroFromForm[id] = value;
    setNewHero(heroFromForm);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(addHero(newHero));

    let emptyHeroForm: any = {};
    Object.keys(newHero).forEach(key => {
      emptyHeroForm[key] = "";
    });

    setNewHero(emptyHeroForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"First Name"}
          id="firstName"
          onChange={handleInputChange}
          value={newHero.firstName}
        />
        <input
          placeholder={"Last Name"}
          id="lastName"
          onChange={handleInputChange}
          value={newHero.lastName}
        />
        <input
          placeholder={"House"}
          id="house"
          onChange={handleInputChange}
          value={newHero.house}
        />
        <input
          placeholder={"Known As"}
          id="knownAs"
          onChange={handleInputChange}
          value={newHero.knownAs}
        />
        <Button type="submit" variant="primary">
          Send
        </Button>
      </form>
    </div>
  );
};

export default HeroForm;
