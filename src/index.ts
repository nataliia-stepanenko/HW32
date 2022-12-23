interface GetDiffResult {
    amount: number,
    array: string[]
}

function getDiff (a: string, b: string): GetDiffResult {
    const mainArray: string[] = [...a];
    const arrayToCompare: string[] = [...b];
    let diffArray: string[] = [];

    if (a === b){
        return {amount: 0, array: []};
    }

    for (let item of arrayToCompare) {
        if (!mainArray.includes(item)) {
            diffArray.push(item);
        };
    };

    for (let item of mainArray) {
        if (!arrayToCompare.includes(item)) {
            diffArray.push(item);
        };
    };

    return {amount: diffArray.length, array: diffArray};
};

console.log(getDiff('abc', 'abcd')); // { amount: 1, array: ['d'] }
console.log(getDiff('abcd', 'cdfe')); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff('abc', 'wbbcc')); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff('abc', 'abc')); // { amount: 0, array: [] }