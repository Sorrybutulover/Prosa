import React from 'react'
import '../css/comand.css'
import { Container } from 'react-bootstrap';
import Slide from './Comand-slide';

function Comand() {
  return (
    <Container className='main-cont-com'>
        <p className='audio-text-head'>Summarai</p>
        <Slide />
    </Container>
  )
}

export default Comand