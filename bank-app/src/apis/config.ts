import axios, { AxiosResponse } from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create({ baseURL });

export type APIResponse<T> = AxiosResponse<T>;
