import React from 'react';
import PropTypes from 'prop-types';

const handleAdd = (e)=> {
    console.log(e);
}

const CounterApp = ( { numero }) => {

    return <>
        <h1>Counter App</h1>
        <h2> { numero }</h2>
    </>

}

CounterApp.prototypes = {
    numero : PropTypes.number.isRequired
}


export default CounterApp;