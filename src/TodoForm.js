import React from 'react';
import './TodoForm.css';

export default class Todo extends React.Component {

  state = {
    text: '',
  }

  handleEdit = e => {
    this.setState({
      text: e.target.value,
    });
  }

  handleCreate = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="TodoForm">
        <form>
          <input value={this.state.text} onChange={this.handleEdit} />
          <button onClick={this.handleCreate}>Create</button>
        </form>
      </div>
    )
  }
}
