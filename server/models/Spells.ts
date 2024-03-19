import pool from '../db/pool'
import { ISpell } from '@interfaces/ISpell'

const getAllSpells = async (): Promise<ISpell[]> => {
  const res = await pool.query(
    `
    SELECT
        *
    FROM
        core.spells
    ORDER BY
        NAME, BASE_RANK DESC
    `,
  )
  return res.rows
}

const Spells = { getAllSpells }

export default Spells
