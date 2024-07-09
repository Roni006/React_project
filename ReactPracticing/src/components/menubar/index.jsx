import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-black">
            <div className="container">
                <div className="row flex justify-between items-center font-mono text-white py-5">
                    <div className="logo">
                    <Link to="/" className='text-2xl mx-3 font-mono'>Home</Link>
                    </div>
                    <div className="menu">
                        <Link to="/" className='text-2xl mx-3 font-mono'>Home</Link>
                        <Link to="/notes" className='text-2xl mx-3 font-mono'>Notes</Link>
                        <Link to="/contact" className='text-2xl mx-3 font-mono'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar