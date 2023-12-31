import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, styled, Grid } from "@mui/material";
import ActinDetails from "./ActionDetails";
import ProductDetail from "./ProductDetail";
import { Helmet } from "react-helmet";
const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;
const Container = styled(Grid)(({theme})=>({
  background: '#ffffff',
  display: 'flex',
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}))
const RightContainer = styled(Grid)`
  margin-top: 50px;

`;

const DetailsView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, loading, product]);
  console.log(product);
  return (
    <Component>
      <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta property="og:image" content={product?.detailUrl} />
            </Helmet>
      {product && Object.keys(product).length && 
        <Container container >
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActinDetails product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12} style={{paddingLeft:20}} >
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      }
    </Component>
  );
};
export default DetailsView;
