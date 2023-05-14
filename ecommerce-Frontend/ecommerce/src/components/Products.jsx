// import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data/popularProducts'
import Product from './Product'
import { mobile } from '../responsive'
// import axios  from "axios";




//this is all products main component

const Container = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 10px;
    margin: 20px;
    justify-content: space-between;
    margin-top: 50px;
    position: relative;
    ${mobile({ marginLeft: "-60px", gap: "0px" })}
`
const Title = styled.div`
    position: absolute;
    margin-left: 450px;
    margin-top: -30px;
   
`


const Products = ({cat, filters, sort}) => {
    // console.log(cat, filters, sort)
  return (
    <Container>

        <Title>
            <h1>POPULAR PRODUCTS</h1>
            
        </Title>
        {
            popularProducts.map((item) =>(
                <Product item={item.img} key={item.id}/>
            ))
        }
    </Container>
  )
}

export default Products