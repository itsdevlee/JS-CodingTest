function solution(arr1, arr2) {
    let result;
    result=arr1.length>arr2.length?1:-1
    if(arr1.length===arr2.length){
        const arr1Cnt = arr1.reduce((acc,cur)=>acc+cur)
        const arr2Cnt = arr2.reduce((acc,cur)=>acc+cur)
        result=arr1Cnt>arr2Cnt?1
        :arr1Cnt<arr2Cnt?-1
        :0
    }
    return result;
}