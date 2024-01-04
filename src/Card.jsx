import { useState } from 'react';
import './Card.css';

function Card({name}) {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div className='card'>
        <p>{name}</p>
      </div>
    </>
  )
}

export default Card
