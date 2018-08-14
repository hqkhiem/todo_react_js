import React, {Component} from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            showDelete: false,
            edit: false
        };
        this.editText = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    clickToggle() {
        this.props.checkComplete(this.props.todo.id);
    };

    clickDelete() {
        this.props.deleteTodo(this.props.todo.id)
    };

    doubleClickHandle() {
        this.setState({
            edit : true
        });
    };

    handleKeyPress(event){
        if ((event.key==="Enter")) {
            this.updateTodo()
        }
    }

    handleClickOutside = e => {
        if (this.state.edit && !this.editText.current.contains(e.target)){
            this.updateTodo();
        }
    };

    updateTodo = () => {
        this.props.doubleClickTodo(this.props.todo.id, this.editText.current.value);
        if (this.editText.current.value.trim() === "") {
            this.clickDelete()
        }
        if (this.props.todo){
            this.setState({
                edit : false
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        let isComplete = (this.props.todo.status) ? "list-group-item completed" : "list-group-item ";
        let todoTextElement = (!this.state.edit) ?
            <label className="todo-text" onDoubleClick={() => this.doubleClickHandle()}>
                <p className="edit-todo">{this.props.todo.value}</p>
            </label> :
            <input className="todo-text edit" type="text" defaultValue={this.props.todo.value} onKeyPress={(event) => this.handleKeyPress(event)} ref={this.editText}/>;

        let toggleElement = (!this.state.edit) ?
            <input className="toggle" type="checkbox" onChange={() => this.clickToggle()}
                   checked={this.props.todo.status}/> : null;

        return (
            <li id={this.props.todo.id} className={isComplete}
                onMouseOver={() => this.setState({showDelete: true})}
                onMouseLeave={() => this.setState({showDelete: false})}>
                {toggleElement}
                {
                    this.state.showDelete ? <input className="destroy" type="button" defaultValue="x"
                                                   onClick={() => this.clickDelete()}/> : ""
                }
                {todoTextElement}
            </li>
        );
    }
}

export default Todo;