import APIInstance from "@mirlo/mirlo-api-client";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "https://mirlo.space";
const baseApi = APIInstance(API_HOST, API_KEY);

const withApiErrorContext = async <T>(
  endpoint: string,
  action: string,
  callback: () => Promise<T>,
): Promise<T> => {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `Invalid non-JSON response from ${action} ${endpoint}. Check NEXT_PUBLIC_API_HOST (current: ${API_HOST}).`,
      );
    }
    throw error;
  }
};

const api = {
  ...baseApi,
  get: <R>(endpoint: string, signal?: AbortSignal) =>
    withApiErrorContext(endpoint, "GET", () =>
      baseApi.get<R>(endpoint, signal),
    ),
  getMany: <R>(endpoint: string, query?: { [key: string]: string }) =>
    withApiErrorContext(endpoint, "GET", () =>
      baseApi.getMany<R>(endpoint, query),
    ),
  post: <T, R>(endpoint: string, data: T, options?: RequestInit) =>
    withApiErrorContext(endpoint, "POST", () =>
      baseApi.post<T, R>(endpoint, data, options),
    ),
  put: <T, R>(endpoint: string, data: T, options?: RequestInit) =>
    withApiErrorContext(endpoint, "PUT", () =>
      baseApi.put<T, R>(endpoint, data, options),
    ),
  delete: <R>(endpoint: string) =>
    withApiErrorContext(endpoint, "DELETE", () => baseApi.delete<R>(endpoint)),
};

export default api;
