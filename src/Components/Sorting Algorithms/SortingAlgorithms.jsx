import React, { useState, useEffect } from 'react';

// import alogrithms
import { selectionSort } from './SelectionSort';
import { bubbleSort } from './BubbleSort';

const ArrayDisplay = (props) => {

    // prevArray will store the array's unsorted state
    const [prevArray, setPrevArray] = useState([]);

    // mainArray will be the array that gets animated during sort
    const [mainArray, setMainArray] = useState([]);

    const [arrayMin, setArrayMin] = useState(5);
    const [arrayMax, setArrayMax] = useState(100);
    const [arrayLength, setArrayLength] = useState(100);

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

        setPrevArray(newArray);
        setMainArray(newArray);
    }

    const displayArray = (arrayToDisplay, scale) => {
        return arrayToDisplay.map((num, index) => {
            let barSize = num; // add or multiply by scale to increase size of the bars

            return (
                <div
                    key={index}
                    id={index}
                    style={{
                        display: 'inline-block',
                        margin: '1px',
                        width: '100%',
                        minWidth: '1px',
                        height: `${barSize}px`,
                        backgroundColor: 'lightblue'
                    }}
                >
                </div>
            );
        })
    }

    const selectionSortHelper = (arrayToSort) => {
        // save the array's current, unsorted state
        setPrevArray([...mainArray]);

        // call the algorithm and display the sorted array
        let sortedArray = selectionSort(arrayToSort);
        setMainArray([...sortedArray]);

        // compare the two arrays (for debugging)
        console.log('BEFORE SORT', prevArray);
        console.log('SORTED MAIN', mainArray);
    }

    const bubbleSortHelper = (arrayToSort) => {
        // save the array's current, unsorted state
        setPrevArray([...mainArray]);

        // call the algorithm and display the sorted array
        let sortedArray = selectionSort(arrayToSort);
        setMainArray([...sortedArray]);

        // compare the two arrays (for debugging)
        console.log('BEFORE SORT', prevArray);
        console.log('SORTED MAIN', mainArray);
    }

    useEffect(() => {
        console.log('main array has changed');
    }, [mainArray]);

    return (
        <div>
            {/* ARRAY SETTINGS */}
            <section style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <label htmlFor='min'>Min </label>
                <input id='min' type='number' value={arrayMin} onChange={e => setArrayMin(e.target.value)} />

                <label htmlFor='max'>Max </label>
                <input id='max' type='number' value={arrayMax} onChange={e => setArrayMax(e.target.value)} />

                <label htmlFor='length'>Length </label>
                <input id='length' type='number' value={arrayLength} onChange={e => setArrayLength(e.target.value)} />

                <button onClick={() => generateRandomArray(arrayMin, arrayMax, arrayLength)}>new array</button>
            </section>

            {/* SORTING ALGORITHM BUTTONS */}
            <section style={{ paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => selectionSortHelper(mainArray)}>selection sort</button>
                <button onClick={() => bubbleSortHelper(mainArray)}>bubble sort</button>
            </section>


            {/* ARRAY DISPLAY */}
            <section style={{ width: '100%', display: 'flex', marginBottom: '20px', backgroundColor: 'gray' }}>
                <h4>Array Prior to Sorting</h4>
                {prevArray.length > 0 ? displayArray(prevArray, 100) : null}
            </section>

            <section style={{ width: '100%', display: 'flex', backgroundColor: 'black', color: 'white' }}>
                <h4>Sorted Array</h4>
                {displayArray(mainArray, 100)}
            </section>
        </div>
    )
}

export default ArrayDisplay;