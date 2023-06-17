import axios from "axios";

/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2023-06-17 13:52:26
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 13:52:26
 * @FilePath: \notelog_fe\src\utils\api\clazz\index.ts
 * @Description:
 */
export async function getAdminClazzList(page: number, size = 20) {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());
  try {
    const res = await axios.get("/api/admin/clazz/list?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function addClazz(v: ClazzProps) {
  try {
    const res = await axios.put("/api/admin/clazz", v);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateClazz(v: ClazzProps) {
  try {
    const res = await axios.post("/api/admin/clazz", v);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteClazz(id: number) {
  const params = new URLSearchParams();
  params.set("id", id.toString());
  try {
    const res = axios.delete("/api/admin/clazz?" + params.toString());
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
