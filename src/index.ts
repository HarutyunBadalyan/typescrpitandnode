import express, {Response, Request, Application} from "express";

import route from "./router/route";

import cookieParser  from "cookie-parser";
import sessions from 'express-session';

const app:Application = express();

const PORT = process.env.PORT || 3000
console.log("PORT",process.env.PORT)
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));


app.get("/", (req:Request | any, res:Response) => {
    req.session.userId = "sdfsfsdf"
    res.send("dsfsdfsd");
})
app.post("/", (req: Request , res:Response) => {
    console.log(req.body.name)
    res.send('dgdfgd')
})
app.use("/",route);
app.listen(PORT, () => console.log("app listen localhost 3000"))