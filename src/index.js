import React from 'react';
import { render } from 'react-dom';
import Button from "./components/Button";

class App extends React.Component {
    render() {
        return (
            <h1>
                Hello React!!

                <Button/>
            </h1>
        );
    }
}

render(<App />, document.getElementById('app'));
