function solution(arr) {
    let count=0
    arr.map((x)=>count+=x)
    return count/arr.length
}