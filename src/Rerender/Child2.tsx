import React, { useEffect } from 'react'

function Child2() {
    useEffect(()=>{
        console.log('child2 rerendered')
    })
  return (
    <div>
      child2
    </div>
  )
}

export default Child2
