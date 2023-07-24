"use client";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for dayjs

export default function App({ Component, pageProps, children }) {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={2000} />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
        <Component {...pageProps} />
      </LocalizationProvider>
      {/* <Home/> */}
    </Provider>
  );
}
