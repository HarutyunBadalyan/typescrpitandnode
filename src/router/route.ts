import express, {Response, Request} from "express";
import helper from "../helper/helper"
import jscout from "../helper/jshelper";
import tiny from "@bamblehorse/tiny";
import someJson from "./some.json"
const route = express.Router();
route.get("/about", (req:Request | any, res:Response | any) => {
    console.log(req.session.userId)
    helper()
    console.log(someJson)
    console.log(tiny( "asfdsfsdf sdfsdf"))
    jscout()
    res.send("about")
})
export default route;