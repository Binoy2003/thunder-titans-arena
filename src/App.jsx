import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BoardMembers from './components/BoardMembers'
import Sports from './components/Sports'
import Championships from './components/Championships'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-titan-black text-titan-white flex flex-col font-inter selection:bg-titan-orange selection:text-titan-black antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Cinematic Hero Section with Centerpiece Trophy */}
        <Hero />

        {/* About Our Club */}
        <About />

        {/* Executive Board Members (President, VP, General Secretary) */}
        <BoardMembers />

        {/* Our Sports (Cricket, Football, Badminton) */}
        <Sports />

        {/* Championships & Tournaments */}
        <Championships />

        {/* Club Gallery */}
        <Gallery />

        {/* Join Our Club - CTA */}
        <CTA />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Main Footer + Bottom Developer Credit */}
      <Footer />
    </div>
  )
}
