import React, {lazy } from 'react'
import {HomeHero, HomeFeature, HomeNewsLetter, HomeOurMentors, HomePopularCourse, HomeTestimonial} from '../temp/components/home'

// const LazyHomeHero = lazy(() => import('../temp/components/home/hero'))
// const LazyHomeFeature = lazy(() => import('../temp/components/home/feature'))
// const LazyHomePopularCourse = lazy(() => import('../temp/components/home/popular-courses'))
// const LazyHomeTestimonial = lazy(() => import('../temp/components/home/testimonial'))
// const LazyHomeOurMentors = lazy(() => import('../temp/components/home/mentors'))
// const LazyHomeNewsLetter = lazy(() => import('../temp/components/home/newsletter'))

export default function Home(){
    return(
      <>
        <HomeHero />
        <HomeFeature />
        <HomePopularCourse />
        <HomeTestimonial />
        <HomeOurMentors />
        <HomeNewsLetter />
      </>
    )
}