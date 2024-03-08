import { config } from 'dotenv'
import { Pool } from 'pg'

config()

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const PORT = process.env.PORT as unknown as number
const HOST = process.env.HOST
const DATABASE = process.env.DATABASE

const pool = new Pool({
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: HOST,
  database: DATABASE,
  port: PORT,
})

export default pool
