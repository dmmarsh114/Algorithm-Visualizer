import React, { useState } from 'react';

const ArrayDisplay = (props) => {

    const [array, setArray] = useState([]);
    const [arrayMin, setArrayMin] = useState(5);
    const [arrayMax, setArrayMax] = useState(100);
    const [arrayLength, setArrayLength] = useState(30);

    const generateRandomArray = (min, max, length) => {

        // convert arguments into numbers
        min = parseInt(min);
        max = parseInt(max);
        length = parseInt(length);

        let newArray = [];

        for (let i = 0; i < length; i++) {
            let newItem = Math.floor((Math.random() * (max - min + 1) + min));

            newArray.push(newItem);
        }

        setArray(newArray);
    }

    const displayArray = (scale) => {

        return array.map((num, index) => {
            // increase the size of the bars for visibility
            let barSize = num; // add or multiply by scale to increase size of the bars 

            return (
                <div key={index} style={{ margin: '5px', height: '20px', width: `${barSize}px`, backgroundColor: 'lightblue' }}>{num}</div>
            );
        })
    }

    return (
        <div>
            <section>
                <div>
                    <label htmlFor='min'>Min </label>
                    <input id='min' type='number' value={arrayMin} onChange={e => setArrayMin(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='max'>Max </label>
                    <input id='max' type='number' value={arrayMax} onChange={e => setArrayMax(e.target.value)} />
                </div>

                <div>
                    <label htmlFor='length'>Length </label>
                    <input id='length' type='number' value={arrayLength} onChange={e => setArrayLength(e.target.value)} />
                </div>

                <button onClick={() => generateRandomArray(arrayMin, arrayMax, arrayLength)}>new array</button>
            </section>

            {displayArray(100)}
        </div>
    )
}

export default ArrayDisplay;