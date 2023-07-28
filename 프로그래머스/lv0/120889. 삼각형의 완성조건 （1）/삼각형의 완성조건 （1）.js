function solution(sides) {
    const longSide=Math.max(...sides)
    sides.sort();
    return sides[0]+sides[1]>longSide?1:2
}