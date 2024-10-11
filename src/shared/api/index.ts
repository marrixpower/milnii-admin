import { store } from 'app/index';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { authActions, refresh } from 'features/index';

interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}

const baseURL = import.meta.env.VITE_BASE_URL;

const privateInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export const setAuthTokenHeader = (token: string) => {
  privateInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthTokenHeader = () =>
  delete privateInstance.defaults.headers.common.Authorization;

let isRefreshing = false;
let failedRequestsQueue: QueueItem[] = [];

const processQueue = (error: AxiosError | null, token: string | null) => {
  failedRequestsQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedRequestsQueue = [];
};

privateInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        refresh()
          .then(({ accessToken }) => {
            isRefreshing = false;
            setAuthTokenHeader(accessToken);
            store.dispatch(authActions.enter(accessToken));
            processQueue(null, accessToken);
          })
          .catch(refreshError => {
            processQueue(refreshError, null);
            store.dispatch(authActions.exit());
            clearAuthTokenHeader();
          })
          .finally(() => {
            isRefreshing = false;
          });
      }
      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          resolve: (newToken: string) => {
            setAuthTokenHeader(newToken);
            if (!originalRequest.headers) {
              originalRequest.headers = {};
            }
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(privateInstance(originalRequest));
          },
          reject: (err: AxiosError) => {
            reject(err);
          },
        });
      });
    }
    return Promise.reject(error);
  }
);

export const apiPrivate = privateInstance;
