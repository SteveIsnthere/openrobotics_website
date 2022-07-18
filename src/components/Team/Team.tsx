import React from 'react'
import Member from './Member'

const Team = () => {
  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
          <h1  className="text-4xl mx-[5%] font-extrabold font-Roboto700 mb-20 text-gray-800 capitalize lg:text-5xl">Meet The Team</h1>
          
          <div className='my-12 mx-[5%] mb-24'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">Leads</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                <Member name="Matthew Poon" position='Captain' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
                <Member name="Fouad Elgamal" position='Captain' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">Admin</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Inzaghi Moniaga" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Ben Lu" position='Graphic Designer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Kritika Joshi" position='Integration Lead' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Niki Manesh" position='Integration Lead' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
          </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">PianoBot</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Shawna Naderi" position='PianoBot Lead' facebook='im' github='im' img="assets/img/pianobot/shawna.png" linkedin='im'/>
            <Member name="Veronica Nguyen" position='PianoBot Lead' facebook='im' github='im' img="assets/img/pianobot/veronica.png" linkedin='im'/>
            <Member name="Evan Liu" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/evan.png" linkedin='im'/>
            <Member name="Fernando Ng" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/fernando.png" linkedin='im'/>
            <Member name="Karthik Ravichandran" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/karthik.png" linkedin='im'/>
            <Member name="Prayus Shrestha" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/prayus.png" linkedin='im'/>
            <Member name="Ryan Acapulco" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/ryan.png" linkedin='im'/>
            <Member name="Scott Beaulieu" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/scott.png" linkedin='im'/>
            <Member name="Yiting Wu" position='PianoBot Member' facebook='im' github='im' img="assets/img/pianobot/yiting.png" linkedin='im'/>
          </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">ArtBot</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Sashank Shukla" position='ArtBot Lead' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='ArtBot Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='ArtBot Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='ArtBot Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
          </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup Arm</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
          </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup DriveTrain</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
          </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup Gripper</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Matthew Sam" position='Gripper Lead' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Husein Alatas" position='Gripper Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Akhil Prabhu" position='Gripper Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Chaewoon Song" position='Gripper Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Jenica Sy" position='Gripper Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
          </div>
          </div>

          <div className='my-12 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup Software</h1>
            <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Francisco Farinha" position='Software Lead' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Andrew Xie" position='Software Lead' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Aayush Behl" position='Software Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Ashli Forbes" position='Software Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Damien Fung" position='Software Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
            <Member name="Tawsif Hasan" position='Software Member' facebook='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" linkedin='im'/>
          </div>
          </div>
      </div>
</section>
  )
}

export default Team
