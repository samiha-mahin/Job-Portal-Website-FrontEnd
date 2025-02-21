import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const JobCards = ({job}) => {
  const navigate = useNavigate();
  return (
    <div  onClick={()=> navigate(`/description/${job._id}`)}  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
         <div>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>Bangladesh</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.tittle}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-green-700 font-bold'} variant="ghost">{job?.position} Position</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
            <Badge className={'text-[#3886c2] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
        </div>
    </div>
  )
}

export default JobCards