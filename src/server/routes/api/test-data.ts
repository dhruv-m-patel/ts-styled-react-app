import { Router, Request, Response } from 'express';
import { getTestData } from '../../models/test-data';

export default async function test(router: Router) {
  router.get('/', async (req: Request, res: Response) => {
    const data = getTestData();
    res.json(data);
  });
}
