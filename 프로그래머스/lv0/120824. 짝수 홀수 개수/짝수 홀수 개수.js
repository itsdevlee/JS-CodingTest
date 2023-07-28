function solution(num_list) {
    let answer=[]
    const even = (num_list.filter((el)=>el%2==0)).length
    const odd = (num_list.filter((el)=>el%2!=0)).length
    answer.push(even)
    answer.push(odd)
    return answer
}