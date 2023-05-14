import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'


//this is categories single item component



const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 80vh;
    position: relative;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
        z-index: 2;
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ width: "80%", height: "80%"})}

`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({marginLeft: "-30px"})}
    
`
const Title = styled.div`
    color: white;
    margin-bottom: 50px;
    font-size: 30px;
    color: white;
    font-weight: bold;
    ${mobile({ fontSize: "20px"})}
    
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    opacity: .8;
    &:hover{
        background-color: #5992c7;
        color: white;
        transition: all .2s ease-in;
    }
`
const CategoryItem = ({item}) => {
    
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
                <Image src={item.img}/>
  
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
        
        </Link>
      
    </Container>
  )
}

export default CategoryItem