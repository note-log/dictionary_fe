/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-17 11:51:11
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 14:03:54
 * @FilePath: \notelog_fe\src\components\MajorList\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Row, Space, Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import {
  addMajor,
  deleteMajor,
  getAdminMajorList,
  getAuditList,
  updateMajor,
} from "@/utils";
import Toast from "../Toast";

interface TableParams {
  pagination?: TablePaginationConfig;
}

const App: React.FC = () => {
  const columns: ColumnsType<MajorProps> = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "专业",
      dataIndex: "name",
      sorter: (a, b) => (a.name < b.name ? -1 : 1),
    },
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      render: (_, record) => {
        const handleEditClick = (record: MajorProps) => {
          setCurrent(record.id);
          setEditOpen(true);
        };
        const handleDeleteClick = (record: MajorProps) => {
          deleteMajor(record.id)
            .then(() => {
              Toast.success("操作成功");
              setRefresh(true);
            })
            .catch((err) => {
              Toast.error(err.data.detail);
            });
        };
        return (
          <Space>
            <Button type="link" onClick={() => handleEditClick(record)}>
              编辑
            </Button>
            <Button type="link" onClick={() => handleDeleteClick(record)}>
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  const [current, setCurrent] = useState<number>();
  const [editOpen, setEditOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [data, setData] = useState<MajorProps[]>();
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
      getAdminMajorList(
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
    <>
      <Space direction="vertical" style={{width: '100%'}}>
        <Row style={{ justifyContent: "right" }}>
          <Button type="primary" onClick={() => setCreateOpen(true)}>
            创建专业
          </Button>
        </Row>
        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
          loading={loading}
          pagination={tableParams.pagination}
          onChange={handleChange}
        />
      </Space>
      <MajorForm
        title="编辑专业"
        id={current}
        open={editOpen}
        setOpen={setEditOpen}
        setRefresh={setRefresh}
        handleSubmit={updateMajor}
      />
      <MajorForm
        title="创建专业"
        open={createOpen}
        setOpen={setCreateOpen}
        setRefresh={setRefresh}
        handleSubmit={addMajor}
      />
    </>
  );
};

export default App;

interface MajorFormProps {
  id?: number;
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setRefresh: (v: boolean) => void;
  handleSubmit: (value: MajorProps) => Promise<any>;
}
const MajorForm: React.FC<MajorFormProps> = ({
  id,
  title,
  open,
  setOpen,
  setRefresh,
  handleSubmit,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title={title}
      okText="提交"
      cancelText="取消"
      onCancel={() => setOpen(false)}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            values.id = id;
            handleSubmit(values)
              .then(() => {
                setRefresh(true);
                setOpen(false);
                Toast.success("提交成功");
              })
              .catch((err) => {
                Toast.error(err.data.detail);
              });
            form.resetFields();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="majorForm"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="name"
          label="专业名"
          rules={[{ required: true, message: "请输入专业名" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
