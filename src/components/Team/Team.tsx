import React from 'react'
import Member from './Member'

const Team = () => {
  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
          <h1  className="text-4xl mx-[5%] font-extrabold font-Roboto700 mb-20 text-gray-800 capitalize lg:text-5xl">Meet The Team</h1>
          
          <div className='my-16 mx-[5%] mb-24'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">Leads</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                <Member name="Matthew Poon" position='Captain' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  email='im'/>
                <Member name="Fouad Elgamal" position='Captain' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize md:-mb-4 lg:text-4xl">Admin</h1>
            <div className="grid grid-cols-1 gap-8 mt-12 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Sashank Shukla" position='Web Developer' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Inzaghi Moniaga" position='Web Developer' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Ben Lu" position='Graphic Designer' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Kritika Joshi" position='Integration Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Niki Manesh" position='Mentor' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Briam Zimmerman" position='Finance Lead/Treasurer' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Nafae Saiyed" position='Finance Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Taymur Pasha" position='Finance Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Jay Hou" position='Finance Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Tian Hao Xu" position='Safety Officer' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">PianoBot</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Shawna Naderi" position='PianoBot Lead' linkedin='im' github='im' img="assets/img/pianobot/shawna.png" email='im'/>
            <Member name="Veronica Nguyen" position='PianoBot Lead' linkedin='im' github='im' img="assets/img/pianobot/veronica.png" email='im'/>
            <Member name="Evan Liu" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/evan.png" email='im'/>
            <Member name="Fernando Ng" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/fernando.png" email='im'/>
            <Member name="Karthik Ravichandran" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/karthik.png" email='im'/>
            <Member name="Prayus Shrestha" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/prayus.png" email='im'/>
            <Member name="Ryan Acapulco" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/ryan.png" email='im'/>
            <Member name="Scott Beaulieu" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/scott.png" email='im'/>
            <Member name="Yiting Wu" position='PianoBot Member' linkedin='im' github='im' img="assets/img/pianobot/yiting.png" email='im'/>
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">ArtBot</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Aiden Smith" position='ArtBot Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Navneeth Devadas" position='ArtBot Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Felice Jie Chen" position='ArtBot Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Benji Li" position='ArtBot Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup Arm</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Joey Gaffney" position='Arm Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Arwin Patrick" position='Arm Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Jonas Chianu" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Hazel Chongoti" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="David Kim" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Debby Lin" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Cailin Ringstorm" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Iris Xu" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Ryan Yeung" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Grace Zhang" position='Arm Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup DriveTrain</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Kuok Kun(AO) Chio" position='RoboCup Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Yang Su" position='RoboCup Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Kamran Alam" position='RoboCup Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Wilson Chen" position='RoboCup Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Vishal Desh" position='RoboCup Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Yoshi Inomata" position='RoboCup Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Eros Rojas" position='RoboCup Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Tian Hao Xu" position='RoboCup Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup Gripper</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Matthew Sam" position='Gripper Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Husein Alatas" position='Gripper Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Akhil Prabhu" position='Gripper Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Chaewoon Song" position='Gripper Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Jenica Sy" position='Gripper Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">RoboCup Software</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Member name="Francisco Farinha" position='Software Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Andrew Xie" position='Software Lead' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Aayush Behl" position='Software Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Ashli Forbes" position='Software Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Damien Fung" position='Software Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
            <Member name="Tawsif Hasan" position='Software Member' linkedin='im' github='im' img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" email='im'/>
          </div>
          </div>
      </div>
</section>
  )
}

export default Team
