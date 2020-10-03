import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes, removeHero } from '../hero-actions';
import Button from 'react-bootstrap/Button';
import HeroForm from '../components/HeroForm';
import { ApplicationStateType } from '../../../store/reducers';
import { Dispatch } from 'redux';

type Props = {};

const Heroes: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { heroes, isLoading } = useSelector(
    (state: ApplicationStateType) => state.hero,
  );

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <div>
      <h1>Super Heroes</h1>
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
              <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
              <Button
                onClick={() => dispatch(removeHero(h.id))}
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

export default Heroes;
