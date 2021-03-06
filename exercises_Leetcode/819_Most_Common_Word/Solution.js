/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let strArr = paragraph
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(' ')
        .filter(function(el) {
            return el != '';
        });

    // console.log('strArr ', strArr);
    let hashMap = {};

    let filteredStrArr = strArr.filter(function(el) {
        // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        return banned.indexOf(el) < 0; // indexOf возвращает -1 если не найдено вхождение елемента
    });
    // console.log('filteredStrArr ', filteredStrArr);
    for (let i = 0; i < filteredStrArr.length; i++) {
        hashMap[filteredStrArr[i]] = hashMap[filteredStrArr[i]] ? ++hashMap[filteredStrArr[i]] : 1;
    }

    // console.log(hashMap);
    let valuesOfObject = Object.values(hashMap);
    let maxVal = Math.max(...valuesOfObject);
    // console.log(maxVal);

    return Object.keys(hashMap).find(key => hashMap[key] === maxVal);
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])); // "ball"
console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a'])); // "b"
