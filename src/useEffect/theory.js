/*///// USE EFFECT 
- Giúp xử lý các Side Effects
- Mỗi hook gồm 2 phần: side effect và clean up(optional)
- Được thực thi sau mỗi lần render
- Được thực thi ít nhất sau lần render đầu tien
- Những lần render sau, chỉ được thực thi khi có dependencies thay đổi
////*/

/* Side Effects (tác động và chạy phía bên ngoài component của mình)
- Gọi API để lấy dữ liệu từ server
- Tương tác DOM
- Subscription
- setTimeout, setInterval

--- Chia thành 2 nhóm
_________________________________________________________________________________________________________
       Không cần Clean Up                    |               cần Clean Up
--------------------------------------------- -----------------------------------------------------------                     
- Gọi API                                    | - Subscription
- Tương tác DOM                              | - setTimeout, setInterval
_____________________________________________|___________________________________________________________  
*/