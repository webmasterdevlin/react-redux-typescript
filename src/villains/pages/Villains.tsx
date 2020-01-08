import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchVillains, removeVillain } from "../villain-actions";
import { IApplicationState } from "../../store";
import Button from "react-bootstrap/Button";
import VillainForm from "../components/VillainForm";

interface IProps {}

const Villains: React.FC<IProps> = () => {
  const dispatch: Dispatch = useDispatch();
  const { villains, isLoading } = useSelector(
    (state: IApplicationState) => state.villainReducer
  );

  useEffect(() => {
    dispatch(fetchVillains());
  }, []);

  return (
    <div>
      <h1>Super Villains</h1>
      <VillainForm />
      <ul>
        {isLoading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          villains.map(v => (
            <li key={v.id}>
              {`${v.firstName} ${v.lastName} is ${v.knownAs}`}
              <Button
                onClick={() => dispatch(removeVillain(v.id))}
                variant="danger"
              >
                Remove
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Villains;
