function solution(numbers) {
    let sum=0
    numbers.forEach((element)=>{
        sum+=element
    })
    return sum/numbers.length
}