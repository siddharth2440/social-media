"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const AddPostBtn = () => {
    const { pending } = useFormStatus();
  return (
        <button className='bg-blue-300 rounded-md text-white px-2 py-1 disabled:bg-slate-300 disabled:cursor-not-allowed' disabled={pending}>
        {
            pending? '...' : 'Send'    
        }
        </button>
  )
}

export default AddPostBtn