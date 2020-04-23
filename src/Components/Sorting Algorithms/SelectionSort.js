export function selectionSort(arrayToSort) {
    let array = arrayToSort;

    // The code below is for debugging 
    // array.sort((a, b) => a - b);

    // I copied this code wholesale from https://codingmiles.com/sorting-algorithms-insertion-sort-using-javascript-2/

    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        //Number of passes
        var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
        for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
            if (array[j] < array[min]) { //Compare the numbers
                min = j; //Change the current min number position if a smaller num is found
            }
        }
        if (min != i) {
            //After each pass, if the current min num != initial min num, exchange the position.
            //Swap the numbers 
            var tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
}