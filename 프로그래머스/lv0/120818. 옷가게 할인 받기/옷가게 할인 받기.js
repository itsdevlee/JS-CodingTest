function solution(price) {
    const p10=100000
    const p30=300000
    const p50=500000
    return price>=p10&&price<p30?Math.floor(price-(price*(5/100))):
           price>=p30&&price<p50?Math.floor(price-(price*(10/100))):
           price>=p50?Math.floor(price-(price*(20/100))):
           price
}