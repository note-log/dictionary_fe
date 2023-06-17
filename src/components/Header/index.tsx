/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-07 22:50:40
 * @Company: ncuhome
 * @LastEditTime: 2023-06-15 23:53:09
 * @FilePath: \notelog_fe\src\components\Header\index.tsx
 * @Description:
 */
import {
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
interface Props {
  children: React.ReactElement;
}
function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function Header({
  auth = false,
  style = {},
  handleClick = () => {},
}) {
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar style={style}>
          <Toolbar>
            <Grid container justifyContent="left">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <Typography variant="h6">网上通讯录</Typography>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
