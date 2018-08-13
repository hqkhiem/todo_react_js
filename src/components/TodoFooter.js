import React, {Component} from 'react';

class TodoFooter extends Component {

    clickFilterAll = () => {
        this.props.filterAll();
    };

    clickFilterActive = () => {
        this.props.filterActive();
    };

    clickFilterComplete = () => {
        this.props.filterComplete();
    };

    render() {
        let leftTodos = this.props.todos.filter((todo) => {
            return !todo.status
        });

        return (
            <footer className="footer" id="footer">
                <div>
                    <span className="todo-count"><strong id="todo-count-number">{leftTodos.length}</strong> item left</span>
                    <button className="clear-completed" onClick="Todo.clearCompleteTodo()">Clear completed
                    </button>
                    <ul className="filters">
                        <li>
                            <a href="#/" className="selected" onClick={() => this.clickFilterAll()}>All</a>
                        </li>
                        <li>
                            <a href="#/active" onClick={() => this.clickFilterActive()}>Active</a>
                        </li>
                        <li>
                            <a href="#/completed" onClick={() => this.clickFilterComplete()}>Completed</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default TodoFooter;
