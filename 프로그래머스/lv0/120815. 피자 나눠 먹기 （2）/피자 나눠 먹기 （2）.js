function solution(n) {
    const gcd =(x,y)=>{
        if(y===0) return x
        else return gcd(y,x%y)
    }
    const x = n>=6?n*6/gcd(n,6):n*6/gcd(6,n)
    return x/6
}