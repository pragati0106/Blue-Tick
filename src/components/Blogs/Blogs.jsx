import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import data from "./data.json";
import Button from '@mui/material/Button';
const Product_heading=styled(Typography)`
font-size:23px;
font-weight:600;
color: #444444;
width:100%;

`
const Product_desc=styled(Typography)`
font-size:18px;
font-weight:500;
color: #646464;
`
const Blog=styled(Box)`
display:flex;
flex-direction:column;
gap:15px;
width:85%;
margin:auto;
margin-top:15px;
margin-bottom:15px;
`
const Blog_container=styled(Box)`
display:flex;
gap:15px;
justify-content:space-around;
@media (max-width:600px){
    flex-direction:column;
}
`
const Blogs=()=>{
    return(

        <Blog id="Blogs">
                <Product_heading variant="h1" component="h2" textAlign={"center"}>
           Some exiting blogs by techies
           </Product_heading>
           <Blog_container>
          {data.map((product, index) => (
          
                <Box key={index} sx={{boxShadow: 3}} md={{boxShadow: 3}} padding={"15px"} paddingBottom={"60px"} flexBasis={{sm:"40%",md:"28%"}} position={"relative"}>
                    <Product_heading>{product.heading}</Product_heading>
                    <Product_desc>{product.desc}</Product_desc>
                    <Box position={"absolute"} bottom={"10px"}>
                    <Button variant="outlined" href={product.link}>
        More Details
      </Button>
      </Box>
                </Box>
              
            ))}
            </Blog_container>
        </Blog>
    )
}
export default Blogs;