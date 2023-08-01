function solution(n, control) {

    [...control].forEach(el=> el=='w'?n+=1:el=='s'?n-=1:el=='d'?n+=10:el=='a'?n-=10:null )
    return  n;
}