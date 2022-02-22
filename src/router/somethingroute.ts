import express, { Response, Request } from 'express';


const someThingRoute = express.Router();
someThingRoute.get('/something', (req: Request | any, res: Response | any) => {
  
    res.send('something');
});
export default someThingRoute;
