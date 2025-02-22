import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors({ origin: ['https://book-shop-b4a4v1-client.vercel.app'], credentials: true }))

// application routes
app.use('/api/v1', router)

// homepage routes
app.get('/', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, 'app/config', 'homepage.json')

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({
                message: 'Error loading homepage data',
                success: false,
                error: err.message,
            })
        }

        const jsonData = JSON.parse(data)
        res.status(200).json(jsonData)
    })
})

app.use(globalErrorHandler)

export default app
