import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  getVillainsAction,
  deleteVillainByIdAction,
  removeVillainTemporaryAction,
} from '../villain-actions';
import Button from 'react-bootstrap/Button';
import VillainForm from '../components/VillainForm';
import { ApplicationStateType } from '../../../store/reducers';
import TitleBar from '../../../shared/title-bar';
import { getAntiHeroesAction } from '../../anti-heroes/anti-hero.async.actions';
import UpdateUiLabel from '../../../shared/update-ui-label';

type Props = {};

const Villains: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { villains, isLoading } = useSelector(
    (state: ApplicationStateType) => state.villain,
  );
  const [counter, setCounter] = useState('0');

  useEffect(() => {
    dispatch(getVillainsAction());
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
                {counter === v.id && <span> - marked</span>}
              </div>
              <div>
                <Button onClick={() => setCounter(v.id)} variant="dark">
                  Mark
                </Button>{' '}
                <Button
                  onClick={() => dispatch(removeVillainTemporaryAction(v.id))}
                  variant="outline-danger"
                >
                  Remove
                </Button>{' '}
                <Button
                  onClick={() => dispatch(deleteVillainByIdAction(v.id))}
                  variant="danger"
                >
                  DELETE in DB
                </Button>
              </div>
            </li>
          ))
        )}
      </ul>
      <UpdateUiLabel />
      {villains.length === 0 && !isLoading && (
        <Button variant={'info'} onClick={() => dispatch(getVillainsAction())}>
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default Villains;
