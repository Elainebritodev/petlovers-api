import express from 'express';

import dotenv from 'dotenv';

import resquestTrackMiddleware from './middlewares/requestTrackin';
import errorHandlingMiddleware from './middlewares/errorHandling';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

dotenv.config();

const app = express();

app.use(resquestTrackMiddleware);

app.get('/', (req, res, next) => {
  try {
    vsdbsbbsbd
    res.json({ message: 'Hello!!!!! Project API ok!!!' })
  } catch (error) {
    next(error);
  }
}); /* para lidar com erro usa-se sempre try { } catch {} */

/* Criando dois middlewares */
app.use(errorHandlingMiddleware); /* Middleware error hendling */ 
app.use(resourceNotFoundMiddleware); /* Middleware de rota não encontrada */

app.listen(process.env.PORT, () => console.log(`App connected at PORT ${process.env.PORT}`));
