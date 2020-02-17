import express, { ErrorRequestHandler ,RequestHandler,Request,Response, NextFunction} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/index';

const app = express();

/**
    * Connect to the database
    */

mongoose.connect('mongodb://localhost:27017',{useUnifiedTopology: true});

/**
    * Middleware
    */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${req.originalUrl} not found`);
    next();
});

// catch 500
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

/**
    * Register the routes
    */

routes(app);

export default app;