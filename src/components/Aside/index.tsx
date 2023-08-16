"use client"

import React, { useEffect, useState } from 'react'
import styles from '../../app/page.module.css'

const Aside = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(() => window.innerWidth)
  }, [])

  return (
    <div className='flex flex-col justify-around'>
      {width <= 900 && (
        <div className={`${styles.aside} bg-gray-300 opacity-50 mb-[100px]`}>
          <p className={styles.container_content}>Advertisement</p>
          
        </div>
      )}

      <div className={`${styles.aside} bg-gray-300 opacity-50`}>
          <p className={styles.container_content}>Advertisement</p>
      </div>
    </div>
  )
}

export default Aside
