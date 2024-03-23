import { Router, Response } from 'express';
import { getTestData } from '../../models/test-data';
import { WebRequest } from '@dhruv-m-patel/web-app';

export default async function test(router: Router) {
  router.get('/', async (req: WebRequest, res: Response) => {
    const data = getTestData();
    res.json(data);
  });
}
