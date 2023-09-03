import { useState, useContext } from "react";

import {styled} from "@mui/material";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { authenticateSignup ,authenticateLogin } from "../service/api";
import { DataContext } from "../context/data-provider";



const NewBox = styled(Box)`
  width: 90vh;
  height: 70vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 82.5%;
  width: 28%;
  padding: 45px 35px;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders,Wishlist and Recommendation",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};
const SignupInitialvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValues={
  username:"",
  password:"",
}

const LoginDialog = ({ open, setOpen }) => {
  const [signup, setSignup] = useState(SignupInitialvalues);
  const { setAccount } = useContext(DataContext);
  const[login,setLogin]=useState(loginInitialValues);
  const [error,setError]=useState(false);

  const [account, toggleAccount] = useState(accountInitialValues.login);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  const OnInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    console.log(response);
    handleClose();
    setAccount(signup.firstname);
  };
  const OnValueChange=(e)=>{
   setLogin({...login , [e.target.name]: e.target.value })
  }
  const loginUser=async () =>{
    let response = await authenticateLogin(login);
    console.log(response);
    if(response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname);
    }else{
         setError(true);
    }
  }

  //paper props use for making the stable width
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}
    >
      <NewBox>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5" style={{ color: "white" }}>
              {account.heading}
            </Typography>
            <Typography
              style={{ marginTop: 20, color: "white", fontWeight: 600 }}
            >
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => OnValueChange(e)} name="username" label="Username" />
              {error &&  <Error>Pleas Enter valid username or password </Error>}
              <TextField variant="standard" onChange={(e) => OnValueChange(e)} name="password"  label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={()=>loginUser()}  >Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestButton>Request Otp</RequestButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </NewBox>
    </Dialog>
  );
};
export default LoginDialog;
