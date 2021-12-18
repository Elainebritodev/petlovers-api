import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import initMongoConnection from './database/mongodbConfig';

import appRoutes from './routes';

import resquestTrackMiddleware from './middlewares/requestTrackin';
import errorHandlingMiddleware from './middlewares/errorHandling';
import resourceNotFoundMiddleware from './middlewares/resourceNotFound';

dotenv.config();

const app = express();

initMongoConnection();

app.use(express.json()); // para que o express possa acessar o req.body

app.use(cors({
  origin: process.env.FRONT_END_URI,
}));// liberando acesso somente para o localhost:3000 - local do front

app.use(resquestTrackMiddleware);

app.use('/api', appRoutes); // as rotas foram isoladas em outros arquivos para deixa mais clean (authController, petController, taskController)

/* Criando dois middlewares */
app.use(errorHandlingMiddleware); /* Middleware error hendling */
app.use(resourceNotFoundMiddleware); /* Middleware de rota não encontrada */

app.listen(process.env.PORT, () => console.log(`App connected at PORT ${process.env.PORT}`));
