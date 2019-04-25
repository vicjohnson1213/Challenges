module.exports = function alternatingSort(arr, compare) {
    compare = typeof compare === 'function' ? compare : undefined;
    arr.sort(compare);
    let alternating = [];

    while (arr.length) {
        alternating.push(arr.shift());
        const largest = arr.pop();
        if (largest) {
            alternating.push(largest);
        }
    }

    return alternating;
}
