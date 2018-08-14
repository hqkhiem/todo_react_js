import React, {Component} from 'react';
import TodoBoard from "./components/TodoBoard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 id="title">todos</h1>
                <section className="section-todo">
                    <div className="todoapp" id="todoapp">
                        <TodoBoard handleAdd={(value) => this.handleAddProcessing(value)}/>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
