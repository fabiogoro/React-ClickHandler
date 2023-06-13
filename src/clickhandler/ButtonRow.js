import Row from 'react-bootstrap/Row';
import { Button } from './Button'
import { Component } from 'react'


export class ButtonRow extends Component {
  render() {
    return (
      <Row md="6" className="m-2 justify-content-md-center">
        { this.props.numbers.map((item, index) => {
          return (
            <Button key={index} displayFunction={this.props.displayFunction} index={index} number={item}></Button>
          )
        }) 
        }
      </Row>
    )
  }

}
