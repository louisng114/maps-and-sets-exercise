// new Set([1,1,2,2,3,4]) //

// A set with elements 1, 2, 3, 4.

/*==========================================================*/

// [...new Set("referee")].join("")

// "ref"

/*==========================================================*/

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// m has two key/value pairs because the two arrays have different pointers.

/*==========================================================*/

const hasDuplicate = arr => arr.length !== new Set(arr).size;

/*==========================================================*/

const vowelCount = str => {
    const vowels = "aeiou";
    const map = new Map();

    [...str].forEach((letter) => {
        if (vowels.indexOf(letter) !== -1) {
            if (map.has(letter)) {
                map.set(letter, map.get(letter) + 1);
            } else {
                map.set(letter, 1);
            }
        }
    });

    return map;
};
