const reverseString = function (word) {
    let reversed = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        reversed = char + reversed;
    }
    return reversed;


};

// Do not edit below this line
module.exports = reverseString;
