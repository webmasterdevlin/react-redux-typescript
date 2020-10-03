import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVillains, removeVillain } from '../villain-actions';
import Button from 'react-bootstrap/Button';
import VillainForm from '../components/VillainForm';
import { IApplicationState } from '../../../store/reducers';

type Props = {};

const Villains: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { villains, isLoading } = useSelector(
    (state: IApplicationState) => state.villainReducer,
  );

  useEffect(() => {
    dispatch(fetchVillains());
  }, []);

  return (
    <div>
      <h1>Super Villains</h1>
      <VillainForm />
      <ul className={'mt-5 list-group'}>
        {isLoading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          villains.map(v => (
            <li
              key={v.id}
              className={
                'list-group-item col-12 d-flex justify-content-between'
              }
            >
              <span>{`${v.firstName} ${v.lastName} is ${v.knownAs}`}</span>
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
