function sortArrayDescending(arr) {
    var temp;
    for (var i = 0; i <= arr.length-2; i++){
        for (var j = i+1; j <= arr.length-1; j++){
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

var arr = [5, 12, 9, 1, 5, 6];

console.log(sortArrayDescending(arr))