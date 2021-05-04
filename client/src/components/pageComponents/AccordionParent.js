import React from 'react'
import Card from "react-bootstrap/Card"
import Accordion from "react-bootstrap/Accordion"


const AccordionHeader = {
  cursor: "pointer"
}

const AccordionParent = () => {
  return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" style={AccordionHeader}>
            Skin Care
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Brow lift</li>
                <li>Facial filters</li>
                <li>Facelift</li>
                <li>Eyelid lift</li>
                <li>Mini facelift</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" style={AccordionHeader}>
            Butt Reduction
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>Brow lift</li>
                <li>Facial filters</li>
                <li>Facelift</li>
                <li>Eyelid lift</li>
                <li>Mini facelift</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2" style={AccordionHeader}>
           Facial Procedures
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>Brow lift</li>
                <li>Facial filters</li>
                <li>Facelift</li>
                <li>Eyelid lift</li>
                <li>Mini facelift</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3" style={AccordionHeader}>
           Body Procedures
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>Brow lift</li>
                <li>Facial filters</li>
                <li>Facelift</li>
                <li>Eyelid lift</li>
                <li>Mini facelift</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4" style={AccordionHeader}>
           Breast Procedures
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>Brow lift</li>
                <li>Facial filters</li>
                <li>Facelift</li>
                <li>Eyelid lift</li>
                <li>Mini facelift</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  )
}


export default AccordionParent

