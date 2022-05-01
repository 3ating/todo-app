import React, { useState, useEffect } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TodoList from "./TodoList";


function Form({ setInputText, todos, setTodos, inputText, setStatus }){

    function writeTodosToLocalStorage(todos){
      window.localStorage.setItem("todos", JSON.stringify(todos))
    }

    useEffect(() => {
      writeTodosToLocalStorage(todos);
    }, [todos]);

    function inputTextHandler(e){
        setInputText(e.target.value)
    }

    function submitTodoHandler(e){
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("");

        fetch('http://localhost:3001', {  
          method: 'POST',
          // credentials: "include",
          mode: 'no-cors',
          body: JSON.stringify({text: inputText}),
          headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
          }
        }).then(response => {
          console.log(response);
          return response.json();
        }).then(data => {
          console.log(data)
        }).catch(err => {
          console.log("Error Reading data " + err)
        })
      }

    function statusHandler(e){
        setStatus(e.target.value);
    }

    return(
      <form>
        <input name="text" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add new task.."/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}

export default Form;