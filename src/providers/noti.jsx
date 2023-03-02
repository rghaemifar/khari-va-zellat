import { SnackbarProvider } from "notistack";

export const NotistackProvider = ({ children }) => {
  return (
    <SnackbarProvider
      preventDuplicate={false}
      maxSnack={3}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
