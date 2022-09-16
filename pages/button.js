import { BeakerIcon, DesktopComputerIcon, ChipIcon, CogIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
export default function buttonEffects() {
  
   
    function callme(e){
        console.log("LLLLLLLLLLL",e.target)
        // var tag_new = e.target
        // tag_new.className = 'w-fit h-fit p-10 transition ease-in-out delay-150 bg-blue-500 -translate-y-1 scale-110 bg-indigo-500 duration-[2000ms] left-0 top-0'
        // var tag_new2 = e.target 
        // tag_new2.className = 'absolute w-0 group-hover:w-full transition-all ease-in duration-300 h-full bg-red-700 left-0 top-0'
        var id_span1 = document.getElementById('in')
        console.log("id_span1",id_span1)
        id_span1.className = 'absolute w-0 group-hover:w-full hover:transition-all ease-in duration-300  h-full bg-blue-700 left-0 top-0'
        
        

        // console.log("id_span1",e.target)
    }
    function callmeout(e){
        console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>",e)
        console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>",e.target)
        
        var id_span2 = document.getElementById('in')
        console.log("id_span2",id_span2)
        id_span2.className = 'absolute w-0 group-hover:w-full transition-all ease-in duration-300 h-full bg-blue-700 right-0 bottom-0'
        
    }


    return(

         <div>
         <section className="w-full h-screen flex items-center justify-center bg-slate-200">
         <a onMouseEnter={(e)=>{callme(e)}} onMouseLeave={(e)=>{callmeout(e)}} className="relative  transform-gpu rounded-md bg-white overflow-hidden  text-black px-5 py-2.5 group cursor-pointer">
         <span id="in" className=' w-0 group-hover:w-full hover:transition-all ease-in duration-300  h-full bg-blue-700 left-0 top-0'></span>
         <span className='relative'>Human Solutions<span id="arrow_move" className="ml-0"><ArrowRightIcon  className="w-4 h-4 ml-130 -mt-18 overflow-hidden  transition ease-in  hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer"/></span>
         </span>
         </a>
         </section>
         </div>




           
            


    
            
    )
}