import MuiButton from "@mui/material/Button";

export const Button = ({ children, appName, ...props }: any) => {
  return (
    <MuiButton
      onClick={() => alert(`Hello from your ${appName} app!`)}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

