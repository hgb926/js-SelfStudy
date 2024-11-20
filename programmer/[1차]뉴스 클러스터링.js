function solution(str1, str2) {

    function isString(str) {
        return (str.charCodeAt() >= 65 && str.charCodeAt() <=90)
            ||
            (str.charCodeAt() >= 97 && str.charCodeAt() <=112)
    }


    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < str1.length-1; i++) {
        // 현재 인덱스가 문자고,      다음 인덱스도 문자일때
        if (isString(str1[i]) && isString(str1[i+1])) {
            let element = str1[i] + str1[i+1];
            arr1.push(element.toLowerCase());
        }
    }
    for (let i = 0; i < str2.length-1; i++) {
        if (isString(str2[i]) && isString(str2[i+1])) {
            let element = str2[i] + str2[i+1];
            arr2.push(element.toLowerCase());
        }
    }

    let intersection = []; // 교집합
    let union = [...arr1, ...arr2]; // 합집합
    let set = [...new Set(union)];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            intersection.push(arr1[i])
        }
    }


    return arr2;

}
