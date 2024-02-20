import { FC } from 'react'

const getSpells = async () => (await fetch('http://localhost:4000/spells')).json()

const SpellList: FC = async () => {
  const spells = await getSpells()
  return (
    <div className='cards'>
      {spells.map(({ id, title, description }) => (
        <div key={id} className='card'>
          <h3>{title}</h3>
          <p>{description.slice(0, 200)}...</p>
        </div>
      ))}
    </div>
  )
}

export default SpellList
