import BootstrapButton from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export function Button(props) {
  return (
    <Col xl="2">
      <BootstrapButton onClick={props.displayFunction} className="w-100" variant={props.index==1?"outline-success":"outline-danger"}>
        {props.number}
      </BootstrapButton>
    </Col>
  )
}
