/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-16 23:05:37
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 01:40:50
 * @FilePath: \notelog_fe\src\components\ProfileSearch\index.tsx
 * @Description:
 */
/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-16 23:01:04
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 00:22:56
 * @FilePath: \notelog_fe\src\components\ProfileList\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Table, Button, Form, Input, Space } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { getSearchedProfile } from "@/utils";
import Toast from "../Toast";

interface Props {
  name: string;
}

const columns: ColumnsType<ProfileProps> = [
  {
    title: "学号",
    dataIndex: "username",
    sorter: (a, b) => (a.username < b.username ? -1 : 1),
  },
  {
    title: "姓名",
    dataIndex: "name",
  },
  {
    title: "手机号码",
    dataIndex: "phone",
  },
  {
    title: "电子邮箱",
    dataIndex: "email",
  },
  {
    title: "专业",
    dataIndex: "major",
  },
  {
    title: "班级",
    dataIndex: "clazz",
  },
  {
    title: "入学年份",
    dataIndex: "enrollmentYear",
  },
  {
    title: "毕业年份",
    dataIndex: "graduateYear",
  },
  {
    title: "就职单位",
    dataIndex: "company",
  },
  {
    title: "城市",
    dataIndex: "city",
  },
];

interface TableParams {
  pagination?: TablePaginationConfig;
}
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState<string>();
  function handleSubmit() {
    form
      .validateFields()
      .then((v) => {
        console.log(v);
        setIsSubmit(true);
        setName(v.name);
      })
      .catch(() => {
        Toast.error("请输入搜索词！");
      });
  }
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Form name="basic" autoComplete="off" layout="inline" form={form}>
        <Form.Item
          label="搜索"
          name="name"
          rules={[{ required: true, message: "请输入搜索内容" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {isSubmit && <List name={name!} />}
    </Space>
  );
};

const List: React.FC<Props> = ({ name }: Props) => {
  const [data, setData] = useState<ProfileProps[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    setLoading(true);
    getSearchedProfile(
      name,
      tableParams.pagination?.current ?? 1,
      tableParams.pagination?.pageSize
    )
      .then((res) => {
        setData(res.data.data.data.data);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: res.data.data.data.totalCount,
          },
        });
      })
      .catch((err) => {
        Toast.error(err.data.detail);
      });
  }, [JSON.stringify(tableParams), name]);
  const handleChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.username}
      dataSource={data}
      loading={loading}
      pagination={tableParams.pagination}
      onChange={handleChange}
    />
  );
};

export default App;
