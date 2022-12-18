import express from 'express'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = 5000

await connectDB()

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
    res.send('API is running ...');
})

app.use('/users', userRoutes)

app.listen(PORT, console.log('The Server is up ad running'));