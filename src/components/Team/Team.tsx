import React from 'react'
import Member from './Member'

const Team = () => {
  return (
    
    <section  className="bg-white w-[100%] overflow-y-auto font">
      <div  className="container px-6 py-10 mx-[10%]">
          <h1  className="text-4xl font-extrabold font-Roboto700 mb-20 text-gray-800 capitalize lg:text-5xl">Meet The Team</h1>
          
          <div className='my-6 mb-24'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">Leads</h1>
            <div  className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 -ml-24">
                <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img='im' linkedin='im'/>
                <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img='im' linkedin='im'/>
            </div>
          </div>

          <div className='my-6'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">Admin</h1>
            <div  className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 -ml-24">
                <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img='im' linkedin='im'/>
                <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img='im' linkedin='im'/>
                <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img='im' linkedin='im'/>
                <Member name="Sashank Shukla" position='Web Developer' facebook='im' github='im' img='im' linkedin='im'/>
            </div>
          </div>
      </div>
</section>
  )
}

export default Team
