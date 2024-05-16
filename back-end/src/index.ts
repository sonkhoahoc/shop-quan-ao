import express, { Express, Request, Response, Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import router from './routes/Router';
import swaggerDocument from '../swagger-output.json';
import { createConnection } from 'typeorm';
import cors from "cors";
import bodyParser  from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 7207;

// Sử dụng middleware bodyParser và cors trước khi định nghĩa các routes
app.use(bodyParser.json());
app.use(cors());

// Định nghĩa các routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1", router);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello-Word');
});

app.listen(port, () => {
    console.log(`Server is running on port${port}`);
});