/*  USESTATE 
- Giúp có thể dùng state trong functional component
- Input: initialState(giá trị hoặc function)
- Output: 1 mảng có 2 phần tử tương ứng cho state và setState
- Cách dùng: const [name,setName] = useState('test')
- initialState: chỉ được gọi lần đầu để gán cho state, những lần khác sẽ sử dụng state để thực thi, không gọi lại initialState
_________________________________________________________________________________________________________
       setState (lifecycle)                  |               useState (Hooks)
--------------------------------------------- -----------------------------------------------------------                     
- Sử dụng kiểu Merging                       | - Sử dụng kiểu Replacing
- this.state = {name: 'A',age: 12}           | - const [person,setPerson] = useState({name: 'A',age: 12})
- this.setState({age:13})                    | - setPerson({age:13})             
==> {name: 'A',age: 13}                      | ==> {age: 13}                                                                
_____________________________________________|___________________________________________________________    


*/

/*  Array destructoring syntax 
  // you known before
  const array =  ["Anh","Duong"]
  const array[0] = "Anh";
  const array[1] = "Duong"

  // Use Array destructoring
  const array[a,b] = ["Anh","Duong"]; // a= "Anh", b ="Duong"
*/