import express from 'express';

import dotenv from 'dontenv';

dotenv.config();

const app = express();

console.log(process.env);

app.get('/', (req, res) => res.json({ message: 'Hello Project API!' }));

app.listen(process.env.PORTprocess.env.PORT, () => console.log(`App connected at PORT 5050 ${process.env.PORT}`));

