import axios from 'axios';
import { env } from 'process';

interface GithubDatasource {
  getRepositories(): Promise<any>;
}

class GithubDatasourceImpl implements GithubDatasource {
  private readonly baseUrl = 'https://api.github.com';
  private readonly token = env.GITHUB_TOKEN;

  async getRepositories(): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/user/repos`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return response.data;
  }
}

export const githubDatasource = new GithubDatasourceImpl();