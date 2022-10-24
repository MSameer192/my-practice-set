import React from 'react';
// import { add, multiply, subtract, divide } from './Calculator'
import * as Calculator from './Calculator'

export default function Practice() {
    return (
        <div className='container'>
            <ul>
                <li>{Calculator.add(1, 2)}</li>
                <li>{Calculator.multiply(2, 3)}</li>
                <li>{Calculator.subtract(7, 2)}</li>
                <li>{Calculator.divide(5, 2)}</li>
            </ul>,
        </div>
    );
}
