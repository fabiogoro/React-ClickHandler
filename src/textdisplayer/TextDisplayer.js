import { ButtonRow } from './ButtonRow'
import { Display } from './Display'
import { Separator } from './Separator'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

export function TextDisplayer() {
  const [displayMessage, setMessage] = useState("")
  return (
    <Container>
      <ButtonRow displayFunction={(e)=>setMessage(`You have clicked ${e.target.innerText}`)} numbers={[1,2]}></ButtonRow>
      <Separator></Separator>
      <ButtonRow displayFunction={(e)=>setMessage(`You have clicked ${e.target.innerText}`)} numbers={[2,4]}></ButtonRow>
      <Separator></Separator>
      <ButtonRow displayFunction={(e)=>setMessage(`You have clicked ${e.target.innerText}`)} numbers={[3,6]}></ButtonRow>
      <Separator></Separator>
      {displayMessage?<Display text={displayMessage}></Display>:null}
    </Container>
  );
}
