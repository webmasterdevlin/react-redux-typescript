import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import AntiHeroForm from '../components/AntiHeroForm';
import {
  deleteAntiHeroAction,
  getAntiHeroesAction,
} from '../anti-hero.async.actions';
import { removeTemporarily } from '../anti-hero.slice';
import { RootState } from '../../../store/reducers';

type Props = {};

const AntiHeroes: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const { loading, antiHeroes } = useSelector(
    (state: RootState) => state.antiHero,
  );

  /*Redux Toolkit implementation*/
  // const antiHeroes = useSelector(selectAntiHeroList);

  useEffect(() => {
    dispatch(getAntiHeroesAction());
  }, [dispatch]);

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
              <div>
                <Button
                  onClick={() => dispatch(removeTemporarily(ah.id))}
                  variant="outline-danger"
                >
                  Remove
                </Button>{' '}
                <Button
                  onClick={() => dispatch(deleteAntiHeroAction(ah.id))}
                  variant="danger"
                >
                  Remove
                </Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AntiHeroes;
