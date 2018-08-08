import React, {Component} from 'react';

class Todo extends Component {
    constructor(){
        super();
        this.clickToggle = this.clickToggle.bind(this);
    }


    clickToggle(){
        this.props.checkComplete(this.props.todo.id);
    }

    render() {
        return (
            <li id={this.props.todo.id} className="list-group-item">
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={() => this.clickToggle()}/>
                    <input className="destroy" type="button" defaultValue="x"/>
                    <label className="todo-text">
                        <p className="edit-todo">{this.props.todo.value}</p>
                    </label>
                </div>
            </li>
        );
    }
}

export default Todo;


// onMouseOver="showDelete(1533212825065)"
// onMouseOut="hideDelete(1533212825065)">