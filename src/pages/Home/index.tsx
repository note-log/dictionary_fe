/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-07 22:49:23
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 13:26:19
 * @FilePath: \notelog_fe\src\pages\Home\index.tsx
 * @Description:
 */
import { useAuth } from "@/store";
import { useNavigate } from "react-router-dom";
import {
  ContactsOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SearchOutlined,
  KeyOutlined,
  ProfileOutlined,
  LockOutlined,
  TeamOutlined,
  BookOutlined,
  ApartmentOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { type MenuProps } from "antd";
import { Layout, Menu, theme, Typography, Col } from "antd";
import React, { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import ProfileList from "@/components/ProfileList";
import ProfileSearch from "@/components/ProfileSearch";
import PasswordChange from "@/components/PasswordChange";
import AuditList from "@/components/AuditList";
import MajorList from "@/components/MajorList";
import ClazzList from "@/components/ClazzList";
import UserList from "@/components/UserList";
import BanList from "@/components/BanList";
const { Header, Content, Sider } = Layout;

const commonItems: MenuProps["items"] = [
  {
    key: "user",
    icon: React.createElement(UserOutlined),
    label: "用户",

    children: [
      {
        key: "profile",
        icon: React.createElement(ProfileOutlined),
        label: "个人资料",
      },
      {
        key: "change_password",
        icon: React.createElement(KeyOutlined),
        label: "修改密码",
      },
    ],
  },
  {
    key: "dictionary",
    icon: React.createElement(ContactsOutlined),
    label: "通讯录",

    children: [
      {
        key: "dictionary_list",
        icon: React.createElement(UnorderedListOutlined),
        label: "列表",
      },
      {
        key: "dictionary_search",
        icon: React.createElement(SearchOutlined),
        label: "查找",
      },
    ],
  },
];

const adminItems: MenuProps["items"] = [
  {
    key: "admin",
    icon: React.createElement(LockOutlined),
    label: "管理员",
    children: [
      {
        key: "audit",
        icon: React.createElement(EditOutlined),
        label: "审核",
      },
      {
        key: "major",
        icon: React.createElement(BookOutlined),
        label: "专业管理",
      },
      {
        key: "clazz",
        icon: React.createElement(ApartmentOutlined),
        label: "班级管理",
      },
      {
        key: "userList",
        icon: React.createElement(TeamOutlined),
        label: "用户管理",
      },
      {
        key: "ban",
        icon: React.createElement(TeamOutlined),
        label: "封禁管理",
      },
    ],
  },
];

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Title } = Typography;
  const { auth, fetch, profile, name } = useAuth();
  const [current, setCurrent] = useState<string>("profile");
  const [menuItems, setMenuItems] = useState<MenuProps["items"]>();
  const navigate = useNavigate();
  const headerMenu: MenuProps["items"] = [
    {
      label: name,
      icon: <UserOutlined rev={{}} />,
      key: "user",
      children: [
        {
          label: "注销",
          key: "logout",
        },
      ],
    },
  ];
  useEffect(() => {
    fetch()
      .then((res) => {
        if (res.data.profile.isAdmin) {
          setMenuItems([...commonItems!, ...adminItems!]);
        } else {
          setMenuItems([...commonItems!]);
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);
  const handleSidebarClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const handleHeaderMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "logout") {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <Layout style={{ minHeight: "100%" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Col>
          <Title level={3} style={{ color: "white", margin: 0 }}>
            网上通讯录
          </Title>
        </Col>
        <div style={{ flex: 1 }}></div>
        {auth && (
          <Col style={{width: 100}}>
            <Menu
              items={headerMenu}
              defaultOpenKeys={["user"]}
              mode="horizontal"
              theme="dark"
              onClick={handleHeaderMenuClick}
            />
          </Col>
        )
}
      </Header >
  <Layout style={{ flex: 1 }}>
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        selectedKeys={[current]}
        style={{ height: "100%", borderRight: 0 }}
        items={menuItems}
        onClick={handleSidebarClick}
      />
    </Sider>
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        style={{
          padding: 24,
          background: colorBgContainer,
        }}
      >
        {current === "profile" && <Profile props={profile!} />}
        {current === "change_password" && <PasswordChange />}
        {current === "dictionary_search" && <ProfileSearch />}
        {current === "dictionary_list" && <ProfileList />}
        {current === "audit" && <AuditList />}
        {current === "major" && <MajorList />}
        {current === "clazz" && <ClazzList />}
        {current === "userList" && <UserList />}
        {current === "ban" && <BanList />}
      </Content>
    </Layout>
  </Layout>
    </Layout >
  );
}
