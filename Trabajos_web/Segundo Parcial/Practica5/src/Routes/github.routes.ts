import { Router } from 'express';
import { githubRepository } from '../implementations/Github/repository';

const router = Router();

router.get('/repos', async (req, res) => {
  try {
    const repos = await githubRepository.getRepositories();
    res.json(repos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los repositorios' });
  }
});

export default router;