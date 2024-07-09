import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../features/noteSlice'

const Home = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();

    const handleAddNotes = (e)=> {
        e.preventDefault();
        const newNote = {
            id: Date.now().toString(32),
            title,
            description,
            createdAt: new Date().toString(),
        };
        dispatch(addNote(newNote));
    };
  return (
    <>
        <div className="w-full h-screen flex justify-center  items-center">
            <div className="w-1/4 bg-white shadow-md rounded-md px-4 py-5 box-border border border-y-green-500 border-y-4">
                <h1 className='font-mono text-center text-2xl'>Add Your Notes</h1>
                <input 
                placeholder='Title'
                className='w-full rounded-md border border-blue-500 p-2 outline-none mt-2'
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
                />

                <textarea
                placeholder='Your Description...'
                className='resize-none w-full rounded-md border border-blue-500 p-2 outline-none mt-2'
                maxLength={400}
                rows={5}
                onChange={(e)=> setDescription(e.target.value)}
                value={description}
                />

                <button onClick={handleAddNotes} className='bg-[#333] text-white py-2 px-5 rounded-md mt-5 font-bold'>Save Notes</button>
            </div>
        </div>
    </>
  )
}

export default Home