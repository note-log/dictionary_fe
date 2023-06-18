import axios from "axios";

export async function signUp(data: RegisterInputs) {
  try {
    const res = await axios.put("/api/user/register", {
      username: data.username,
      name: data.name,
      password: data.password,
      email: data.email,
      phone: data.phone,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function login(data: LoginInputs) {
  try {
    const res = await axios.post("/api/auth/login", {
      username: data.username,
      password: data.password,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getMajorList() {
  try {
    const res = await axios.get("/api/user/major/list");
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getClazzList() {
  try {
    const res = await axios.get("/api/user/clazz/list");
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateProfile(profile: ProfileProps) {
  try {
    const res = await axios.post("/api/user/profile", profile);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getProfileList(page: number, size = 20) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get("/api/user/profile/list?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getSearchedProfile(
  name: string,
  page: number,
  size = 20
) {
  const params = new URLSearchParams();
  params.set("name", name);
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get(
      "/api/user/profile/search?" + params.toString()
    );
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function changePassword(oldPassword: string, newPassword: string) {
  try {
    const res = axios.post("/api/user/password", {
      oldPassword,
      newPassword,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}