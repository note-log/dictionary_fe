/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-07 22:50:51
 * @Company: ncuhome
 * @LastEditTime: 2023-06-14 23:46:32
 * @FilePath: \notelog_fe\src\components\Footer\index.tsx
 * @Description:
 */
import { Box, Link, SxProps, Theme, Typography } from "@mui/material";
import styles from "./index.module.css";
interface Props {
  sx: SxProps<Theme>;
  className?: string;
}
export default function Footer(props: Props) {
  return (
    <Box className={styles.container}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://www.onesnowwarrior.cn">
          网上通讯录
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
