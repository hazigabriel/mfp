import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

export default () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div>
      <h1>Welcome to container app</h1>
      <hr />
      <div ref={ref}></div>

    </div>
  )
};