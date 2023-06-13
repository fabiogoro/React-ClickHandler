import BootstrapButton from 'react-bootstrap/Button';
import { Component } from 'react'
import Col from 'react-bootstrap/Col';

export class Button extends Component {
  render() {
    return (
      <Col xl="2">
        <BootstrapButton onClick={this.props.displayFunction} className="w-100" variant={this.props.index==1?"outline-success":"outline-danger"}>
          {this.props.number}
        </BootstrapButton>
      </Col>
    )
  }
}
