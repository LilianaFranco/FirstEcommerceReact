import { Login } from "@mui/icons-material";
import React, { useState } from "react";
import { Login } from "./Login";

export const LoginContainer = () => {
  // Create password states
  const [showPassword, setShowPassword] = useState(false);
  //Hide or show password
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  //   Create function to show alerts in the registration proccess
  const showSuccessAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your registration was successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <Login
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        showSuccessAlert={showSuccessAlert}
      />
    </div>
  );
};
