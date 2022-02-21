import express, { Response, Request } from "express";
import helper from "../helper/helper";
import { jscout, jsReturnTwo } from "../helper/jshelper";
import tiny from "@bamblehorse/tiny";
import someJson from "./some.json";
const route = express.Router();
route.get("/about", (req: Request | any, res: Response | any) => {
  console.log("session", req.session.userId);
  helper();
  console.log(someJson);
  console.log(tiny("asfdsfsdf sdfsdf"));
  let f: string = jscout();

  let i: number = jsReturnTwo();
  console.log(f, typeof f);
  console.log(i);
  res.send("about");
});
export default route;
