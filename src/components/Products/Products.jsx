import data from "./data.json"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
const Product_heading=styled(Typography)`
font-size:23px;
font-weight:600;
color: #444444;
`
const Product_desc=styled(Typography)`
font-size:18px;
font-weight:500;
color: #646464;
`
const Product_box=styled(Box)`
 display: flex;
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 gap:20px;
 overflow:hidden;
 @media (max-width: 600px) {
    justify-content:center;
    flex-direction:row;
    gap:10px;
  };

`
const Product_conatiner=styled(Box)`
 display: flex;
 flex-direction:row;
 flex-wrap:wrap;
 width:95%;
 margin:auto;

`
const Products=()=>{
    return(
        <Product_conatiner id="Products" >
         <Product_box >
           {data.map((product, index) => (
                <Box key={index} sx={{boxShadow: 3}} md={{boxShadow: 3}} flexBasis={{xs:"90%",md:"30%"}} padding={"10px"} >
                    <Product_heading>{product.heading}</Product_heading>
                    <Product_desc>{product.desc}</Product_desc>
                </Box>
            ))}
        </Product_box>
        </Product_conatiner>
    )
}
export default Products;