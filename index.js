import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from './routes/ProductRoute.js';

const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'https://crud-backend-beta.vercel.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(FileUpload());
app.use(ProductRoute);
app.use(cors(corsOptions));


app.listen(5000, ()=> console.log('Server Up and Running...'));