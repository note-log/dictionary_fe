import axios from "axios";

export async function getAuditList(page: number, size = 20) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get("/api/admin/audit/list?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function approve(username: string) {
  try {
    const res = axios.post("/api/admin/approval", {
      username: username,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteUser(username: string) {
  const params = new URLSearchParams();
  params.set("username", username);
  try {
    const res = axios.delete("/api/admin/user/delete?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getBannedList(page: number, size = 20) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get("/api/admin/banned?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function ban(username: string) {
  try {
    const res = axios.post("/api/admin/ban", {
      username: username,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function unban(username: string) {
  try {
    const res = axios.post("/api/admin/unban", {
      username: username,
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getUserList(page: number, size = 20) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get("/api/admin/profile/list?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}