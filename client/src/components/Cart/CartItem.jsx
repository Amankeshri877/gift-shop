import { Box, Button, Typography ,styled } from "@mui/material";
import { addEllipsis } from "../../utlis/common-utls";
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
const Component = styled (Box)`
border-top : 1px solid #f0f0f0;
display:flex;
background:#fff;
`
const LeftComponent =styled(Box)`
margin: 20px;
display:flex;
flex-direction:column;
`
const SmallText =styled(Typography)`
color:#878787;
`
const Remove = styled(Button)`
margin:top:20px;
font-weight:600;
color:#000;
`

const CartItem =({item})=>{
    const fassured ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const dispatch =useDispatch();
  const removeItemFromCart = (id)=>{
    dispatch(removeFromCart(id))
  }

    return(
       <Component>
        <LeftComponent>
           <img src={item.url} alt="product" style={{height:110,width:110}}/>
           <GroupedButton/>
        </LeftComponent>
        <Box style={{margin:20}} >
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <SmallText style={{display:'flex'}} >Seller:RetailNet
            <Box Component="span"><img src={fassured} alt="fassured" style={{width:50,marginLeft:10}} /></Box>
          </SmallText>
          <Typography  style={{margin:'20px 0px', display:'flex'}} >
          <Box Component="span" style={{  fontWeight:600,marginTop:13,fontSize:18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box Component="span" style={{ color: "#878787",marginTop:13 }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box Component="span" style={{ color: "#388E3c",marginTop:13 }}>{item.price.discount} off</Box>&nbsp;&nbsp;&nbsp;
        </Typography>
        <Remove onClick={ ()=> removeItemFromCart (item.id)} >Remove</Remove>
        </Box>
       </Component>
    )
}
export default CartItem;