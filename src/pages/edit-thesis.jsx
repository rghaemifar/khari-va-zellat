import MainLayout from "@/components/mainLayout";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; /* 5Mb */

const FILE_NAME = "file";

function EditThesis() {
  const [file, setFile] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const onUploadThesis = (e) => {
    if (e.target.files[0].size > MAX_UPLOAD_SIZE) {
      enqueueSnackbar("حجم فایل ارسالی نباید بیشتر از ۵ مگابایت باشد", {
        variant: "warning",
      });
      return;
    }

    setFile({
      file: e.target.files[0],
    });

    e.target.value = "";
  };

  const onDeletePrescriptionFile = () => {
    setFile(null);
  };

  const handleOpenFileInNewTab = () => {
    let file = order?.prescription?.paper?.file;
    let url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };

  let fileName = file?.file?.name;

  return (
    <MainLayout>
      <Stack gap="64px" sx={{ direction: "ltr" }}>
        <Box margin="auto" justifyContent="center" display="flex" gap="24px">
          <Typography alignSelf="center">عنوان</Typography>
          <TextField variant="outlined" label="" />
        </Box>
        <Box
          width="50%"
          margin="auto"
          justifyContent="center"
          display="flex"
          gap="24px"
        >
          <Typography alignSelf="center">توضیحات</Typography>
          <TextField multiline fullWidth rows={8} variant="outlined" label="" />
        </Box>
        <Box marginLeft={"50px"} width="100%">
          {!file ? (
            <>
              <Button
                sx={{ display: "flex", margin: "auto" }}
                variant="outlined"
              >
                <label style={{ cursor: "pointer" }} htmlFor="upload-thesis">
                  انتخاب فایل
                </label>
              </Button>
              <input
                hidden
                type="file"
                id="upload-thesis"
                accept=".png, .pdf, .jpg, .jpeg, .jfif"
                onChange={onUploadThesis}
              />
            </>
          ) : (
            <Box
              padding="0.75rem 1rem"
              width="30%"
              margin="auto"
              sx={{
                background:
                  "linear-gradient(0deg, rgba(10, 97, 164, 0.05), rgba(10, 97, 164, 0.05)), #fdfcff",
              }}
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "rgb(13, 71, 161)",
                }}
                onClick={handleOpenFileInNewTab}
              >
                {FILE_NAME}
                {fileName.substring(fileName.length, fileName.lastIndexOf("."))}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                color="red"
                sx={{
                  cursor: "pointer",
                  svg: {
                    marginLeft: "0.25rem",
                  },
                }}
                onClick={onDeletePrescriptionFile}
              >
                <DeleteOutlineIcon /> حذف
              </Box>
            </Box>
          )}
        </Box>
        <Box>
          <Button sx={{ width: "15%" }} disabled variant="contained">
            ارسال
          </Button>
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default EditThesis;
