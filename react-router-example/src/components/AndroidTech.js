import React from 'react'
import { useParams } from 'react-router-dom'

function AndroidTech() {
    const { param1 } = useParams();
  return (
      <div>AndroidTech { param1 }</div>
  )
}

export default AndroidTech