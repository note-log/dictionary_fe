/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-07 11:10:04
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 03:11:54
 * @FilePath: \notelog_fe\src\pages\SignIn\index.tsx
 * @Description:
 */
import Header from "@components/Header";
import Footer from "@components/Footer";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SubmitHandler, useForm } from "react-hook-form";
import Toast from "@components/Toast";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login } from "@/utils";

export default function SignIn() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const res = await login(data);
      Toast.success(res.data.message);
      localStorage.setItem("token", res.data.data.token);
      setIsLoggedIn(true);
    } catch (err: any) {
      Toast.error(err.data.detail);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => navigate("/"), 1000);
    }
  }, [isLoggedIn]);
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://imgapi.cn/bing.php)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Header style={{ position: "relative" }} />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              登录
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
                {...register("username", {
                  required: "学号不能为空",
                })}
                helperText={errors.username ? errors.username.message : ""}
                error={Boolean(errors.username)}
                margin="normal"
                fullWidth
                id="username"
                label="学号"
                name="username"
                autoComplete="username"
                variant="standard"
              />
              <TextField
                {...register("password", {
                  required: "密码不能为空",
                })}
                helperText={errors.password ? errors.password.message : ""}
                error={Boolean(errors.password)}
                margin="normal"
                fullWidth
                name="password"
                label="密码"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                登录
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    新用户？
                  </Link>
                </Grid>
              </Grid>
              <Footer sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
