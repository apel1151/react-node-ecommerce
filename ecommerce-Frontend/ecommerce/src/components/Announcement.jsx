import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";



const Container = styled.div`
     height: 30px;
     background-color: teal;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 15px;
     ${mobile({fontSize: "10px" , marginLeft: "-60px"})}
`


const Announcement = () => {
  return (
    <Container>
           Great Offer! You will get free delivery on Orders over $50
    </Container>
  )
}

export default Announcement