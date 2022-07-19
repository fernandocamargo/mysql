import type { AxiosError } from 'axios';
import property from 'lodash/property';

export const normalize = ({ response }: AxiosError<any>) => {
  switch (true) {
    case !!response?.data?.message:
      return response?.data;
    case !!response?.statusText:
      return new Error(`${response?.status}: ${response?.statusText}`);
    default:
      return new Error(response?.data);
  }
};

export const reject = (response: AxiosError) =>
  Promise.reject(normalize(response));

export const resolve = property('data');
