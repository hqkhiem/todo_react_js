import React, {Component} from 'react';
import Todo from "./Todo";

class TodoInput extends Component {
    constructor(){
        super();
        this.state = {
            todos : []
        };
        this.textInput = React.createRef();
        this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
    }

    handleKeyPressEnter(event){
        if (event.key === "Enter") {
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
        console.log("checkComplete");
        console.log("Event: " + id);
        let todo = Object.assign({},this.state.todos.filter(todo => todo.id === id));
        todo[0].status = !todo[0].status;
        console.log(todo[0]);


    }

    componentDidUpdate(){
        this.textInput.current.value = "";
    }

    render() {
        let renderListTodo = this.state.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} checkComplete={(value) => this.checkCompleteProcessing(value)}/>;
        });
        return (
            <ul className="list-group" id="list-group">
                <div className="list-group-item">
                    <input className="toggle-all" type="checkbox"/>
                    <input type="text" className="new-todo" id="new-todo"
                           placeholder="What needs to be done?" onKeyPress={this.handleKeyPressEnter} ref={this.textInput}/>
                </div>
                {renderListTodo}
            </ul>
        );
    }
}

export default TodoInput;
