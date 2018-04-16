function generateArray(size, lower, upper) {
  let randomArr = [];

  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
  }

  return randomArr;
}

function numerically(a, b) { return a - b; }

describe('Bubble Sort', function() {

  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(0);
  });

  it('handles array with one element', function() {
    expect(bubbleSort([1])).toEqual([1]);
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(0);
  });

  it('handles array with two elements', function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(swap.calls.count()).toEqual(1);
    expect(compare.calls.count()).toEqual(1);
  });

  it('handles array with many elements', function() {
    expect(bubbleSort([5, 3, 2, 6, 1])).toEqual([1, 2, 3, 5, 6]);
  });

  it('handles array with duplicates', function() {
    expect(bubbleSort([6, 6, 6, 1])).toEqual([1, 6, 6, 6]);
  });

  for (let i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function() {
      let arr = generateArray(i, 0, 100);
      let sorted = arr.slice(0).sort(numerically);
      expect(bubbleSort(arr)).toEqual(sorted);
    })
  }
});
