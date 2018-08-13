import React, {Component} from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            showDelete : false
        }
    }

    clickToggle = () => {
        this.props.checkComplete(this.props.todo.id);
    }

    clickDelete = () => {
        this.props.deleteTodo(this.props.todo.id)
    }

    render() {
        let isComplete = (this.props.todo.status) ? "list-group-item completed" : "list-group-item ";

        return (
            <li id={this.props.todo.id} className={isComplete} onMouseOver={() => this.setState({ showDelete : true})} onMouseLeave={() => this.setState({ showDelete : false})}>
                <input className="toggle" type="checkbox" onClick={() => this.clickToggle()}
                       checked={this.props.todo.status}/>
                {
                    this.state.showDelete ? <input className="destroy" type="button" defaultValue="x" onClick={() => this.clickDelete()}/> : ""
                }
                <label className="todo-text">
                    <p className="edit-todo">{this.props.todo.value}</p>
                </label>
            </li>
        );
    }
}

export default Todo;


// onMouseOver="showDelete(1533212825065)"
// onMouseOut="hideDelete(1533212825065)">