import express, { Response, Request, Application, NextFunction } from 'express';

import route from './router/route';

import cookieParser from 'cookie-parser';
import sessions from 'express-session';
import someThingRoute from './router/somethingroute';
import 'dotenv/config'
import {TypeUser} from "./database/database"

const app: Application = express();
console.log(process.env.some)
const PORT = process.env.PORT || 3000;
console.log('PORT', process.env.PORT);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(
    sessions({
        secret: 'thisismysecrctekeyfhrgfgrfrty84fwir767',
        saveUninitialized: true,
        cookie: { maxAge: oneDay, secure: true },
        name: 'sdfsdfsd', // name of cookie
        resave: false,
    })
);
function middleware(req: Request, res: Response, next: NextFunction) {
    console.log('middleware');
    next();
}

app.get('/', middleware, (req: Request, res: Response) => {
    req.session.userId = 'sdfsfsdf';
    console.log(req.session);
    TypeUser.create({name:"dsfsdfsdf"}).then(r => console.log(r)).catch(e => console.warn(e))
    res.send('dsfsdfsd');
});
app.post('/', (req: Request, res: Response) => {
    console.log(req.body.name);
    res.send('dgdfgd');
});
app.use('/', route);
app.use("/",someThingRoute)
app.listen(PORT, () => console.log(`app listen localhost ${PORT}`));
