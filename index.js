import express from 'express';
import sequilize from './config/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';

import CatgeoryRoute from './routes/CategoryRoute.js';
import AuthorRoute from './routes/AuthorRoute.js';
import BookRoute from './routes/BookRoute.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

sequilize.sync()   


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.get('/',(req,res)=>{
 res.send("hello world")
})

app.use('/categories', CatgeoryRoute)
app.use('/authors', AuthorRoute)
app.use('/books', BookRoute)



app.listen(port,()=>{
   console.log(`SERVER IS RUNNING ON PORT ${port}`);
})