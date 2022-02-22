import express, { Response, Request } from 'express';

import User from '../helper/classmodule';
const someThingRoute = express.Router();
someThingRoute.get('/something', (req: Request | any, res: Response | any) => {
    console.log(User)
  console.log("something1");
  console.log("something2");
  console.log("something 3")
    res.send('something');
});
console.log("dev")
console.log("dev")

export default someThingRoute;
