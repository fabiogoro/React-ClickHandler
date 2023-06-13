import Row from 'react-bootstrap/Row';
import { Button } from './Button'
import BootstrapAlert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';


export function Alert(props) {
    return (
        <Row className="m-2 justify-content-md-center">
          <Col md="5">
            <BootstrapAlert>{props.text}</BootstrapAlert>
          </Col>
        </Row>
    )
}
