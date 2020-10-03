import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVillains, removeVillain } from '../villain-actions';
import Button from 'react-bootstrap/Button';
import VillainForm from '../components/VillainForm';
import { ApplicationStateType } from '../../../store/reducers';
import TitleBar from '../../../shared/title-bar';

type Props = {};

const Villains: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { villains, isLoading } = useSelector(
    (state: ApplicationStateType) => state.villain,
  );

  useEffect(() => {
    dispatch(fetchVillains());
  }, []);

  return (
    <div>
      <TitleBar title={'Super Villains - Redux Thunk'} />
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
              <div>
                <span>{`${v.firstName} ${v.lastName} is ${v.knownAs}`}</span>
              </div>
              <div>
                <Button
                  onClick={() => dispatch(removeVillain(v.id))}
                  variant="danger"
                >
                  DELETE in DB
                </Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Villains;
