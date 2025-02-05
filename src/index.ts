import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const port: Number = 4000;

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ status: '200' });
});

app.use('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ data: 'Hello teman2' });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
