import express, { Request, Response } from 'express';

class RouteTeste {
  router: any

  constructor(router: any) {
    router.get('/teste', (req: Request, res: Response) => {
      res.send('<h1>Hi! It\'s works!</h1>');
    });
  }

    
}
export default RouteTeste;
