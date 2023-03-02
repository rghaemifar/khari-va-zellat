import MainLayout from "@/components/mainLayout";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function SendMessage() {
  return (
    <MainLayout>
      <Stack gap="64px" sx={{ direction: "ltr" }}>
        <Box margin="auto" justifyContent="center" display="flex" gap="24px">
          <Typography alignSelf="center">موضوع</Typography>
          <TextField variant="outlined" label="" />
        </Box>
        <Box
          width="50%"
          margin="auto"
          justifyContent="center"
          display="flex"
          gap="24px"
        >
          <Typography alignSelf="center">پیام</Typography>
          <TextField multiline fullWidth rows={8} variant="outlined" label="" />
        </Box>
        <Box margin="auto" justifyContent="center" display="flex" gap="24px">
          <Typography alignSelf="center">گیرنده</Typography>
          <TextField variant="outlined" label="" />
        </Box>
        <Box>
          <Button sx={{ width: "15%" }} variant="contained">
            ارسال
          </Button>
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default SendMessage;
