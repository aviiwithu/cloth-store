import React,{useState} from 'react';
import styled from 'styled-components';
import { Button,ButtonGroup, Slider  } from '@material-ui/core';


const Filters = ({product, handler}) => {
    
    const [price, setPrice] = useState([100,1000]);
    const [colorIndex, setColorIndex] = useState("");

    const handleInput=(e,newVal)=>{
        setPrice(newVal);
        const filItem = product.filter(item=> item.price>price[0] & item.price<price[1]);
        handler(filItem);
    }

    return (
            <Wrapper>
                    <Heading>
                        <p className="title">Filters</p>
                        <hr />
                    </Heading>

                    <FilterTitle>
                        <FilterName>
                            <p>Size</p>
                        </FilterName>
                        <FilterValue>
                            <ButtonGroup color="primary" size="small" >
                                <Button>XL</Button>
                                <Button>MD</Button>
                                <Button>SM</Button>
                            </ButtonGroup>
                        </FilterValue>
                    </FilterTitle>

                    <FilterTitle>
                        <FilterName>
                            <p>Color</p>
                        </FilterName>
                        <FilterValue>
                            <ButtonGroup color="primary" size="small" >
                                <Button aria-selected="true" onClick={()=>setColorIndex(0)} >Green</Button>
                                <Button onClick={()=>setColorIndex(1)} >Blue</Button>
                                <Button onClick={()=>setColorIndex(2)} >Red</Button>
                            </ButtonGroup>
                        </FilterValue>
                    </FilterTitle>

                    <FilterTitle>
                        <FilterName>
                            <p>Price</p>
                        </FilterName>
                        <FilterValue>
                            <Slider
                                min={100}
                                max={1500}
                                value={price}
                                onChange={handleInput}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                            
                        </FilterValue>
                    </FilterTitle>
            </Wrapper>
    )
}

export default Filters

const Wrapper = styled.div`
/* border: 2px solid black; */
padding: 10px 20px;
height:min-content;
width:20%;
`
const Heading = styled.div`
font-size: 19px;
letter-spacing: 0.095em;
font-weight: 500;
padding-bottom:5px;
`
const FilterTitle = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
border-bottom: 1px solid lightgray;
`
const FilterName = styled.div`
font-size: 17px;
font-weight: 500;
`
const FilterValue = styled.div`
display:flex;
padding: 8px 0;
.MuiButton-root{
    color:#e91e63fa;
}
.MuiSlider-root{
    width:140px;
    color: #e91e63fa;
}
`