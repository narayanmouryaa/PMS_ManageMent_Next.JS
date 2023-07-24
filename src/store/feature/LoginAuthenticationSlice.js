import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const initialState = {
  data: [],
  error: "",
  status: false,
  postData: "",
  postError: "",
  postStatus: false,
  loading: false,
};

//user Signup function
export const userSignUpThunk = createAsyncThunk(
  "userSignUpThunk/post",
  async (userData) => {
    // const router = useRouter();
    // const [cookies, setCookie] = useCookies(["name"]);
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        `https://pmsapi.qrstaff.in/api/user/signup`,
        userData,
        headers
      );
      console.log(data, "ApiData");
      // setCookie("UserRegistertoken", api.data.token);
      // toast.success(api.data.message);
      // router.push("/Home");
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new Error("Page not found");
      }
      if (error.response.status === 500) {
        throw new Error("Internal Server Error");
      }
    }
  }
);

export const LoginAuthenticationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /// Post user data
    builder.addCase(userSignUpThunk.pending, (state, action) => {
      state.postData = [];
      state.postStatus = true;
      state.postStatus = "";
    });
    builder.addCase(userSignUpThunk.fulfilled, (state, action) => {
      state.postData = action.payload;
      state.postStatus = false;
      state.postError = "";
    });
    builder.addCase(userSignUpThunk.rejected, (state, action) => {
      state.postData = [];
      state.postStatus = false;
      state.postError = "";
    });
  },
});

// export const {addUser} = LoginAuthenticationSlice.reducer
export default LoginAuthenticationSlice.reducer;
