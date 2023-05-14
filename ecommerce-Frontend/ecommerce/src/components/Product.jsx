import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { mobile } from '../responsive';

// this is single product component

const Container = styled.div` 
      flex: 1;  
      margin: 5px;
      height: 350px;
      min-width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      
`
const Image = styled.img`
      height: 290px;
      width: 280px;
      background-color: lightblue;
      ${mobile({height: "280px" , width: "270px"})}
      
    
`
const Info = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(9, 66, 80, 0.2);
      opacity: 0;
      transition: all ease;
      &:hover{
        opacity: 1;
        transform: scale(1);
      }
      ${mobile({height: "90%" , width: "90%", marginTop: "30px"})}
 
`
const Icon = styled.div`
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: #ffffff;
      color: #4faccb;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      cursor: pointer;
      transition: all .5s ease;
      &:hover{
        background-color: #ffffff;
        transform: scale(1.2);
      }
`


const Product = ({item}) => {
  
  return (
    
    <Container>
        
        <Image src={item}/>

        <Info>
            <Icon>
                 <ShoppingCartIcon/>
            </Icon>
            <Icon>
                 <SearchIcon/>
            </Icon>
            <Icon>
                 <FavoriteBorderIcon/>
            </Icon>
           
           
        </Info>

    </Container>
  )
}

export default Product