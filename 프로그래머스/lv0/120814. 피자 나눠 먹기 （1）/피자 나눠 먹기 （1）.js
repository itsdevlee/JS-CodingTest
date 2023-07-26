function solution(n) {
    let pizza;
    if(n>=7){
      if(n%7==0){
        pizza=n/7
       }else{
        pizza=parseInt(n/7)+1
       }  
    }else{
        pizza=1
    }
    return pizza
}