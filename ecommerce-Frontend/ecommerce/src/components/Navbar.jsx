import React from 'react'
import styled from 'styled-components'
import navlogo from '../data/image/navlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive";
import { Link, useNavigate } from 'react-router-dom';



//-----------------------navbar main container-------------------//
const Container = styled.div`
      height: 65px;
      /* background: linear-gradient(90deg, #b8b7d1 0%, #ababb2 35%, #94deec 100%); */
      box-shadow: 0 2px 2px -2px rgba(42, 35, 35, 0.5);
      ${mobile({ height: "50px"})}


`
//-----------------------navbar items wrapper--------------------//
const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      ${mobile({ padding: "10px 0px"})}
`
//------------------------navbar left part-----------------------//
const Left = styled.div`
      display: flex;
      flex: 1;
      
      h1{
        margin-left: 10px;
        margin-top: 5px;
        color: black;
        /* text-decoration: none; */
        ${mobile({fontSize: "20px"})}
      }
      img {
        height: 50px;
        width: 50px;
        ${mobile({ height:"30px", width:"30px"})}
      }
      
`


//------------------------navbar center part---------------------//

const Center = styled.div`
      flex: 1;  
      align-items: center;
      
    
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    margin-left: 300px;
    width: 400px;
    padding: 5px;
    display: flex;
    height: 30px;
    border-radius: 5px;
    &:hover{
        border: 2px solid lightskyblue;
    }
    ${mobile({ width: "100px", marginLeft: "30px"})}
`
const Input = styled.input`
      border: none;
      outline: none;
      margin-left: 10px;
      width: 90%;
      transition: all 2s ease ;
      margin-bottom: 10px;
      height: 20px;
      margin-top: 3px;
      font-size: 15px;
      ${mobile({ width: "100px", fontSize: "10px"})} 
`
const Icon = styled.div`
     margin-top: 2px;
     margin-left: 10px;
     cursor: pointer;
     color: gray;
     font-size: 25px;
     transition: transform .5s;
     &:hover{
        font-size: 30px;
        transform: scale(1.6);
     }
     ${mobile({marginLeft: "-30px"})}

`


//------------------------navbar right part----------------------//
const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`
const MenuItem = styled.div`
      font-size: 15px;
      cursor: pointer;
      margin-left: 25px;
      
     
`

const Navbar = () => {
      
      let navigate = useNavigate();
     // navigating to register page
      const handleRegister = () =>{
              const path = `/register`;
              navigate(path);
      }
     // navigating to login page
      const handleLogin = () =>{
            const path = `/login`;
            navigate(path);
      }
  return (
    <div>
        <Container>
           <Wrapper>
                 <Link to={`/`}>
                        <Left>
                              <img src={navlogo} alt="" />
                              <h1>Area51</h1>
                        </Left>
                      
                 </Link>

                  <Center>
                        <SearchContainer>
                            <Input placeholder='Search product'/>
                            <Icon>
                                <SearchIcon/>
                            </Icon>
                            
                        </SearchContainer>
                  </Center>

                  <Right>
                        <MenuItem onClick={handleRegister}> Register </MenuItem>
                        <MenuItem onClick={handleLogin}> Login </MenuItem>
                        <MenuItem>
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartIcon color="action" />
                                </Badge>
                        </MenuItem>
                  </Right>
           </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar