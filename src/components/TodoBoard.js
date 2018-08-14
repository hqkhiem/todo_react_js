import React, {Component} from 'react';
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";

class TodoBoard extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            filter: 0,
            isSelecttedAll: false
        };
        this.textInput = React.createRef();
    }

    handleKeyPressEnter(event){
        if (event.key === "Enter" && this.textInput.current.value.trim() !== "") {
            let todo = {
                id: new Date().getTime(),
                value: this.textInput.current.value,
                status: false
            };
            this.state.todos.push(todo);
            this.setState({
                todos: this.state.todos
            });
        }
    };

    checkCompleteProcessing(id) {
        let newTodos = [...this.state.todos];
        let index = this.state.todos.findIndex((temp) => {
            return temp.id === id;
        });
        newTodos[index].status = !this.state.todos[index].status;
        this.setState({
            todos: newTodos
        });
    }

    deleteProcessing(id) {
        let index = this.state.todos.findIndex((temp) => {
            return temp.id === id;
        });
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        });
    }

    filterAllProcessing() {
        this.setState({
            filter: 0
        });
    }

    filterActiveProcessing() {
        this.setState({
            filter: 1
        });
    }

    filterCompleteProcessing() {
        this.setState({
            filter: 2
        });
    }

    clearCompleteProcessing() {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return !todo.status;
            })
        });
    }

    clickAllComplete() {
        let isSelected = !this.state.isSelecttedAll;
        let newTodos = [...this.state.todos];
        newTodos.forEach((todo) => {
            todo.status = isSelected;
        });
        this.setState({
            todos: newTodos,
            isSelecttedAll: isSelected
        });
    }

    componentDidUpdate() {
        this.textInput.current.value = '';
        localStorage.setItem("stateTodo" , JSON.stringify(this.state));
    }

    doubleClickTodoProcessing(id, value) {
        let newTodos = [...this.state.todos];
        let index = newTodos.findIndex((temp) => {
            return temp.id === id;
        });

        newTodos[index].value = value;
        this.setState({
            todos: newTodos,
        });
    }

    componentWillMount(){
        let oldState = JSON.parse(localStorage.getItem("stateTodo"));
        if (oldState !== null) {
            this.setState({
                todos : oldState.todos,
                filter : oldState.filter,
                isSelecttedAll : oldState.isSelecttedAll
            });
        }
    }

    render() {
        let todosResult = null;
        if (this.state.filter === 0) {
            todosResult = this.state.todos;
        } else if (this.state.filter === 1) {
            todosResult = this.state.todos.filter((todo) => {
                return !todo.status
            });
        } else if (this.state.filter === 2) {
            todosResult = this.state.todos.filter((todo) => {
                return todo.status
            });
        }

        let renderListTodo = todosResult.map((todo, index) => {
            return <Todo key={index} todo={todo} checkComplete={(value) => this.checkCompleteProcessing(value)}
                         deleteTodo={(id) => this.deleteProcessing(id)}
                         doubleClickTodo={(id, value) => this.doubleClickTodoProcessing(id, value)}/>;
        });

        return (
            <ul className="list-group" id="list-group">
                <div className="list-group-item">
                    <input className="toggle-all" type="checkbox" onChange={() => this.clickAllComplete()}
                           checked={this.state.isSelecttedAll}/>
                    <input type="text" className="new-todo" id="new-todo" placeholder="What needs to be done?"
                           onKeyPress={(event) => this.handleKeyPressEnter(event)} ref={this.textInput}/>
                </div>

                {renderListTodo}

                {this.state.todos.length > 0 &&
                <TodoFooter todos={this.state.todos}
                            filterAll={() => this.filterAllProcessing()}
                            filterActive={() => this.filterActiveProcessing()}
                            filterComplete={() => this.filterCompleteProcessing()}
                            filter={this.state.filter}
                            clearComplete={() => this.clearCompleteProcessing()}
                />
                }
            </ul>
        );
    }
}

export default TodoBoard;
