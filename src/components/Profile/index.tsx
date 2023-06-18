import { getClazzList, getMajorList, updateProfile } from "@/utils";
import {
  Button,
  Descriptions,
  Form,
  Input,
  Modal,
  Row,
  Select,
  DatePicker,
} from "antd";
import { useEffect, useState } from "react";
import Toast from "../Toast";
import CityPicker from "../CityPicker";
import { useAuth } from "@/store";
interface Props {
  props: ProfileProps;
}

export default function Profile({ props }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Descriptions title="个人资料" bordered>
        <Descriptions.Item label="学号">{props?.username}</Descriptions.Item>
        <Descriptions.Item label="姓名">{props?.name}</Descriptions.Item>
        <Descriptions.Item label="手机号码">{props?.phone}</Descriptions.Item>
        <Descriptions.Item label="电子邮箱">{props?.email}</Descriptions.Item>
        <Descriptions.Item label="专业" span={2}>
          {props?.major}
        </Descriptions.Item>
        <Descriptions.Item label="班级" span={3}>
          {props?.clazz}
        </Descriptions.Item>
        <Descriptions.Item label="入学年份">
          {props?.enrollmentYear}
        </Descriptions.Item>
        <Descriptions.Item label="毕业年份">
          {props?.graduateYear}
        </Descriptions.Item>
        <Descriptions.Item label="就职单位">{props?.company}</Descriptions.Item>
        <Descriptions.Item label="城市">{props?.city}</Descriptions.Item>
      </Descriptions>
      <Row style={{ justifyContent: "right" }}>
        <Button type="link" onClick={handleClick}>
          编辑
        </Button>
      </Row>
      {props !== undefined && (
        <ProfileForm open={open} setOpen={setOpen} values={props} />
      )}
    </>
  );
}

interface ProfileFormProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  values: ProfileProps;
}

interface Option {
  value: string;
  label: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ open, setOpen, values }) => {
  const [form] = Form.useForm();
  const [majors, setMajors] = useState<Option[]>([]);
  const [clazzs, setClazzs] = useState<Option[]>([]);
  const [cityArr, setCityArr] = useState<string[]>([]);
  const [city, setCity] = useState<string>();
  const { fetch, username } = useAuth();
  function handleCityChange(v: string[]) {
    setCityArr(v);
    setCity(v.join(","));
  }
  useEffect(() => {
    setCityArr(values.city?.split(",") ?? []);
    getMajorList()
      .then((res) => {
        const data: any[] = res.data.data.list;
        data.map((v, i, arr) => {
          arr[i] = { value: v.name, label: v.name };
        });
        setMajors(data);
      })
      .catch((err) => {
        Toast.error(err.data.detail);
      });
    getClazzList().then((res) => {
      const data: any[] = res.data.data.list;
      data.map((v, i, arr) => {
        arr[i] = { value: v.name, label: v.name };
      });
      setClazzs(data);
    });
  }, []);
  return (
    <Modal
      open={open}
      title="编辑个人资料"
      okText="提交"
      cancelText="取消"
      onCancel={() => setOpen(false)}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log(values);
            values.username = username;
            values.city = city;
            values.enrollmentYear = values.enrollmentYear.format("YYYY");
            values.graduateYear = values.graduateYear.format("YYYY");
            updateProfile(values)
              .then((res) => {
                if (res.status === 200) {
                  setOpen(false);
                  fetch()
                    .then(() => {
                      Toast.success("更新成功");
                    })
                    .catch(() => {
                      Toast.error("刷新失败");
                    });
                }
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
        name="profileForm"
        initialValues={values}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: "姓名不得为空！" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="手机号码"
          rules={[
            { required: true, message: "电话号码不得为空！" },
            { pattern: /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/, message: "请输入正确的手机号码！" }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="电子邮箱"
          rules={[{ required: true, message: "电子邮箱不得为空！" },
          { type: "email", message: "请输入正确的电子邮箱" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="major" label="专业">
          <Select options={majors} />
        </Form.Item>
        <Form.Item name="clazz" label="班级">
          <Select options={clazzs} />
        </Form.Item>
        <Form.Item name="enrollmentYear" label="入学年份" rules={[{ required: true, message: "入学年份不得为空" }]}>
          <DatePicker picker="year" />
        </Form.Item>
        <Form.Item name="graduateYear" label="毕业年份" rules={[{ required: true, message: "毕业年份不得为空" }]}>
          <DatePicker picker="year" />
        </Form.Item>
        <Form.Item name="company" label="就职单位">
          <Input />
        </Form.Item>
        <Form.Item name="city" label="城市">
          <CityPicker value={cityArr} setValue={handleCityChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
