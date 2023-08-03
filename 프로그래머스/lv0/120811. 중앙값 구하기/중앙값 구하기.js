function solution(array) {
    array.sort((a,b)=>a-b)
    i=Math.trunc(array.length/2)
    
    return array[i];
}