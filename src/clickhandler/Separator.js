import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Separator(props) {
  return (
    <Row className="m-2 justify-content-md-center">
      <Col md="5">
        <hr  />
      </Col>
    </Row>
  )
}
