import React, { useState } from "react";
import { TextField, Button, Card, Box } from "@mui/material";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Home.module.css";
// import { size } from '../assets/theme/theme'
import { weight } from "../assets/theme/theme";

const SignIn = () => {
  const navigate = useRouter();
  const [cookies, setCookie] = useCookies(["name"]);
  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  // console.log(cookies, "saurabhCookies");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      "Content-Type": "application/json",
    };
    const api = await axios.post(
      `https://pmsapi.qrstaff.in/api/user/login`,
      login,
      config
    );
    if (api.status === 200) {
      localStorage.setItem("Userlogintoken", api.data.token);
      setCookie("Userlogintoken", api.data.token);
      toast.success(api.data.message);
      // console.log(api.data.message);
      navigate.push("/Home");
    } else {
      alert(api.data.message);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 8,
    p: 4,
    mt: 4,
  };

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <h2
        style={{ textAlign: "center", fontSize: "larage", marginTop: "60px" }}
      >
        Project Management System
      </h2>
      <h5
        style={{
          textAlign: "center",
          fontWeight: weight.medium,
          marginTop: "40px",
          fontSize: "16px",
        }}
      >
        Login To Continue
      </h5>

      <Card sx={style} className={styles.container}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            onChange={handleOnChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handleOnChange}
          />
          <Box style={{ display: "flex" }}>
            <Button>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href="/auth/ForgotPassword"
              >
                Forgot Password?
              </Link>
            </Button>
            <Box>
              <Button style={{ color: "black", textTransform: "none" }}>
                <Link href="/auth/SignUp">SignUp</Link>
              </Button>
            </Box>
          </Box>

          <Button
            style={{
              marginTop: "20px",
              height: "50px",
              textDecoration: "none",
            }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign In
          </Button>

          {/* <Button style={{color:'white'}}>               
            
              </Button>   */}
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
