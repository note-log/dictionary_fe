/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-16 23:01:04
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 00:53:17
 * @FilePath: \notelog_fe\src\components\ProfileList\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { getProfileList } from "@/utils";
import Toast from "../Toast";

const columns: ColumnsType<ProfileProps> = [
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
    getProfileList(
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
  }, [JSON.stringify(tableParams)]);
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
      scroll={{ x: 1300 }}
    />
  );
};

export default App;
