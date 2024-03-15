//numbers = [90, 20, 10, 5, 33, 67]
//output = [5, 10, 20, 33, 67, 90]
sortType = 'asc'
//sortType = 'desc'

function sorting(sortType) {
    
    numbers = [90, 20, 10, 5, 33, 67]

    // logic return sorting acesending

    a = sortType ==='asc'? numbers.sort(function(a, b){return a - b}): numbers.sort(function(a, b){return b - a});
    return numbers;
}

var result = sorting('desc')
console.log(result)