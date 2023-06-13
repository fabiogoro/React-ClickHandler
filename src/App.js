import { ClickHandler } from './clickhandler/ClickHandler'
import Container from 'react-bootstrap/Container';
import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Container>
        <ClickHandler></ClickHandler>
      </Container>
    );
  }
}
