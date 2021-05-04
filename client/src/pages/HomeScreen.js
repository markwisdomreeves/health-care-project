import React, { Suspense, lazy } from 'react'

import HeroScreen from '../components/mainpages/Header/HeroScreen'

const Appointment = lazy(() => import("../components/pageComponents/Appointment"))
const OurOffer = lazy(() => import("../components/pageComponents/OurOffer"))
const OurServices = lazy(() => import("../components/pageComponents/OurServices"))
const OurTeam = lazy(() => import("../components/pageComponents/OurTeam"))
const PatientGallery = lazy(() => import("../components/pageComponents/PatientGallery"))
const Footer = lazy(() => import("../components/pageComponents/Footer"))


function HomeScreen() {
  return (
    <div className="home-container">
      <HeroScreen />

      <Suspense fallback={<div />}>
        <Appointment />
      </Suspense>
      <Suspense fallback={<div />}>
        <OurOffer />
      </Suspense>
      <Suspense fallback={<div />}>
        <OurServices />
      </Suspense>
      <Suspense fallback={<div />}>
        <OurTeam />
      </Suspense>
      <Suspense fallback={<div />}>
        <PatientGallery />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  )
}


export default HomeScreen

