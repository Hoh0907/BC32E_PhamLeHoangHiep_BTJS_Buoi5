/* Bài 1 : Quản lý tuyển sinh 
Mô hình 3 khối :
- Input : doiTuong : Number , khuVuc : Number , tongDiem , diem1:Number , diem2:Number,diem3:Number, 
- Xử lý:
+ sS2 = doiTuong + khuVuc + diem1 + diem2 + diem3
+ diem1 <= 0 || diem2 <= 0 || diem3 <= 0
+ sS2 >= tongDiem -> Đậu 
+ sS2 < tongDiem -> Rớt
- Output : m=?
*/
document.getElementById('btnResult').onclick = function() {
    var doiTuong = Number(document.getElementById('user').value),
        khuVuc = Number(document.getElementById('local').value),
        tongDiem = document.getElementById('num1').value,
        m = '';
    var diem1 = Number(document.getElementById('diem1').value),
        diem2 = Number(document.getElementById('diem2').value),
        diem3 = Number(document.getElementById('diem3').value);
    var sS2 = doiTuong + khuVuc + diem1 + diem2 + diem3;
    if (diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
        m = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    } else if (sS2 >= tongDiem) {
        m = "Bạn đã đậu. Tổng điểm: " + sS2;
    } else {
        m = "Bạn đã rớt. Tổng điểm: " + sS2;
    }
    document.getElementById('txtResult').innerHTML = m;
}


/* Bài 2 : Tính tiền điện 
 *   Mô hình 3 khối :
    - Input:
 *      + khachHang: String, soKw: Number
 * - Xử lý:
 *      + soKw >=0 && soKw <=50 => ketQuaBai2 = soKw *kw1;
 *      + soKw > 50 && soKw <= 100 => ketQuaBai2 = (50 * kw1) + ((soKw - 50) * kw2)
 *      + soKw > 100 && soKw <= 200 => ketQuaBai2 = (50 * kw1) + (50 * kw2) + ((soKw - 100) * kw3);
 *      + soKw > 200 && soKw <= 350 => ketQuaBai2 = (50 * kw1) + (50 * kw2) + (100 * kw3) + ((soKw - 200) * kw4)
 *      + soKw > 350 =>ketQuaBai2 = (50 * kw1) + (50 * kw2) + (100 * kw3) + (150 * kw4) + ((soKw - 350) * kw5)
 *      + ketQuaBai2 = '0'; alert('Số kw không hợp lệ! Vui lòng nhập lại');
 * -Output:
 *      + keQuaBai2 = ?
*/
function tienDien() {
    var khachHang = document.getElementById('kH').value,
        soKw = Number(document.getElementById('kW').value),
        money = 0;
    var kw1 = 500,
        kw2 = 650,
        kw3 = 850,
        kw4 = 1100,
        kw5 = 1300;
    if (0 < soKw && soKw <= 50) {
        money = soKw * kw1;
    } else if (50 < soKw && soKw <= 100) {
        money = 50 * kw1 + (soKw - 50) * kw2;
    } else if (100 < soKw && soKw <= 200) {
        money = 50 * kw1 + 50 * kw2 + (soKw - 100) * kw3;
    } else if (200 < soKw && soKw <= 350) {
        money = 50 * kw1 + 50 * kw2 + 100 * kw3 + (soKw - 200) * kw4;
    } else if (soKw > 350) {
        money = 50 * kw1 + 50 * kw2 + 100 * kw3 + 150 * kw4 + (soKw - 350) * kw5;
    } else
        alert('Đứt dây rồi gọi thợ đi');
    document.getElementById('thanhTien').innerHTML = `Name ${khachHang} Tiền điện ${money.toLocaleString()} VND`;
}
document.getElementById('btnTinhTien').onclick = tienDien;
// document.getElementById('btnTinhTien').onclick = function() {
//     var khachHang = document.getElementById('kH').value,
//         soKw = Number(document.getElementById('kW').value),
//         money = 0;
//     var kw1 = 500,
//         kw2 = 650,
//         kw3 = 850,
//         kw4 = 1100,
//         kw5 = 1300;
//     if (0 < soKw && soKw <= 50) {
//         money = soKw * kw1;
//     } else if (50 < soKw && soKw <= 100) {
//         money = 50 * kw1 + (soKw - 50) * kw2;
//     } else if (100 < soKw && soKw <= 200) {
//         money = 50 * kw1 + 50 * kw2 + (soKw - 100) * kw3;
//     } else if (200 < soKw && soKw <= 350) {
//         money = 50 * kw1 + 50 * kw2 + 100 * kw3 + (soKw - 200) * kw4;
//     } else if (soKw > 350) {
//         money = 50 * kw1 + 50 * kw2 + 100 * kw3 + 150 * kw4 + (soKw - 350) * kw5;
//     } else
//         alert('Đứt dây rồi gọi thợ đi');
//     document.getElementById('thanhTien').innerHTML = `Name ${khachHang} Tiền điện ${money.toLocaleString()}`;
// }


/* Bài 3 : Tính thuế thu nhập cá nhân 
 * Mô hình 3 khối:
 * - Input: 
 *      + H: String, L: Number
 *      + L >0 && L <= 60,000,000 => money1 = L*0.05
 *      + L > 60,000,000 && L <= 120,000,000 => money1 = L*0.1
 *      + L > 120,000,000 && L <= 210,000,000 => money1 = L*0.15
 *      + L > 210,000,000 && L <= 384,000,000 => money1 = L*0.2
 *      + L > 384,000,000 && L <= 624,000,000 => money1 = L*0.25
 *      + L > 624,000,000 && L <= 960,000,000 => money1 = L*0.3
 *      + L > 960,000,000 => money1 = L*0.35
 * - Output:
 *      + money1 = ?
 */
// document.getElementById('btnTinhTienThue').onclick = function() {
//         var H = document.getElementById('kH1').value,
//             L = Number(document.getElementById('tongThuNhap').value) - 4e6 - 16e5 * Number(document.getElementById('User1').value),
//             money1 = 0;
//         if (L > 0 && L <= 16e5) {
//             money1 = L * 0.05;
//         } else if (L > 6e7 && L <= 12e7) {
//             money1 = L * 0.1;
//         } else if (L > 12e7 && L <= 21e7) {
//             money1 = L * 0.15;
//         } else if (L > 21e7 && L <= 384e6) {
//             money1 = L * 0.2;
//         } else if (L > 384e6 && L <= 624e6) {
//             money1 = L * 0.25;
//         } else if (L > 624e6 && L <= 96e7) {
//             money1 = L * 0.3;
//         } else if (L > 96e7) {
//             money1 = 0.35 * L;
//         } else {
//             money1 = "Số tiền thu nhập ko hợp lệ";
//         }
//         money1 = new Intl.NumberFormat("vn-VN").format(money1);
//         document.getElementById('thanhTien1').innerHTML = `Họ Tên ${ H } Tiền thuế thu nhập cá nhân ${money1} VND`;
//     }
function thue() {
    var H = document.getElementById('kH1').value,
        T = Number(document.getElementById('tongThuNhap').value),
        M = Number(document.getElementById('User1').value),
        L = T - 4e6 - 16e5 * M,
        money1 = 0;
    if (L > 0 && L <= 16e5) {
        money1 = L * 0.05;
    } else if (L > 6e7 && L <= 12e7) {
        money1 = L * 0.1;
    } else if (L > 12e7 && L <= 21e7) {
        money1 = L * 0.15;
    } else if (L > 21e7 && L <= 384e6) {
        money1 = L * 0.2;
    } else if (L > 384e6 && L <= 624e6) {
        money1 = L * 0.25;
    } else if (L > 624e6 && L <= 96e7) {
        money1 = L * 0.3;
    } else if (L > 96e7) {
        money1 = 0.35 * L;
    } else {
        money1 = "Số tiền thu nhập ko hợp lệ";
    }
    money1 = new Intl.NumberFormat("vn-VN").format(money1);
    document.getElementById('thanhTien1').innerHTML = `Họ Tên ${ H } Tiền thuế thu nhập cá nhân ${money1} VND`;
}
document.getElementById('btnTinhTienThue').onclick = thue;

/* Bài 4: Tính tiền cáp 
 * Mô hình 3 khối:
 * - Input:
 *      + e: String, n: Number, t: Number, u: Number
 * - Xử lý:
 *      if (e == "user") {
        c = 4.5 + 20.5 + t * 7.5;
    } else if (e == "user2") {
        if (u > 0 && u <= 10) {
            c = 15 + 50 * t + 75;
        } else { c = 15 + 50 * t + 75 + (u - 10) * 5; }
    } else { alert('Hãy chọn loại khách hàng') }
 * - Output:
 *      + c = ?
*/
function disableInput() {
    var e = document.getElementById('selCustomer').value;
    document.getElementById('Connect').style.display = "user2" == e ? "block" : "none";
}

function tienCap() {
    var e = document.getElementById("selCustomer").value,
        n = document.getElementById("ID").value,
        t = Number(document.getElementById("Channel").value),
        u = Number(document.getElementById("Connect").value),
        c = 0;
    if (e == "user") {
        c = 4.5 + 20.5 + t * 7.5;
    } else if (e == "user2") {
        if (u > 0 && u <= 10) {
            c = 15 + 50 * t + 75;
        } else { c = 15 + 50 * t + 75 + (u - 10) * 5; }
    } else { alert('Hãy chọn loại khách hàng') }
    c = new Intl.NumberFormat('en-EN', { style: "currency", currency: "USD" }).format(c);
    document.getElementById('txtNet').innerHTML = "Mã khách hàng " + n + " Tiền cap " + c;
}
document.getElementById('btnNet').onclick = tienCap;
// document.getElementById('btnNet').onclick = function() {
//     var e = document.getElementById("selCustomer").value,
//         n = document.getElementById("ID").value,
//         t = Number(document.getElementById("Channel").value),
//         u = Number(document.getElementById("Connect").value),
//         c = 0,
//         d = t * 7.5;
//     if (e == "user") {
//         c = 4.5 + 20.5 + t * 7.5;
//     } else if (e == "user2") {
//         if (u > 0 && u <= 10) {
//             c = 15 + 50 * t + 75;
//         } else { c = 15 + 50 * t + 75 + (u - 10) * 5; }
//     } else { alert('Hãy chọn loại khách hàng') }
//     c = new Intl.NumberFormat('en-EN', { style: "currency", currency: "USD" }).format(c);
//     document.getElementById('txtNet').innerHTML = "Mã khách hàng " + n + "Tiền cap " + c;
// }