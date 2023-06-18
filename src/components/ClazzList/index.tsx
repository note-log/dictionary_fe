/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-17 11:51:11
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 14:02:48
 * @FilePath: \notelog_fe\src\components\ClazzList\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Row, Space, Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { addClazz, deleteClazz, getAdminClazzList, updateClazz } from "@/utils";
import Toast from "../Toast";

interface TableParams {
  pagination?: TablePaginationConfig;
}

const App: React.FC = () => {
  const columns: ColumnsType<ClazzProps> = [
    {
      title: "id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "班级",
      dataIndex: "name",
      sorter: (a, b) => (a.name < b.name ? -1 : 1),
    },
    {
      title: "操作",
      dataIndex: "",
      key: "x",
      render: (_, record) => {
        const handleEditClick = (record: ClazzProps) => {
          setCurrent(record.id);
          setEditOpen(true);
        };
        const handleDeleteClick = (record: ClazzProps) => {
          deleteClazz(record.id)
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
  const [data, setData] = useState<ClazzProps[]>();
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
      getAdminClazzList(
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
    setRefresh(true);
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Row style={{ justifyContent: "right" }}>
          <Button type="primary" onClick={() => setCreateOpen(true)}>
            创建班级
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
      <ClazzForm
        title="编辑班级信息"
        id={current}
        open={editOpen}
        setOpen={setEditOpen}
        setRefresh={setRefresh}
        handleSubmit={updateClazz}
      />
      <ClazzForm
        title="创建班级"
        open={createOpen}
        setOpen={setCreateOpen}
        setRefresh={setRefresh}
        handleSubmit={addClazz}
      />
    </>
  );
};

export default App;

interface ClazzFormProps {
  id?: number;
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  setRefresh: (v: boolean) => void;
  handleSubmit: (value: ClazzProps) => Promise<any>;
}
const ClazzForm: React.FC<ClazzFormProps> = ({
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
        name="clazzForm"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="name"
          label="班级名"
          rules={[{ required: true, message: "请输入班级名" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
