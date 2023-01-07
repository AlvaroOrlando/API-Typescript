import express, { json, Request, Response } from 'express';
const app = express();
const PORT = 3333;
app.use(express.json())

import { categoriesRoutes } from '../routes/categories.routes';
import { specificationRoutes } from '../routes/specifications.routes';

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationRoutes);


app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}!`));