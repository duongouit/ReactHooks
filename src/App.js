import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './useState/components/ColorBox';
import ToDoList from './useState/components/TodoList';
import TodoForm from './useState/components/TodoForm';
import PostList from './useEffect/components/PostList';
import SearchDebounce from './useRef/components/SearchDebounce';


/* USE STATE
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'ABC' },
    { id: 2, title: 'DEF' },
    { id: 3, title: 'GHK' }
  ])
  function handleTodoClick(id){
    // Option 1
    setTodoList(todoList.filter(x=> x.id !== id));

    // Option 2
    // const getIndex = todoList.findIndex(x=> x.id === id);
    // if(getIndex < 0) return;
    // const newTodoList = [...todoList];
    // newTodoList.splice(getIndex,1);
    // setTodoList(newTodoList);
  }
  function handleTodoForm(item) {
    // console.log(item);
    const newToDo = [
      {id: todoList.length + 1,...item},
      ...todoList,
    ]
    setTodoList(newToDo);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ColorBox />
        <TodoForm onSubmit={handleTodoForm}/>
        <ToDoList todos = {todoList} onToDoClick={handleTodoClick}/>
      </header>
    </div>
  );
}
 */

/* USE EFFECT
function App() {
 return (
   <div className="App">
     <header className="App-header">
        <PostList/>
     </header>
   </div>
 );
}
export default App;
*/

//  function App() {
//   function handleSearchDebounce(value){
//     console.log(value);
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <SearchDebounce onSubmit={handleSearchDebounce}/>
//       </header>
//     </div>
//   );
// }
// export default App;


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}
export default App;
