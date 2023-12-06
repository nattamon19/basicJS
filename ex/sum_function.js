/*
    เขียนโปรแกรม ทำ cal_sum เป็น funtion หาผลรวมของตัวเลขโดยที่ การส่ง argument เป็น (start,stop)
    เมื่อหาผลรวมได้เสร็จแล้ว ให้ return ผลลัพธ์ออกมา log นอกฟังก์ชั่น
*/

let cal_sum = (start,stop) => {
    let sum = 0
    for(let i=start; i<=stop; i++) {
        sum = sum + i
    }
    return sum
}
let result = cal_sum(1,10);
console.log(result);