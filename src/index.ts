function getDiff (a: string, b: string): {amount: number; array: string[]}{
    const mainArray: string[] = [...a];
    const arrayToCompare: string[] = [...b];
    const diffArray: string[] = [];

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

    const amount: number = diffArray.length;
    return {amount: amount, array: diffArray};
};


console.log(getDiff('abc', 'abcd')); // { amount: 1, array: ['d'] }
console.log(getDiff('abcd', 'cdfe')); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff('abc', 'wbbcc')); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff('abc', 'abc')); // { amount: 0, array: [] }