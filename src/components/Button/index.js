import React, {Component} from "react";

class Button extends Component{
    render() {
        return (
          <div>
              <div>{this.props.title} - {this.props.descricao}</div>
              <button>{this.props.children}</button>
          </div>
        );
    }
}

export default Button;
