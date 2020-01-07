import React, {useEffect} from "react";
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {fetchHeroes, removeHero} from '../hero-actions';
import {IApplicationState} from "../../store";
import Button from 'react-bootstrap/Button';
import HeroForm from "../components/HeroForm";

interface IProps {

}

const Heroes: React.FC<IProps> = () => {
    const dispatch: Dispatch = useDispatch();
    const {heroes, isLoading} = useSelector((state: IApplicationState) => state.heroReducer);

    useEffect(() => {
        dispatch(fetchHeroes())
    }, []);

    return (
        <div>
            <h1>Super Heroes</h1>
            <HeroForm/>
            <ul>{isLoading ?
                <h2>Loading.. Please wait..</h2> :
                heroes.map(h => <li key={h.id}>
                    {`${h.firstName} ${h.lastName} is ${h.knownAs}`}
                    <Button onClick={() => dispatch(removeHero(h.id))}
                            variant="danger">
                        Remove
                    </Button>
                </li>)
            }</ul>
        </div>
    )
};

export default Heroes;
