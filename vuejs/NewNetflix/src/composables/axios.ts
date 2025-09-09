import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { ref, type Ref } from 'vue';

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:2222/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('auth_token');
      // You can add router navigation here if needed
    }
    return Promise.reject(error);
  }
);

export interface UseAxiosReturn<T = any> {
  data: Ref<T | null>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  execute: () => Promise<T | null>;
}

/**
 * Composable for making HTTP requests with axios
 * @param url - The URL to make the request to
 * @param config - Axios request configuration
 * @param immediate - Whether to execute the request immediately
 */
export function useAxios<T = any>(
  url: string,
  config: AxiosRequestConfig = {},
  immediate: boolean = false
): UseAxiosReturn<T> {
  const data: Ref<T | null> = ref(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const execute = async (): Promise<T | null> => {
    loading.value = true;
    error.value = null;

    try {
      const response: AxiosResponse<T> = await apiClient.request({
        url,
        ...config,
      });
     
      data.value = response.data;
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      error.value = errorMessage;
      console.error('Axios request error:', err);
      return null;
    
    } finally {
  
      loading.value = false;
    }
  };

  // Execute immediately if requested
  if (immediate) {
    execute();
  }

  return {
    data,
    loading,
    error,
    execute,
  };
}

/**
 * Simplified GET request composable
 */
export function useGet<T = any>(url: string, immediate: boolean = false): UseAxiosReturn<T> {
  return useAxios<T>(url, { method: 'GET' }, immediate);
}

/**
 * Simplified POST request composable
 */
export function usePost<T = any>(url: string, data?: any): UseAxiosReturn<T> {
  return useAxios<T>(url, { method: 'POST', data }, false);
}

/**
 * Simplified PUT request composable
 */
export function usePut<T = any>(url: string, data?: any): UseAxiosReturn<T> {
  return useAxios<T>(url, { method: 'PUT', data }, false);
}

/**
 * Simplified DELETE request composable
 */
export function useDelete<T = any>(url: string): UseAxiosReturn<T> {
  return useAxios<T>(url, { method: 'DELETE' }, false);
}

/**
 * Raw axios instance for direct use
 */
export { apiClient };

/**
 * Manual request function for one-off requests
 */
export async function makeRequest<T = any>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<{ data: T | null; error: string | null }> {
  try {
    const response: AxiosResponse<T> = await apiClient.request({
      url,
      ...config,
    });
    return { data: response.data, error: null };
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
    return { data: null, error: errorMessage };
  }
}
