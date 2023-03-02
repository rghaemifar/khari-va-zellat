import React from "react";
import Header from "@/components/header";
import { Box, Grid } from "@mui/material";
import SideBar from "@/components/sidebar";
import { Container } from "@mui/system";

function MainLayout({ children }) {
  return (
    <Container maxWidth="100%" sx={{ px: "0 !important" }}>
      <Header />
      <Grid
        container
        spacing={0}
        flexDirection="row-reverse"
        sx={{
          flexWrap: "nowrap",
          pt: (theme) => theme.spacing(0), //change theme.spacing from 6 to 0
        }}
      >
        {/*  ***************   SIDEBAR LAYOUT  **************** */}
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Grid>

        {/*  ***************   COMPONENTS LAYOUT  **************** */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            padding: (theme) => ({
              xs: theme.spacing(5, 1.5),
              md: theme.spacing(5, 7.5),
            }),
          }}
        >
          {children}
          {/* <Box sx={{ mb: 3 }}>
            <Outlet />
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainLayout;
