import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""}`,
    Accept: "application/json",
  },
});
