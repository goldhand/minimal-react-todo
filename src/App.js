import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './App.css';

class App extends React.Component {

  state = {
    todos: {},
    counter: 0,
  }

  handleCreate = text => {
    this.setState({
      todos: {
        ...this.state.todos,
        [this.state.counter] : {
          complete: false,
          text,
          id: this.state.counter,
        },
      },
      counter: this.state.counter + 1,
    });
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
