import React, { Component } from "react";
import Upper from "./components/Upper/Upper";
import TodoListTemplate from "./components/TodoListTemplate.js/TodoListTemplate";
import Form from "./components/Form/Form";
import TodoItemList from "./components/TodoItemList/TodoItemList";
import Motivation from "./components/Motivation/Motivation";
import Tobe from "./components/Tobe/Tobe";


class App extends Component {
  id = 6;

  state = {
    input: "",
    todos: [
      { id: 0, text: "Wake up at 6:00", checked: true },
      { id: 1, text: "Morning HIIT", checked: false },
      { id: 2, text: "100 pushups", checked: false },
      { id: 3, text: "Meditation", checked: false },
      { id: 4, text: "Morning shower", checked: false },
      { id: 5, text: "Read 15 pages", checked: false }
    ]
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",

      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <>
        <Upper />
        <TodoListTemplate
        
          form={
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
            />
          }
        >
          <TodoItemList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </TodoListTemplate>
        <Tobe />
        <Motivation />
      </>
    );
  }
}

export default App;

