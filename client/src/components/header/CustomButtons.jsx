import { useState, useContext } from "react";

import { UseSelector, useSelector } from "react-redux";
import { Badge, Box, Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../../login/logidialog";
import { DataContext } from "../../context/data-provider";
import Profile from "./profile";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";
const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
  margin: '0 3% 0 auto',
  alignItems:'center',
  '& > *' : {
    marginRight: '40px !important',
    fontSize: 16,
    
  },
  [theme.breakpoints.down('md')]:{
    display : 'block'
  }
}))
const LoginButton = styled(Button)`
  color: #2874f0;
  border-radius: 2px;
  box-shadow: none;
  background: #ffffff;
  text-transform: none;
  padding: 2.5px 37px;
  font-weight: bold;
  
`;
const Container = styled(Link)(({theme})=>({
  display :'flex',
  textDecoration:'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display : 'block'
  }
}))
const CustomButtons = () => {

  const [open, setopen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } =useSelector(state=>state.cart);
  const OpenDialog = () => {
    setopen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => OpenDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135, }}>
        hello user
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container style={{ display: "flex", marginTop: 1 }} to="/cart" >
        <Badge badgeContent={cartItems?.length} color="secondary" >
        <ShoppingCartIcon />
        </Badge>
        <Typography>cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setopen} />
    </Wrapper>
  );
};
export default CustomButtons;
