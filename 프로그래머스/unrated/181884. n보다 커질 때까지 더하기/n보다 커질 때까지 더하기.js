function solution(numbers, n) {
    sum=0
    for(i=0; sum<=n;i++){
        sum+=numbers[i]
    }
    return sum
}