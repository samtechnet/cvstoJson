import express from 'express';
import newData from '../newData';

const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
   
  
    res.send("This is routes");
  });

routes.use('/routes', routes);
routes.use('/convert', newData)
  


export default routes;
