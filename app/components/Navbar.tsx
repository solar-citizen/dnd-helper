import Link from 'next/link'
import { FC } from 'react'

const Navbar: FC = () => (
  <nav>
    <Link href='/'>Main</Link>
    <Link href='/spells'>Spells</Link>
    <Link href='/bestiary'>Bestiary</Link>
  </nav>
)

export default Navbar
