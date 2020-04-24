export function bubbleSort(arrayToSort) {
    let array = arrayToSort;

    array.sort((a, b) => a - b);

    return array;
}