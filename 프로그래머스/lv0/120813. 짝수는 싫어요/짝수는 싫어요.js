function solution(n) {
    let answer=[]
    for(i=1;i<=n;i++){
        i%2!==0?answer.push(i):null
    }
    return answer;
}