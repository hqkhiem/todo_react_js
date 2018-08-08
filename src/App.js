import React, {Component} from 'react';
import TodoInput from "./components/TodoInput";
import Footer from "./components/Footer";

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
                        <header className="header">
                            <TodoInput handleAdd={(value) => this.handleAddProcessing(value)}/>
                        </header>
                        <Footer/>
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
