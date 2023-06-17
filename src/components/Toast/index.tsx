import { AlertColor, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";
import { useEffect, useState } from "react";

/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-09 10:25:09
 * @Company: ncuhome
 * @LastEditTime: 2022-09-09 11:35:23
 * @FilePath: \notelog_fe\src\components\Toast\index.tsx
 * @Description:
 */
export default class Toast {
  static error(message: string) {}
  static info(message: string) {}
  static warning(message: string) {}
  static success(message: string) {}
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function GlobalToast() {
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState<AlertColor>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Toast.error = (message: string) => {
      setMessage(message);
      setLevel("error");
      setOpen(true);
    };
    Toast.info = (message: string) => {
      setMessage(message);
      setLevel("info");
      setOpen(true);
    };
    Toast.warning = (message: string) => {
      setMessage(message);
      setLevel("warning");
      setOpen(true);
    };
    Toast.success = (message: string) => {
      setMessage(message);
      setLevel("success");
      setOpen(true);
    };
  });
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={level} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
