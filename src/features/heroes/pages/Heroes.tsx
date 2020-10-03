import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getHeroesAction,
  deleteHeroByIdAction,
  removeHeroByIdTemporaryAction,
} from '../hero-actions';
import Button from 'react-bootstrap/Button';
import HeroForm from '../components/HeroForm';
import { ApplicationStateType } from '../../../store/reducers';
import { Dispatch } from 'redux';
import TitleBar from '../../../shared/title-bar';
import UpdateUiLabel from '../../../shared/update-ui-label';

type Props = {};

const Heroes: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { heroes, isLoading } = useSelector(
    (state: ApplicationStateType) => state.hero,
  );
  const [counter, setCounter] = useState('0');

  useEffect(() => {
    dispatch(getHeroesAction());
  }, []);

  return (
    <div>
      <TitleBar title={'Super Heroes - Redux Saga'} />
      <HeroForm />
      <ul className={'mt-5 list-group'}>
        {isLoading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          heroes.map(h => (
            <li
              key={h.id}
              className={
                'list-group-item col-12 d-flex justify-content-between'
              }
            >
              <div>
                <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
                {counter === h.id && <span> - marked</span>}
              </div>
              <div>
                <Button onClick={() => setCounter(h.id)} variant="dark">
                  Mark
                </Button>{' '}
                <Button
                  onClick={() => dispatch(removeHeroByIdTemporaryAction(h.id))}
                  variant="outline-danger"
                >
                  Remove
                </Button>{' '}
                <Button
                  onClick={() => dispatch(deleteHeroByIdAction(h.id))}
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
      {heroes.length === 0 && !isLoading && (
        <Button variant={'info'} onClick={() => dispatch(getHeroesAction())}>
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default Heroes;
