"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./router/route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const somethingroute_1 = __importDefault(require("./router/somethingroute"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
console.log('PORT', process.env.PORT);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../', 'public')));
app.use((0, cookie_parser_1.default)());
const oneDay = 1000 * 60 * 60 * 24;
app.use((0, express_session_1.default)({
    secret: 'thisismysecrctekeyfhrgfgrfrty84fwir767',
    saveUninitialized: true,
    cookie: { maxAge: oneDay, secure: true },
    name: 'sdfsdfsd',
    resave: false,
}));
function middleware(req, res, next) {
    console.log('middleware');
    next();
}
app.get('/', middleware, (req, res) => {
    req.session.userId = 'sdfsfsdf';
    console.log(req.session);
    res.send('dsfsdfsd');
});
app.post('/', (req, res) => {
    console.log(req.body.name);
    res.send('dgdfgd');
});
app.use('/', route_1.default);
app.use('/', somethingroute_1.default);
app.listen(PORT, () => console.log(`app listen localhost ${PORT}`));
