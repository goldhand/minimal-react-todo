import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {

  handleToggle = e => {
    this.props.toggle(this.props.id);
  }

  handleDelete = e => {
    this.props.delete(this.props.id);
  }

  render() {
    const toggleCssClass = this.props.complete
      ? 'complete'
      : 'incomplete';
    return (
      <div className="Todo">
        <span className={toggleCssClass} onClick={this.handleToggle}></span>
        <span className="text">{this.props.text}</span>
        <span className="delete" onClick={this.handleDelete}>x</span>
      </div>
    )
  }
}
