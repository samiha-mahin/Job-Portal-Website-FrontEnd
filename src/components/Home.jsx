import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Hero from './Hero'
import Category from './Category'
import Latest_jobs from './Latest_jobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import About from './About'
import ReviewSection from './ReviewSection'
import Article from './Article'

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth)
  const navigate = useNavigate();
  useEffect(()=>{
    if(user?.role === 'recruiter'){
      navigate('/admin/companies')
    }
      
  },[])
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Category/>
       <Latest_jobs/>
       <About/>
       <Article/>
       <ReviewSection/>
       <Footer/>
    </div>
  )
}

export default Home