import APIInstance from "@mirlo/mirlo-api-client";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3000";
const api = APIInstance(API_HOST, API_KEY);

export default api;
