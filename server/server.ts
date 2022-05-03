
import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import authRouter from './routes/Auth';

const app = express()
app.use(express.json())
app.use(cors())
// load config settings

const PORT = process.env.PORT || 4000
const DB_URL= process.env.DB_URL || 'mongodb://127.0.0.1:27017/chat_app_db'

app.get('/', async (req, res) => {
    res.json("hello world")
});


// connect to database
try {
    mongoose.connect(DB_URL)
} catch (error:any) {
    console.log(error);
    process.exit(1)
}

const db = mongoose.connection;

db.on('error', (err:any) =>console.error(err));
db.once('open',()=> console.log('Connected to database successfully!!!'))


// add some extra routing
app.use('/api/auth', authRouter)













app.listen(PORT, ()=>console.log(`server listen on port ${PORT}`))