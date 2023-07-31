function solution(my_string, target) {
    const reg=new RegExp(target,'g')
    return my_string.match(reg)?1:0
}