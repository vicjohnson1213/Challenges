const expect = require('chai').expect;
const alternatingSort = require('./alternating-sort');

describe('alternatingSort', () => {
    it('should perform an alternating sort', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const sorted = alternatingSort(arr, (a, b) => a - b);
        expect(sorted).to.deep.equal([1, 6, 2, 5, 3, 4]);
    });

    it('should perform an alternating sort with odd length', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const sorted = alternatingSort(arr, (a, b) => a - b);
        expect(sorted).to.deep.equal([1, 7, 2, 6, 3, 5, 4]);
    });

    it('should return an empty array for an empty array', () => {
        const arr = [];
        const sorted = alternatingSort(arr, (a, b) => a - b);
        expect(sorted).to.deep.equal([]);
    });

    it('should sort strings', () => {
        const arr = ['a', 'b', 'c', 'd'];
        const sorted = alternatingSort(arr);
        expect(sorted).to.deep.equal(['a', 'd', 'b', 'c']);
    });
});
