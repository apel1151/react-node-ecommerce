import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data/sliderItems';
import { mobile } from '../responsive';



//-------------------- slide main container -----------------------//
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;   
    position: relative; 
    overflow: hidden;
    ${mobile({display: "none"})}

`
//--------------------- two arrows ----------------------------------//
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7f7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;  
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
//------------------------- slide wrapper ----------------------------//

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease; 
    
    
    

`

//--------------------------slide items container --------------------//
const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.3), #39c7e7f3);
    
 
`


const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    
   
`
const Image = styled.img`
    height: 80%;
    
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    
    
`
const Title = styled.h1`
    margin-top: 80px;
    font-size: 70px;
    
`
const Desc = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

  
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        color: white;
        background-color: teal;
        transition: .3s ease-in;
        
    }
`



const Slider = () => {
//----------------arrow button click-----------------------//
const [slideIndex, setSlideIndex] = useState(0);
 const handleClick = (direction) =>{
      
        if(direction === "left"){
          setSlideIndex( slideIndex > 0 ? slideIndex-1: 2)
          console.log(slideIndex);
        }else{
          setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
          console.log(slideIndex)
        }
 }

  return (
    <Container>
            <Arrow direction = "left" onClick={() => handleClick("left")}>
                 <ArrowLeftOutlinedIcon />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                  {sliderItems.map((item) =>(
                    <Slide key={item.id}>
                        <ImgContainer>
                                  <Image src={item.img}/> 
       
                        </ImgContainer> 

                        <InfoContainer>
                                 <Title>{item.title}</Title> 
                                 <Desc>{item.desc}</Desc>
                                 <Button>SHOP NOW</Button>
                        </InfoContainer>
                   </Slide>

                  ))}
                   
                   
            </Wrapper>
           



            <Arrow direction = "right" onClick={() => handleClick("right")}>
                 <ArrowRightOutlinedIcon/>
            </Arrow>

    </Container>
  )
}

export default Slider