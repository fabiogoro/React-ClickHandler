import { ButtonRow } from './ButtonRow'
import { Alert } from './Alert'
import { Separator } from './Separator'
import Container from 'react-bootstrap/Container';
import { Component } from 'react'

export class ClickHandler extends Component {
  constructor(){
    super()
    this.state = {displayMessage: ""}
  }

  render() {
    return (
      <Container>
        <ButtonRow displayFunction={this.displayFunction.bind(this)} numbers={[1,2]}></ButtonRow>
        <Separator></Separator>
        <ButtonRow displayFunction={this.displayFunction.bind(this)} numbers={[2,4]}></ButtonRow>
        <Separator></Separator>
        <ButtonRow displayFunction={this.displayFunction.bind(this)} numbers={[3,6]}></ButtonRow>
        <Separator></Separator>
        {this.state.displayMessage?<Alert className="text-center" text={this.state.displayMessage}></Alert>:null}
      </Container>
    );
  }

  displayFunction(e){
    console.log('not implemented')
  }
}
