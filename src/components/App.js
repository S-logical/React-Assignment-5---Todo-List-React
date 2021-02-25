import React , {useState} from "react";
import "./../styles/App.css";
import AddTodo from "./AddTodo/AddTodo";
import TodoContainer from "./TodoContainer/TodoContainer";

function App() 
{
	const [todoListValues, setTodoListValues] = useState([]);
	return (
	<div id="main">
		<AddTodo todoListValues={todoListValues} setTodoListValues={setTodoListValues} />
		<TodoContainer todoListValues={todoListValues} setTodoListValues={setTodoListValues} />
	</div>
	);
}


export default App;