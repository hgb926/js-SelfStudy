function solution(n, control) {
    var answer = 0;
    for (let i = 0; i < control.length; i++) {
        switch (control[i]) {
            case "w":
                answer++;
                break;
            case "s":
                answer--;
                break;
            case "d":
                answer += 10;
                break;
            case "a":
                answer -= 10;
                break;
        }
    }
    return answer;
}
let number = solution(0, "wsdawsdassw");
console.log(number)
// unfinished