'use client'

import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function App() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="absolute right-2 top-2 p-1 max-sm:block hidden bg-white shadow-md rounded-md">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default App
