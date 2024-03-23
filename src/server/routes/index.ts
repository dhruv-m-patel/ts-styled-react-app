import { Router } from 'express';
import preloadRequiredState from '../middleware/preloadRequiredState';

export default async function HomePage(router: Router) {
  router.get('/', preloadRequiredState);
}
