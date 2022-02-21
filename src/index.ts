import express, { Response, Request, Application, NextFunction } from "express";

import route from "./router/route";

import cookieParser from "cookie-parser";
import sessions from "express-session";

const app: Application = express();

const PORT = process.env.PORT || 3000;
console.log("PORT", process.env.PORT);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay, secure: true },
    name: "sdfsdfsd", // name of cookie
    resave: false,
  })
);
function middleware(req: Request, res: Response, next: NextFunction) {
  console.log("middleware");
  next();
}

app.get("/", middleware, (req: Request, res: Response) => {
  req.session.userId = "sdfsfsdf";
  console.log(req.session);
  res.send("dsfsdfsd");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body.name);
  res.send("dgdfgd");
});
app.use("/", route);
app.listen(PORT, () => console.log(`app listen localhost ${PORT}`));
