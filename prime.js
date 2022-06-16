//tên hàm: checkPrime, isPrime
//nhiệm vụ: Kiểm tra 1 số có phải snt hay không
//tham số: 1 số nguyên
//dữ liệu trả về: true/false
function isPrime(n) {
    if (n<2) return false;
    if (n<4) return true;
    if (n>=4){
        for (let i = 2; i <=Math.sqrt(n); i++) {
            if (n%i==0) return false;
        }
        return true;
    }
}

// in ra 10 so nguyen to dau tien
// dem xem co bao nhieu so nguyen to trong mang
let a = [2,4, 5, 6, 3, 2];
let count = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i]%3==0) count++
}
alert(count);
