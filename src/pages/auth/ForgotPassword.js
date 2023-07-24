import React, { useState } from "react";
import { TextField, Button, Card, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "../../styles/Home.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  const style = {
    position: "relative",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 8,
    p: 4,
    mt: 2,
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "40px", marginTop: "60px" }}>
        Project Management System
      </h2>
      <h5
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "15px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        Forgot Password{" "}
      </h5>

      <Grid container spacing={2}>
        <Grid item lg={3} sm={4}></Grid>
        <Grid item xs={12} lg={6}>
          <Card sx={style} className={styles.container}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email Address"
                type="email"
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />

              <Button
                style={{
                  marginTop: "20px",
                  height: "50px",
                  textTransform: "none",
                }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Reset Password
              </Button>
            </form>
          </Card>
        </Grid>
        <Grid item lg={3} sm={4}></Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
