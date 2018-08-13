import React, {Component} from 'react';
import TodoBoard from "./components/TodoBoard";
import TodoFooter from "./components/TodoFooter";

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="App">
                <h1 id="title">todos</h1>
                <section className="section-todo">
                    <div className="todoapp" id="todoapp">
                        <TodoBoard handleAdd={(value) => this.handleAddProcessing(value)}/>

                    </div>
                </section>
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
                    <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
                </footer>
            </div>
        );
    }
}

export default App;
