import { WebRequest } from '@dhruv-m-patel/web-app';
import { NextFunction, Response } from 'express';
import { JSONObject, StatefulWebRequest } from '../types';

export default function preloadRequiredState(
  req: WebRequest,
  res: Response,
  next: NextFunction
) {
  const { config } = req.app.locals;
  (req as StatefulWebRequest).initialState = {
    ...((req as StatefulWebRequest).initialState as JSONObject),
    config: {
      env: config?.get('env'),
      title: config?.get('title'),
    },
  };

  next();
}
