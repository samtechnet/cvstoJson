import express from 'express';
import newData from '../newData';

const routes = express.Router();

routes.get("/", (req, res) => {
   
  
    res.send("This is routes");
  });

routes.use('/routes', routes);
routes.use('/newdata', newData)
  


export default routes;
