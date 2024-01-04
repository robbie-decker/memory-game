import Card from './Card.jsx';
import { v4 as uuidv4 } from 'uuid';
import './Game.css';

function Game(){
    var characters = ["mario", "luigi", "peach", "daisy", "bowser"];
    characters += characters;
    const cards = characters.map((character) => <Card name={character} key={uuidv4()}/>)
    return(
        <>
        <div className='game'>
            {cards}
            {cards}
        </div>
        </>
    )
}

export default Game