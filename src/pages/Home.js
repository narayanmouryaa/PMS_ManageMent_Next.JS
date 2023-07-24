import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import FixedSidenav from "./components/Fixedsidenav";
import MiniDrawer from "./components/Minidrawer";
import "../styles/Home.module.css";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("Userlogintoken")) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Navbar />
      <FixedSidenav />
      <MiniDrawer />
    </>
  );
};

export default Home;
