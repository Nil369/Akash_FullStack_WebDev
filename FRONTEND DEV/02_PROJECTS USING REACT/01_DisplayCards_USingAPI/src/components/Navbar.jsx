import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-violet-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          Akash Halder
        </div>
        <ul className="flex space-x-4">
          <li className="text-white cursor-pointer  hover:scale-125 hover:underline transition duration-200">
            Home
          </li>
          <li className="text-white cursor-pointer  hover:scale-125 hover:underline transition duration-200">
            About
          </li>
          <li className="text-white cursor-pointer  hover:scale-125 hover:underline transition duration-200">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
