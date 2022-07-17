import React from 'react'

const Team = () => {
  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
                <h1  className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">our team</h1>
                
                <p  className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>

                <div  className="flex items-center justify-center">
                    <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
                        <button  className="px-4 py-2 text-sm font-medium text-white capitalize bg-blue-600 md:py-3 rounded-xl md:px-12">design</button>
                        <button  className="px-4 py-2 mx-4 text-sm font-medium text-blue-600 capitalize md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12">development</button>
                        <button  className="px-4 py-2 text-sm font-medium text-blue-600 capitalize md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">marketing</button>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Team
