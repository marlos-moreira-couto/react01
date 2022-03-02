import React from 'react';
import { render } from 'react-dom';
import Button from "./components/Button";

class App extends React.Component {
    state = {
        contador:0,
        nome:""
    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }

    adicionar = () => {
        this.setState({
            contador:this.state.contador+1
        });
    }
    chandeText = (e) => {
        this.setState({
            nome:e.target.value
        });
    }
    render() {
        console.log("render");
        return (
            <h1>
                <input onChange={this.chandeText}/>
                <div>Nome: {this.state.nome}</div>
                <div>Contador: {this.state.contador}</div>

                <Button descricao="bla bla" press={this.adicionar}>Update</Button>
            </h1>
        );
    }
}

render(<App />, document.getElementById('app'));
