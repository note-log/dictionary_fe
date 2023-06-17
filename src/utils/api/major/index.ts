import axios from "axios";

export async function getAdminMajorList(page: number, size = 20) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get("/api/admin/major/list?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function addMajor(v: MajorProps) {
  try {
    const res = await axios.put("/api/admin/major", v);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateMajor(v: MajorProps) {
  try {
    const res = await axios.post("/api/admin/major", v);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteMajor(id: number) {
  const params = new URLSearchParams();
  params.set("id", id.toString());
  try {
    const res = axios.delete("/api/admin/major?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}