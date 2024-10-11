console.log("js linked");

/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

const numbers_array = [52, 19, 87, 26, 45, 91, 38, 63, 7, 2];
console.log(numbers_array);


function numbersBetween(arr, min, max) {
    let new_array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min && arr[i] < max) {
            new_array.push(arr[i]);
        }
    }
    return new_array;
}

console.log(numbersBetween(numbers_array, 20, 80));

