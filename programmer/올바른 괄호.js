const solution = s => {
    let isCorrect = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            isCorrect++;
        } else {
            isCorrect--
        }
        if (isCorrect < 0) {
            return false;
        }
    }
    return !isCorrect;
}