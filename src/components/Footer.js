import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer" id="footer">
                <div>
                    <span className="todo-count"><strong id="todo-count-number">0</strong> item left</span>
                    <button className="clear-completed" onClick="Todo.clearCompleteTodo()">Clear completed
                    </button>
                    <ul className="filters">
                        <li>
                            <a href="#/" className="selected" onClick="filterAll()">All</a>
                        </li>
                        <li>
                            <a href="#/active" onClick="filterActive()">Active</a>
                        </li>
                        <li>
                            <a href="#/completed" onClick="filterComplete()">Completed</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
