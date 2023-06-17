type RegisterInputs = {
  username: string;
  name: string;
  password: string;
  repeatPassword: string;
  email: string;
  phone: string;
};

type LoginInputs = {
  username: string;
  password: string;
};

interface ProfileProps {
  username: string;
  name: string;
  phone: string;
  email: string;
  major?: string;
  clazz?: string;
  enrollmentYear?: string;
  graduateYear?: string;
  company?: string;
  city?: string;
}

interface UserProps {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  audit: boolean;
  admin: boolean;
  banned: boolean;
  deleted: boolean;
  loginTime: number;
  lastLoginTimestamp: number;
  major?: string;
  clazz?: string;
  enrollmentYear?: string;
  graduateYear?: string;
  company?: string;
  city?: string;
}

interface MajorProps {
  id: number;
  name: string;
}

interface ClazzProps {
  id: number;
  name: string;
}