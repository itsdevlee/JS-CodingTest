function solution(my_string, n) {
    const arr = [...my_string]
    let new_arr=[];
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<n;j++){
            new_arr.push(arr[i])
        }
    }
    return new_arr.toString().replaceAll(',','')
    
}