import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { publicRuntimeConfig } from "next.config";

export const api: AxiosInstance = axios.create({
  baseURL: publicRuntimeConfig?.BASE_URI_API,
  timeout: 8000,
} as AxiosRequestConfig);
