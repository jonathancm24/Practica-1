import axios, { AxiosInstance } from 'axios';
import nodeFetch from 'node-fetch';

interface HttpClient {
  get(url: string): Promise<any>;
}

class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create();
  }

  async get(url: string): Promise<any> {
    const response = await this.client.get(url);
    return response.data;
  }
}

class NodeFetchHttpClient implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await nodeFetch(url);
    return response.json();
  }
}

export const axiosHttpClient = new AxiosHttpClient();
export const nodeFetchHttpClient = new NodeFetchHttpClient();