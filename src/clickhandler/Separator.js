import Row from 'react-bootstrap/Row';
import { Component } from 'react'
import Col from 'react-bootstrap/Col';


export class Separator extends Component {
  render() {
    return (
      <Row className="m-2 justify-content-md-center">
        <Col md="5">
          <hr  />
        </Col>
      </Row>
    )
  }

}
