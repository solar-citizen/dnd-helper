import * as express from 'express'
import * as cors from 'cors'
import { logRequest } from './middleware/logRequest.js'
import router from './routes/index.js'

const app = express()

app.use(cors())
app.use(logRequest)
app.use(express.json())
app.use(router)

export default app
