import React, { useState } from 'react'
import type { NextPage } from 'next'

import s from './Home.module.css'

import logos from '../logos'


type Props = {
  initialQuery: string
}

const Home: NextPage<Props> = ({ initialQuery }) => {
  const [ query, setQuery ] = useState(initialQuery || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    setQuery(query)

    // @ts-ignore
    history.pushState({}, null, `/?q=${query}`)
  }

  const filteredLogos = !query ? logos : logos.filter((name) => name.includes(query.toLowerCase()))

  return (
    <div className={s.page}>
      <div className={s.container}>
        <input className={s.input} value={query} onChange={handleChange} />
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

Home.getInitialProps = ({ query }) => {

  return {
    initialQuery: query.q as string,
  }
}


export default Home
