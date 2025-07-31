import { axiosInstanse } from "../../../shared/api/axios";
import type { Post } from "../model/types";

export const fetchUserPost = async (): Promise<Array<Post>> => {
  const res = await axiosInstanse.get("/posts");
  return res.data;
};
