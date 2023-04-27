import "./App.css";
import Header from "./MyComponents/Header";
import { ToDos } from "./MyComponents/ToDos";
import { AddToDo } from "./MyComponents/AddToDo";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am onDelete of", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = (task, desc) => {
    console.log("I am a add to do", task, desc);
    // let Sno = todos[todos.length-1].Sno+1;

    let Sno;
    if (todos.length === 0) {
      Sno = 0;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: Sno,
      task: task,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div>{10+2}</div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <Header title="My Todo List" searchBar={false} />

        {/* A <Routes > looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <AddToDo addToDo={addToDo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
