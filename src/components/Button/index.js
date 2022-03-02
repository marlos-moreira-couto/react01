import React, {Component} from "react";
import PropType from "prop-types";

class Button extends Component{
    static  defaultProps = {
      descricao:""
    };

    static propType = {
        title: PropType.string.isRequired,
        descricao: PropType.string
    };

    render() {
        return (
          <div>
              <div>{this.props.title} - {this.props.descricao}</div>
              <button onClick={this.props.press}>{this.props.children}</button>
          </div>
        );
    }
}

export default Button;
