'use client'
import { FC, useState, useEffect } from 'react'
import { getAllSpells } from '../requests/spellsRequests'
import { ISpell } from '@/interfaces/ISpell'

const SpellList: FC = () => {
  const [spells, setSpells] = useState<ISpell[]>([])

  useEffect(() => {
    const fetchSpells = async () => {
      const spells = await getAllSpells()
      setSpells(spells)
    }
    fetchSpells()
  }, [])

  return (
    <div className='cards'>
      {spells.map(({ id, name, baseRank, description }) => (
        <div key={id} className='card'>
          <h3>{name}</h3>
          <h4>Base rank: {baseRank}</h4>
          <p>{description.slice(0, 200)}...</p>
        </div>
      ))}
    </div>
  )
}

export default SpellList
