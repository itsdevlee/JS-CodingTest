function solution(s1, s2) {
    let result=0
    s1.forEach((el)=>(s2.forEach((s2El)=>el===s2El?result+=1:null)))
    return result
}