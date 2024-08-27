"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const UpdateBtn = () => {
    const {pending} = useFormStatus()
  return (
    <button disabled={pending} className='px-2 py-1 self-center text-[0.9rem] m-auto w-[90%] bg-blue-400 rounded-md disabled:bg-opacity-40 disabled:cursor-not-allowed'>
        {
            pending ? 'Updating...' : 'Update'
        }
    </button>
  )
}

export default UpdateBtn