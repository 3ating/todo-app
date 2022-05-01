import React, { useEffect } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }){

    useEffect(() => {
        fetch("http://localhost:3001", {
            method: ["GET"],
            // mode: 'cors',
            // credentials: "include",
            headers: {
                authToken: "token",
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
          .then(data => {
              setTodos(data);
            })
    }, [])
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;