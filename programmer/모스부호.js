const solution = letter => {
    const aToZ = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const map = {}
    for (let i = 0; i < aToZ.length; i++) {
        map[aToZ[i]] = String.fromCharCode(i+97);
    }
    return letter.split(" ").map(code => map[code]).join('');
}
console.log(solution(".... . .-.. .-.. ---"))


