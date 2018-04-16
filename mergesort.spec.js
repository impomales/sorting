describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([3,4,5,6,7])).toEqual([[3,4],[5,6,7]])
  });
  it('is able to return single elements', function() {
      expect(split([3,4])).toEqual([[3],[4]])
    });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([4,7],[1, 5])).toEqual([1,4,5,7]);
  });

  it('is able to merge sorted arrays of different lengths', function() {
    expect(merge([4, 7,9,13,15], [1,5])).toEqual([1,4,5,7,9,13,15]);
  });
});

describe('mergeSort', function() {
  it('can sort an array of one element', function() {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('can sort an array of many elements', function() {
    expect(mergeSort([5,32,6,7,1,7,8,4,7,4,2])).toEqual([1,2,4,4,5,6,7,7,7,8,32]);
  });

  it('can sort an already sorted array', function() {
    expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  })
});
