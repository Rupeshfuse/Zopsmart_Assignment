function sum(num) {
    let currentSum = num;

    function innerSum(nextNum) {
        if (nextNum === undefined) {
            return currentSum;
        }
        currentSum += nextNum;
        return innerSum;
    }

    return innerSum;
}

console.log(sum(1)(2)(3)(4)(5)());
console.log(sum(3)(7)());
console.log(sum(10)(20)(30)(40)()); 