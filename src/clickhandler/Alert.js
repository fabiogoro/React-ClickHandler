import Row from 'react-bootstrap/Row';
import { Button } from './Button'
import { Component } from 'react'
import BootstrapAlert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';


export class Alert extends Component {
  render() {
    return (
        <Row className="m-2 justify-content-md-center">
          <Col md="5">
            <BootstrapAlert>{this.props.text}</BootstrapAlert>
          </Col>
        </Row>
    )
  }

}
