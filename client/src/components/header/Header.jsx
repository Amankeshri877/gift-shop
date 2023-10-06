import { useState } from "react"; 
import { AppBar, Toolbar, Box, Typography, styled,Drawer,List,ListItem, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
//component
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #e75480 ;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: "10px",
  height: "10px",
  marginLeft: "4px",
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const MenuButton = styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{
    display : 'block'
  }
}))

const Header = () => {

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  
    const [open,setOpen] = useState(false);

    const handleOpen = () =>{
      setOpen(true);
    }
   const handleClose = ()=>{
    setOpen(false);
   }
   const list = ()=>(
    <Box style={{width:200}} onClick={handleClose}  >
      <List>
        <ListItem>
          <CustomButtons/>
        </ListItem>
      </List>
    </Box>
   )


  return (
    <StyledHeader style={{ boxShadow: "none" }}>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}  >
          <Menu/>
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                plus
              </Box>
              <PlusImage src={subURL} alt="sub-logo" />
            </SubHeading>
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
