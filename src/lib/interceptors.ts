import axios, { type CreateAxiosDefaults } from "axios";

import { errorCatch } from "@/lib/error";

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);

axiosClassic.interceptors.response.use(
  (config) => config,

  async (error) => {
    throw errorCatch(error);
  }
);

export { axiosClassic };
