module.exports = function check(str, bracketsConfig) {
    let leftBracketCount = 0;
    let rightBracketCount = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            leftBracketCount++;
        } else if (str[i] == ')') {
            rightBracketCount++;
        }
    }
    if (leftBracketCount == rightBracketCount) {
        return true
    } else return false
}
