import axios, { type AxiosInstance } from 'axios';
import { BASEURL } from '../config';

/**
 * Service API base class - configures default settings/error handling for inheriting class
 */
export abstract class BaseService {
  protected readonly $http: AxiosInstance;

  protected constructor(controller: string, timeout: number = 50000) {
    this.$http = axios.create({
      timeout,
      baseURL: `${BASEURL}/api/${controller}/`
    });
  }
}
