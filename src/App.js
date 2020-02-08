import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './App.css';

class App extends React.Component {

  state = {
    todos: {},
  }

  async componentDidMount () {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    this.setState({ todos });
  }

  async handleCreate (text) {
    const todo = {
      complete: false,
      text,
    }
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo) // body data type must match "Content-Type" header
    });
    if (response.status === 'success') {
      todo.id = response.id;
      this.setState({
        todos: {
          ...this.state.todos,
          [todo.id]: todo,
        },
      });
    }
  }

  toggleTodo = id => {
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: {
          ...this.state.todos[id],
          complete: !this.state.todos[id].complete,
        }
      }
    });
  }

  deleteTodo = id => {
    const {[id]: todo, ...todos} = this.state.todos;
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div className="App">
        <TodoForm createTodo={this.handleCreate} />
        <div className="Todos">
          {Object.values(this.state.todos).map(todo => (
            <Todo {...todo} key={todo.id} delete={this.deleteTodo} toggle={this.toggleTodo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
