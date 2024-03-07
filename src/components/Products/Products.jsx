import data from "./data.json"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';

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
const Product_conatiner=styled(Box)`
 display: flex;
 flex-direction:row;
 flex-wrap:wrap;
 width:95%;
 margin:auto;
 gap:10px;
 margin-top:10px;
 margin-bottom:10px;
 justify-content:center
`


const Products=()=>{
    return(
        <Product_conatiner id="Products" >
            <Product_heading variant="h1" component="h2" textAlign={"center"}>
           What we offer
           </Product_heading>
      
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        breakpoints={{
            0:{slidesPerView:1},
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 }
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
         {data.map((product, index) => (
             <SwiperSlide>
                <Box key={index} sx={{boxShadow: 3}} md={{boxShadow: 3}} padding={"15px"} height={{xs:"230px",sm:"250px",md:"300px",lg:"300px",xl:"330px"}}>
                    <Product_heading>{product.heading}</Product_heading>
                    <Product_desc>{product.desc}</Product_desc>
                </Box>
                </SwiperSlide>
            ))}
       
      </Swiper>
    
        </Product_conatiner>
    )
}
export default Products;