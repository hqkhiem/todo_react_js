import React, {Component} from 'react';

class TodoFooter extends Component {

    clickFilterAll(){
        this.props.filterAll();
    };

    clickFilterActive(){
        this.props.filterActive();
    };

    clickFilterComplete(){
        this.props.filterComplete();
    };


    clickClearComplete(){
        this.props.clearComplete();
    };

    render() {
        let leftTodos = this.props.todos.filter((todo) => {
            return !todo.status
        });

        let filterAllButton = (this.props.filter === 0) ?
            <a href="#/" className="selected" onClick={() => this.clickFilterAll()}>All</a> :
            <a href="#/" onClick={() => this.clickFilterAll()}>All</a>;

        let filterActiveButton = (this.props.filter === 1) ?
            <a href="#/" className="selected" onClick={() => this.clickFilterAll()}>Active</a> :
            <a href="#/" onClick={() => this.clickFilterActive()}>Active</a>

        let filterCompleteButton = (this.props.filter === 2) ?
            <a href="#/" className="selected" onClick={() => this.clickFilterAll()}>Complete</a> :
            <a href="#/" onClick={() => this.clickFilterComplete()}>Complete</a>

        return (
            <footer className="footer" id="footer">
                <div>
                    <span className="todo-count"><strong
                        id="todo-count-number">{leftTodos.length}</strong> item left</span>
                    <button className="clear-completed" onClick={() => this.clickClearComplete()}>Clear completed
                    </button>
                    <ul className="filters">
                        <li>
                            {filterAllButton}
                        </li>
                        <li>
                            {filterActiveButton}
                        </li>
                        <li>
                            {filterCompleteButton}
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default TodoFooter;
