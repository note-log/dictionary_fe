/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-09 14:40:21
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 03:16:06
 * @FilePath: \notelog_fe\src\store\index.ts
 * @Description:
 */
import axios from "axios";
import create from "zustand";
interface User {
  name: string;
  username: string;
  isAdmin: boolean;
  auth: boolean;
  profile?: ProfileProps;
  fetch: () => Promise<any>;
}
interface State {
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

export const useAuth = create<User>((set) => ({
  name: "",
  username: "",
  auth: false,
  isAdmin: false,
  fetch: async () => {
    try {
      const res = await axios.get("/api/user/profile");
      if (res.status === 200) {
        const profile = res.data.data.profile;
        set({
          name: profile.name,
          username: profile.username,
          isAdmin: profile.isAdmin,
          profile: profile,
          auth: true,
        });
        return Promise.resolve(res.data);
      }
      return Promise.reject(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
}));

export const useRefresh = create<State>((set) => ({
  refresh: true,
  setRefresh: (value: boolean) => set({ refresh: value }),
}));
