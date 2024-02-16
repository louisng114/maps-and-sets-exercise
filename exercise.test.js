it ("should determine if an array has duplicate elements with hasDuplicate()", () => {
    expect(hasDuplicate([1,3,2,1])).toBe(true);
    expect(hasDuplicate([1,5,-1,4])).toBe(false);
});

it ("should count the vowels in a string and return a map with the counts with hasDuplicate()", () => {
    expect(vowelCount('awesome')).toEqual(new Map([["a",1],["e",2],["o",1]]));
    expect(vowelCount('Colt')).toEqual(new Map([["o",1]]));
});
