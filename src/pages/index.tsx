import React, { useState } from 'react'
import type { NextPage } from 'next'

import s from './Home.module.css'

import logos from '../logos'


const Home: NextPage = () => {
  const [ query, setQuery ] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const filteredLogos = !query ? logos : logos.filter((name) => name.includes(query.toLowerCase()))

  return (
    <div className={s.page}>
      <div className={s.container}>
        <input className={s.input} onChange={handleChange} />
        <div className={s.items}>
          {
            filteredLogos.map((name) => (
              <a key={name} className={s.item} href={`/images/logos/${name}.svg`} target="_blank" rel="noreferrer">
                <img className={s[name]} src={`/images/logos/${name}.svg`} alt={name} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Home
