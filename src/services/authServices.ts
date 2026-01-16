import axios from "axios";
import { LoginInput } from "@/types/auth";

export const authService = {
  login: async (data: LoginInput) => {
    const response = await axios.post("/api/login", data);
    return response.data;
  },
};
