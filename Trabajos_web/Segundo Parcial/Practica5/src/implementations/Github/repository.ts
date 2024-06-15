import { githubDatasource } from './datasource';

interface GithubRepository {
  getRepositories(): Promise<any>;
}

class GithubRepositoryImpl implements GithubRepository {
  async getRepositories(): Promise<any> {
    return await githubDatasource.getRepositories();
  }
}

export const githubRepository = new GithubRepositoryImpl();