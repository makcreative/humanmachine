import React from 'react'
import { Menu } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="h-[50px] bg-black border-b border-gray-800 w-full flex items-center justify-between px-4">
        <h1 className="text-sm font-imprima">HUMAN + MACHINE</h1>
        <button className="text-white focus:outline-none">
          <Menu size={24} />
        </button>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {/* Main content can be added here */}
      </main>
    </div>
  )
}

export default App