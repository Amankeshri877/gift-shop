import { imageURL } from "../../constants/data";
import { Grid,styled } from "@mui/material";

const Wrraper = styled(Grid)`
margin-top:10px;
justify-content:space-between;
`
const Image = styled('img')(({  theme  }) => ({
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
})


)
const MidSection = () =>{
    // const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
        <Wrraper lg={12} sm={12} md={12} xs={12} container >
            {
                imageURL.map(image=>(
                    <Grid item lg={4} md={4} sm={12} >
                    <img src={image} alt="" style={{width:'100%'}} />
                    </Grid>
                ))

            }
        </Wrraper>
         {/* <Image src={url} alt="covid" width="100%" style={{marginTop:10}}  /> */}

        </>

    )
}
export default MidSection; 