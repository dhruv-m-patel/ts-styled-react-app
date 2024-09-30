import { Router, Response, NextFunction } from 'express';
import { JSONObject, StatefulWebRequest } from '../types';
import { getTestData } from '../models/test-data';
import { WebRequest } from '@dhruv-m-patel/web-app';
import preloadRequiredState from '../middleware/preloadRequiredState';

export default async function AboutPage(router: Router) {
  router.get(
    '/',
    preloadRequiredState,
    async (req: WebRequest, res: Response, next: NextFunction) => {
      (req as StatefulWebRequest).initialState = {
        ...((req as StatefulWebRequest).initialState as JSONObject),
        example: {
          data: getTestData(),
        },
      };
      next();
    }
  );
}
