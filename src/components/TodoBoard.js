import React, {Component} from 'react';
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";

class TodoBoard extends Component {
    constructor(){
        super();
        this.state = {
            todos : [],
            filter : 0
        };
        this.textInput = React.createRef();
    }

    handleKeyPressEnter = (event) => {
        if (event.key === "Enter" && this.textInput.current.value.trim() !== "") {
            let newTodos = this.state.todos.slice();
            let todo = {
                id : new Date().getTime(),
                value : this.textInput.current.value,
                status : false
            }
            newTodos.push(todo);
            this.setState({
                todos : newTodos
            });
        }
    }

    checkCompleteProcessing(id){
        console.log("Event: " + id);
        let todosCopy = JSON.parse(JSON.stringify(this.state.todos));
        let index = this.state.todos.findIndex((temp) => {
            return temp.id === id;
        });
        todosCopy[index].status = !todosCopy[index].status;
        this.setState({
            todos : todosCopy
        });
        console.log(todosCopy);
    }

    deleteProcessing(id){
        console.log("Event: " + id);
        let todosCopy = JSON.parse(JSON.stringify(this.state.todos));
        let index = this.state.todos.findIndex((temp) => {
            return temp.id === id;
        });
        todosCopy.splice(index, 1);
        this.setState({
            todos : todosCopy
        });
    }

    filterAllProcessing(){
        this.setState({
            filter : 0
        });
    }

    filterActiveProcessing(){
        this.setState({
            filter : 1
        });
    }

    filterCompleteProcessing(){
        this.setState({
            filter : 2
        });
    }

    componentDidUpdate(){
        this.textInput.current.value = "";
    }

    render() {
        let todosResult = null;
        if (this.state.filter === 0){
            todosResult = this.state.todos;
        } else if (this.state.filter === 1){
            todosResult = this.state.todos.filter((todo) => {
                return !todo.status
            });
        } else if (this.state.filter === 2){
            todosResult = this.state.todos.filter((todo) => {
                return todo.status
            });
        }
        let renderListTodo = todosResult.map((todo, index) => {
            return <Todo key={index} todo={todo} checkComplete={(value) => this.checkCompleteProcessing(value)} deleteTodo={(value) => this.deleteProcessing(value)}/>;
        });
        return (
            <ul className="list-group" id="list-group">
                <div className="list-group-item">
                    <input className="toggle-all" type="checkbox"/>
                    <input type="text" className="new-todo" id="new-todo"
                           placeholder="What needs to be done?" onKeyPress={this.handleKeyPressEnter} ref={this.textInput}/>
                </div>
                {renderListTodo}
                <TodoFooter todos={this.state.todos}
                            filterAll={() => this.filterAllProcessing()}
                            filterActive={() => this.filterActiveProcessing()}
                            filterComplete={() => this.filterCompleteProcessing()}
                            filter={this.state.filter}
                />
            </ul>
        );
    }
}

export default TodoBoard;
