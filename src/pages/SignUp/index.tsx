import Footer from "@/components/Footer";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Header from "@components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import Toast from "@components/Toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signUp } from "@/utils";

export default function SignUp() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate("/login"), 1000);
    }
  }, [isSuccess]);
  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      const res = await signUp(data);
      Toast.success(res.data.message);
      setIsSuccess(true);
    } catch (err: any) {
      Toast.error(err.message);
    }
  };
  return (
    <>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            注册
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register("username", {
                    required: "学号不得为空",
                    minLength: { value: 4, message: "学号过短" },
                    maxLength: { value: 20, message: "学号过长" },
                  })}
                  helperText={errors.username ? errors.username.message : ""}
                  error={Boolean(errors.username)}
                  fullWidth
                  id="username"
                  label="学号"
                  name="username"
                  autoComplete="username"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("name", {
                    required: "姓名不得为空",
                    minLength: { value: 2, message: "姓名过短" },
                    maxLength: { value: 10, message: "姓名过长" },
                  })}
                  helperText={errors.username ? errors.username.message : ""}
                  error={Boolean(errors.username)}
                  fullWidth
                  id="name"
                  label="姓名"
                  name="name"
                  autoComplete="name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", {
                    required: "邮箱不得为空",
                    maxLength: { value: 30, message: "邮箱过长" },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                      message: "错误的邮箱格式",
                    },
                  })}
                  helperText={errors.email ? errors.email.message : ""}
                  error={Boolean(errors.email)}
                  fullWidth
                  id="email"
                  label="电子邮箱"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("phone", {
                    required: "手机号码不得为空",
                    pattern: {
                      value:
                        /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/,
                      message: "错误的手机号码格式",
                    },
                  })}
                  helperText={errors.phone ? errors.phone.message : ""}
                  error={Boolean(errors.phone)}
                  fullWidth
                  id="phone"
                  label="手机"
                  name="phone"
                  autoComplete="phone"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", {
                    required: "密码不得为空",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@#$%^&*]{8,32}$/,
                      message:
                        "必须包含大小写字母和数字的组合，可以使用特殊字符(~!@#$%^&*)，长度在8-32之间",
                    },
                  })}
                  helperText={errors.password ? errors.password.message : ""}
                  error={Boolean(errors.password)}
                  fullWidth
                  name="password"
                  label="密码"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("repeatPassword", {
                    required: "重复密码不得为空",
                    validate: (value) =>
                      value === watch("password") || "重复密码与密码不一致",
                  })}
                  helperText={
                    errors.repeatPassword ? errors.repeatPassword.message : ""
                  }
                  error={Boolean(errors.repeatPassword)}
                  fullWidth
                  name="repeatPassword"
                  label="重复密码"
                  type="password"
                  id="repeatPassword"
                  autoComplete="repeatPassword"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              注册
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  已有账户？
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer sx={{ mt: 5 }} />
    </>
  );
}
