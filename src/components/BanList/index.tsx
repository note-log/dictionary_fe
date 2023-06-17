/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-17 11:51:11
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 14:56:20
 * @FilePath: \notelog_fe\src\components\BanList\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { approve, deleteUser, getBannedList, unban } from "@/utils";
import Toast from "../Toast";

interface TableParams {
  pagination?: TablePaginationConfig;
}
const App: React.FC = () => {
  const columns: ColumnsType<UserProps> = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "学号",
      dataIndex: "username",
      sorter: (a, b) => a.username.length - b.username.length,
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
      title: "是否审核",
      dataIndex: "audit",
      render: (v) => `${v ? "是" : "否"}`,
    },
    {
      title: "登录次数",
      dataIndex: "loginTime",
    },
    {
      title: "上次登陆时间",
      dataIndex: "lastLoginTimestamp",
      render: (v) => {
        const date = new Date(v * 1000);
        const formatDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return formatDate;
      },
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
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      fixed: "right",
      width: "200",
      render: (_, record) => {
        const handleClick = (record: UserProps) => {
          unban(record.username)
            .then(() => {
              setRefresh(true);
              Toast.success("操作成功");
            })
            .catch((err) => {
              Toast.error(err.data.detail);
            });
        };
        return (
          <Space>
            <Button type="link" onClick={() => handleClick(record)}>
              解封
            </Button>
          </Space>
        );
      },
    },
  ];
  const [refresh, setRefresh] = useState(true);
  const [data, setData] = useState<UserProps[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    if (refresh) {
      setLoading(true);
      setRefresh(false);
      getBannedList(
        tableParams.pagination?.current ?? 1,
        tableParams.pagination?.pageSize
      )
        .then((res) => {
          setData(res.data.data.list.data);
          setLoading(false);
          setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: res.data.data.list.totalCount,
            },
          });
        })
        .catch((err) => {
          Toast.error(err.data.detail);
        });
    }
  }, [JSON.stringify(tableParams), refresh]);
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
      scroll={{ x: 3000 }}
    />
  );
};

export default App;
