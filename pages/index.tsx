import type { NextPage } from 'next'
import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'


const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>  our team </title>

      </Head>
        {/* //main content */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
        <h1 className="text-4xl font-bold text-center ">
          our team is working on it : </h1>
      {/* space between the cards */}
        <div className="h-10"></div>  
                                                                     {/* Matan Sultan  Card */}
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://matansultan-about.vercel.app/assets/img/about.jpg" alt="Matan Face"></img>
      <div className="text-center space-y-2 sm:text-left">
       <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                                 Matan Sultan  </p>
                                              
        <p className="text-gray-500 font-medium">
                                Software Engineer </p>
     {/* Message button */}
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>



</div>
      {/* space between the cards */}
<div className="h-10"></div>  
                                                                        {/* Lidor talker Card */}
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/256138447_4852592344753208_6376180404533590262_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N-sTyRItWqkAX-QKS2S&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_y-gORwS-naQ3M_wEpZKH65yLCCoXmni7yZ91EwsYXOg&oe=6342C36C" alt="Talker Face"></img>
     <div className="text-center space-y-2 sm:text-left">
             <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
                       Lidor talker</p>
     
      <p className="text-gray-500 font-medium">
                    Product Engineer  </p>
    
    </div>

    <button className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Message</button>
  </div>
</div>
     {/* space between the cards */}
     <div className="h-10"></div>  
                                                             {/* dor peer Card */}
     <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/256138447_4852592344753208_6376180404533590262_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N-sTyRItWqkAX-QKS2S&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_y-gORwS-naQ3M_wEpZKH65yLCCoXmni7yZ91EwsYXOg&oe=6342C36C" alt="Talker Face"></img>
     <div className="text-center space-y-2 sm:text-left">
             <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
                       Dor Peer</p>
     
      <p className="text-gray-500 font-small">
                    QA & Software Engineer  </p>
    
    </div>

    <button className="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Message</button>
  </div>
  </div>


  {/* space between the cards */}
  <div className="h-10"></div>  
     <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/256138447_4852592344753208_6376180404533590262_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N-sTyRItWqkAX-QKS2S&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_y-gORwS-naQ3M_wEpZKH65yLCCoXmni7yZ91EwsYXOg&oe=6342C36C" alt="Talker Face"></img>
     <div className="text-center space-y-2 sm:text-left">
             <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
                     Benjamin choen </p>
     
      <p className="text-gray-500 font-small a" >
                    Software Engineer & Design  </p>
    
    </div>

    <button className="px-4 py-1 text-sm text-yellow-600 font-semibold rounded-full border border-yellow-200 hover:text-white hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">Message</button>
  </div>
  </div>

</div>
 

</div>





  )
}

export default Home
