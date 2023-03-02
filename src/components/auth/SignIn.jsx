import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import OtpCodeInput from "./OtpCodeInput";

export default function SignIn() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      phoneNumber: data.get("phone-number"),
    });
    setIsClicked(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ورود |‌ ثبت نام
        </Typography>
        {isClicked ? (
          <OtpCodeInput />
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone-number"
              label="شماره موبایل"
              inputProps={{
                maxLength: 11,
              }}
              type="phone-number"
              id="phone-number"
              autoComplete="current-phone-number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ارسال کد
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}
