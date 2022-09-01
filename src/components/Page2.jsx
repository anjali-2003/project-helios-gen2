
import React from "react";
import Features from "./Features";
import Adv from "./Adv";
import Card from "./Card";
import description from "../description";
import contacts from "../contacts";
import ScrollToTop from "react-scroll-to-top";
import Row from 'react-bootstrap/Row';

function createCard(contact) {
    return (
      <Card
        key={contact.id}
        img={contact.img}
        name={contact.name}
        email={contact.email}
        linkedin={contact.linkedin}
        twitter={contact.twitter}
        github={contact.github}
      />
    );
  }
  
  function createText(des) {
    return(
      <Adv 
        key={des.id}
        img={des.img}
        text={des.text}
      />
    );
  }
 function Page2() {
    return <div>
    <Features />
    <div style={{color:"black", fontSize:40, textAlign:"center",marginTop:40,marginBottom:30}}>Advantages</div>
    <Row>
      {description.map(createText)}
    </Row>
    <div style={{color:"black", fontSize:40, textAlign:"center",marginTop:40,marginBottom:30}}>Team Members</div>
    <Row>
      {contacts.map(createCard)}
    </Row>
    <ScrollToTop smooth="true" viewBox="0 0 260 200" />
  </div>
 }
 export default Page2;