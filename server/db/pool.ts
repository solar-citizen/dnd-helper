import { config } from 'dotenv'
import { Pool, QueryConfig, QueryResult, QueryResultRow } from 'pg'
import { parseColumnNames } from '../utils/parseColumnNames'

config()

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const PORT = process.env.PORT as unknown as number
const HOST = process.env.HOST
const DATABASE = process.env.DATABASE

class CustomPool {
  private pool: Pool

  constructor() {
    this.pool = new Pool({
      user: DB_USERNAME,
      password: DB_PASSWORD,
      host: HOST,
      database: DATABASE,
      port: PORT,
    })
  }

  private parseResult<T extends QueryResultRow = any>(result: QueryResult<T>): QueryResult<T> {
    if (result.rows) {
      const parsedRows = result.rows.map(parseColumnNames)
      return { ...result, rows: parsedRows }
    }
    return result
  }

  async query<T extends QueryResultRow = any, I extends any[] = any[]>(
    textOrConfig: string | QueryConfig<I>,
    values?: I,
  ): Promise<QueryResult<T>> {
    const queryResult = await this.pool.query<T>(textOrConfig, values)
    return this.parseResult(queryResult)
  }
}

const pool = new CustomPool()

export default pool
