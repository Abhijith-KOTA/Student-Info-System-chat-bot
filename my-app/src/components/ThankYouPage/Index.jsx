import React from 'react';
import { useParams } from 'react-router-dom';

import './Index.css';

const ThankYouPage = () => {
    const { name, age } = useParams();

    return (
        <div className='bg-container' >
            <h1>Your name {name} aged {age} has been added to the student system. You may now exit.</h1>
            {console.log(name, age)}
        </div>
    );
}

export default ThankYouPage;
