import express, { Application, Request, Response, application } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/interface/student.route';

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
