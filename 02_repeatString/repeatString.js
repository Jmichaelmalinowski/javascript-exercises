const repeatString = function (word, num) {
    new_word = '';
    if (num > 0) {
        while (num > 0) {
            new_word += word;
            num--
        }
    } else if (num == 0) {
        return " ";
    } else {
        return "ERROR";
    }
    return new_word;

};

// Do not edit below this line
module.exports = repeatString;
