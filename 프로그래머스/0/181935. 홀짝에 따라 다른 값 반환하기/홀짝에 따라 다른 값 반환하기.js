function solution(n) {
    let arr=[]
    if(n%2){
        for(let i=0; i<=n; i++){
            i%2?arr.push(i):null
        }
        return arr.reduce((arr,cur)=>arr+cur)
    }else{
        for(let i=0; i<=n; i++){
            i%2?null:arr.push(i)
        }
        return arr.reduce((arr,cur)=>arr+cur*cur)
    }
   
}