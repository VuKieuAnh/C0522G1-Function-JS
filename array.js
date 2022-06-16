let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major","Leo"];
//tên hàm: indexOf, findByName
//nhiệm vụ của hàm: tìm xem tên ngôi sao có trong danh sách các sao không?
//tham số: tên ngẫu nhiên
//kiểu dữ liệu trả về: -1 nếu không có, 0, số nguyên dương nếu có
function findByName(name) {
    let index = -1;
    for (let i = 0; i < stars.length; i++) {
        if(name==stars[i]) index=i;
    }
    return index;
}
//tên hàm: getResult
//Nhiệm vụ của hàm: In ra chòm sao tương ứng
//Tham số: không có
//Kiểu dữ liệu trả về: Không trả về
function getResult() {
    //b1: Cho người dùng nhập vào tên ngôi sao
    let name = document.getElementById("name").value;
    //b2: Gọi gàm findByName để lấy ra chỉ số tương ứng
    let index = findByName(name);
    //b3: Đưa ra kết luận về chòm sao
    if (index==-1){
        document.getElementById("result").innerText="Khong ton tai";
    }
    else {
        document.getElementById("result").innerText= "Chom sao tuong ung la "+ constellation[index];
    }
}
getResult();

// function findByName1(name) {
//     let index = -1;
//     for (let i = 0; i < stars.length; i++) {
//         if(name==stars[i]) index=i;
//     }
//     console.log(index);
// }
