"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useCookies } from "react-cookie";
// import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "../../styles/Home.module.css";
import {
  // userFetchThunk,
  userSignUpThunk,
} from "../../store/feature/LoginAuthenticationSlice";

const defaultTheme = createTheme();

export default function SignUp() {
  // const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [cookies, setCookie] = useCookies(["name"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  console.log(process.env.REACT_APP_BASE_URL, "apiEndPoint");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const config = {
  //     "Content-Type": "application/json",
  //   };
  //   const apiUrl = `https://pmsapi.qrstaff.in/api/user/signup`;
  //   const api = await axios.post(apiUrl, data, config);
  //   if (api.status === 200) {
  //     setCookie("UserRegistertoken", api.data.token);
  //     toast.success(api.data.message);
  //     router.push("/Home");
  //   } else {
  //     toast.error(api.data.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userSignUpThunk(data));
    // dispatch(userFetchThunk());
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 8,
            p: 4,
            mt: 4,
          }}
          className={styles.container}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
