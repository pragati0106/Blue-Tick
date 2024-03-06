import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
const Heading = styled(Typography)`
color: #444444;
text-transform: uppercase;
font-size:40px;
font-weight:500;
text-align:left;
width:100%
@media (max-width: 1000px) {
    font-size:25px;
  };
  @media (max-width: 600px) {
    font-size:23px;
    font-weight:550;
  };

`;
const Function = styled("img")`
  overflow: hidden;
  height: inherit;
  cover: content-fit;
  width: 45%;
  @media (max-width: 600px) {
   width:100%;
   height:50%
  }

`;

const Title=styled(Typography)`
color: #646464;
    font-size: 30px;
    font-weight: 500;
    line-height:1.2;
    @media (max-width: 1000px) {
        font-size:20px;
      }
`
const Parent=styled(Box)`
display:flex;
margin-top:10px;
padding:10px;
justify-content:space-around;
height:100vh;
@media (max-width: 600px) {
    flex-direction:column;
    gap:0;
    justify-content:space-between;
    height:auto
}
`
const Content=styled(Box)`
display:flex;
flex-direction:column;
justify-content:center;
gap:10px;
width:95%;
margin:auto;
@media (max-width: 600px) {
    line-height:1.5;
    align-items:left;
    justify-content:space-around;
}
`
const Desc=styled(Box)`
color: #646464;
font-size:15px;
font-weight:500;
@media (max-width: 600px) {
    font-size:13px;
}

`
const Home=()=>{
    return(
      
        <Parent id="Home">
           <Content width={{xs:"100%",md:"45%"}} height={{xs:"25vh",md:"100%"}}>
           <Heading variant="h1" component="h2">
           Transforming Enterprisess
           </Heading>
           <Title>
           with cutting-edge, scalable, privacy-focused Generative AI Solutions
           </Title>
           <Desc>
           Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
           </Desc>
           <Button variant="contained" onClick={() => window.open('https://generative-ai.bluetickconsultants.com/', '_blank')}>To know more about us </Button>

    </Content>
    <Function src='https://generative-ai.bluetickconsultants.com/images/products/generativeAI.png' />
        </Parent>
     
    )
}
export default Home;