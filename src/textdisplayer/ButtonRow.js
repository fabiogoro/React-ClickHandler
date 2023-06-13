import Row from 'react-bootstrap/Row';
import { Button } from './Button'


export function ButtonRow(props) {
  return (
    <Row md="6" className="m-2 justify-content-md-center">
      { props.numbers.map((item, index) => {
        return (
          <Button key={index} displayFunction={props.displayFunction} index={index} number={item}></Button>
        )
      }) 
      }
    </Row>
  )
}
