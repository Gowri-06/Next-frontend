import { BeakerIcon, DesktopComputerIcon, ChipIcon, CogIcon, ArrowRightIcon } from '@heroicons/react/solid'
// import { BeakerIcon } from '@heroicons/react/24/solid' 
import { AcademicCapIcon } from '@heroicons/react/solid';
// import {BuildingOfficeIcon} from '@heroicons/react/solid'


export default function Transition() {





    return (
        <div className='bg-blue-opt'>
            <div className="bg-blue-opt w-full    h-full border rounded-b-3xl h-screen">                   
               
       
    


                <div className="mb-24 font-semibold mb-12">
                    <p className='text-center text-3xl text-white font-bold'>Data Ingestion, Transformation, and Management<br /> for Engineers</p>
                </div>

                <div className="flex ml-36 ml-6">
                    <div className="w-300 max-h-full mt-0 mr-12">
                    <div className="div relative inline-flex items-center justify-start overflow-hidden transition-all bg-blue rounded-br-3xl hover:bg-blue-opt group">
                        {/* btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group */}
                        <span className="w-300 h-0 rounded-br-3xl bg-blue-thick absolute top-0 left-0  ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>  
                        <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        < DesktopComputerIcon className="ml-110 w-300 h-12 w-12 text-white   mb-3 mt-2"/>
                        <p className="ml-3  text-lg mb-6 font-bold text-white text-center">Largest Connector Library</p> 
                        <p className="mb-12 w-288 mt-18 text-lg text-white font-normal text-center">Ever-growing library of 330+</p>
                        <p className="-mt-12 mb-12 w-288 text-lg text-white font-normal text-center">connectors and data tools<br/> that can be up</p>
                       
                        </span>
                    </div>
                    </div>

                    <div className="w-300  max-h-fit mr-12 -mt-8">
                    <div className="div relative inline-flex items-center justify-start overflow-hidden transition-all bg-blue rounded-br-3xl hover:bg-blue-opt group">

                        <span className="w-300 h-0 rounded-br-3xl bg-blue-thick absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-blue z-10">
                        <ChipIcon className="h-12 w-12 text-white ml-114 mb-3 mt-8" />
                        <p className="text-lg mb-6 w-288 font-bold text-white text-center">Complete Transformation</p>
                        <p  className="text-lg w-288 font-bold text-white text-center -mt-6">Control</p>
                        <p className="text-center  w-288 mb-12 text-lg text-white font-normal">Complete control over<br/> how data lands in  your <br/> warehouse and how it is transformed after.</p>
                        </span>
                    </div>
                    </div>
                    
                    <div className="max-w-300  max-h-fit mr-12">
                    <div className="div relative inline-flex items-center justify-start overflow-hidden transition-all bg-blue rounded-br-3xl hover:bg-blue-opt group">
                        <span className="w-300 h-0 rounded-br-3xl bg-blue-thick absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-blue z-10">
                        <AcademicCapIcon className="ml-114 h-12 w-12 text-white  mb-3" />
                        <p className="text-center text-lg mb-6 font-bold text-white">Best Dev Experience with SDK</p>
                        <p className="w-288 mb-12 text-center text-lg text-white font-normal">Dozens of connectors built with SDK for Singer and a robust community.</p>
                        </span>
                    </div>
                    </div>

                    <div className="max-w-300  max-h-fit mr-12">
                    <div className="div relative inline-flex items-center justify-start overflow-hidden transition-all bg-blue rounded-br-3xl hover:bg-blue-opt group">
                        <span className="w-300 h-0 rounded-br-3xl bg-blue-thick absolute top-0 -left-1 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-blue z-10">
                        <CogIcon  className="ml-114 h-12 w-12 text-white  mb-3" />
                        <p className="text-center ml-1 text-lg mb-6 font-bold text-white">DataOps Out of the Box</p>
                        <p className="w-288 mb-12 text-center text-lg text-white font-normal">Version-controlled configuration and software engineering best practices built in.</p>
                        </span>
                    </div>
                    </div>

                </div>
                        <div className='mt-12 -ml-8'>
                        <button className="ml-700 bg-pink-600  text-white font-bold py-4 px-20 rounded-full static">GET STARTED </button><ArrowRightIcon className="h-7 w-5 ml-805 -mt-10 text-white hover:text-white rounded-full  transition ease-in-out delay-50 hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer"/>
                        {/* <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"><ArrowRightIcon className="h-5 w-5 text-white"/>GET STARTED</button> */}
                        </div>
                
                </div>

            






            {/* <div className='w-full h-40 mx-auto m-auto py-10'>

              
               <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">  
                <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>  
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">    hover effect 2  </span>
                </button>
                <h2 className='h-14 w-40 bg-img1'>KKKKKKKKKKKKKKKK</h2> */}


            {/* </div> */}
            
        </div>

   )
}