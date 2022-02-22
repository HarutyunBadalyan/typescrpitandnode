import express, { Response, Request } from 'express';


const someThingRoute = express.Router();
someThingRoute.get('/something', (req: Request | any, res: Response | any) => {
  console.log("something1");
  
    res.send('something');
});
export default someThingRoute;
