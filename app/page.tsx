import { FC } from 'react'

const Home: FC = () => {
  return (
    <main style={{ height: '80vh' }}>
      <h2>Character Sheet</h2>
      <section style={{ background: 'yellow' }} className='h-40'>
        Horizontal 1
      </section>
      <section className='flex gap-1 h-5/6 w-full'>
        <article style={{ background: '#c0c0c0' }} className='w-80'>
          Vertical 1
        </article>
        <article style={{ background: '#d2d2d2' }} className='w-80'>
          Vertical 2
        </article>
        <article style={{ background: '#e4e4e4' }} className='w-80'>
          Vertical 3
        </article>
      </section>
    </main>
  )
}

export default Home
