import { Typography,Box,styled,Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOffer from '@mui/icons-material/LocalOffer';

const SmallText =styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
    margin-top:10px;
    font-size:14px;
}
`
const StyledBadge = styled(LocalOffer)`
margin-right:10px;
font-size:15px;
color: #00CC00;
`
const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align:baseline;
    & > td {
        font-size:14px;
        margin-top:10px;
        border: none;
    }

`


const ProductDetail = ({product})=>{
    const fassured ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return(
        
        <>
            
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14,display:'flex'  }}>8 Ratings & 1 Reviews
          <Box Component="span">
            <img src={fassured}alt="fassured"style={{ width: 77, marginLeft: 20 }}/>
          </Box>
        </Typography>
        <Typography  style={{display:'flex'}} >
          <Box Component="span" style={{ fontSize: 28 ,marginTop:0 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box Component="span" style={{ color: "#878787",marginTop:13 }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box Component="span" style={{ color: "#388E3c",marginTop:13 }}>{product.price.discount} off</Box>&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography>Available Offers</Typography>
            <SmallText >
                <Typography><StyledBadge/>Bank Offer10% off on AU Bank Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge/>Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge/>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more T&C</Typography>
            </SmallText >
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}  >Delivery by {date.toDateString()} | ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box Component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more seller starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2} >
                            <img src={adURL} alt="flipkart points" style={{width:390}}/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetail;