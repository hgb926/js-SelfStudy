function solution(A,B){
    let result = 0;
    const ATemp = A.sort((a,b) => a - b)
    const BTemp = B.sort((a,b) => b - a)
    for (let i = 0; i < A.length; i++) {
        result = result + (ATemp[i] * BTemp[i])
    }
    return result;
}