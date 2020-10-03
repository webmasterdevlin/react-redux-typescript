import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import AntiHeroForm from '../components/AntiHeroForm';
import { getAntiHeroesAction } from '../anti-hero.actions';
import {
  removeTemporarily,
  selectAntiHeroesList,
  selectLoading,
} from '../anti-hero.slice';

type Props = {};

const AntiHeroes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const antiHeroes = useSelector(selectAntiHeroesList);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getAntiHeroesAction());
  }, []);

  return (
    <div>
      <h1>Anti Heroes</h1>
      <AntiHeroForm />
      <ul className={'mt-5 list-group'}>
        {loading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          antiHeroes.map(ah => (
            <li
              key={ah.id}
              className={
                'list-group-item col-12 d-flex justify-content-between'
              }
            >
              <span>{`${ah.firstName} ${ah.lastName} is ${ah.knownAs}`}</span>
              <Button
                onClick={() => dispatch(removeTemporarily(ah.id))}
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

export default AntiHeroes;
