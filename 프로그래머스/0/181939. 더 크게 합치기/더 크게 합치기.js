function solution(a, b) {
    const a_str = a.toString()
    const b_str = b.toString()

    const ab = Number(a_str+b_str)
    const ba = Number(b_str+a_str)
    return ab>ba?ab:ba
        
    
}