import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
const Footer = () => {
  return (
    <div>
    <Navbar expand="sm" className="text-bg-secondary p-4">
      <Container>
        <h3>THe Generics</h3>
        <span>youTube</span>
        <span>Facebook</span>
      </Container>
    </Navbar>
  </div>
  )
}

export default Footer