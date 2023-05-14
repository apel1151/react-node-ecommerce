import React from 'react'
import styled from 'styled-components'
import {categories} from '../data/categoryImage'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

//---------------categories main container-----------------//

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ flexDirection: "column", marginLeft: "-10px"})}

`



//catergories parent component

const Categories = () => {
  return (
    <Container>
        {
            categories.map((item) =>(
                <CategoryItem item={item} key={item.id}/>
            ))
        }
    </Container>
  )
}

export default Categories