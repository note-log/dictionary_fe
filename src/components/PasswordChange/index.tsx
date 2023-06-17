/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-17 02:26:58
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 02:37:19
 * @FilePath: \notelog_fe\src\components\PasswordChange\index.tsx
 * @Description:
 */
import React from "react";
import { Button, Form, Input } from "antd";
import { changePassword } from "@/utils";
import Toast from "../Toast";

const App: React.FC = () => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then((v) => {
      changePassword(v.oldPassword, v.newPassword)
        .then(() => {
          localStorage.removeItem("token");
          Toast.success("更改成功");
        })
        .catch((e) => {
          Toast.error(e.data.detail);
        });
      form.resetFields();
    });
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.Item
        label="旧密码"
        name="oldPassword"
        rules={[{ required: true, message: "请输入你的旧密码！" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="新密码"
        name="newPassword"
        rules={[
          { required: true, message: "请输入你的新密码！" },
          {
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@#$%^&*]{8,32}$/,
            message:
              "必须包含大小写字母和数字的组合，可以使用特殊字符(~!@#$%^&*)，长度在8-32之间",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="重复新密码"
        name="repeatNewPassword"
        dependencies={["newPassword"]}
        rules={[
          { required: true, message: "请再次输入你的新密码！" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("与新密码输入不匹配"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
