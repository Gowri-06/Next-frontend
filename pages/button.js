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
    function right_move(arug1) {
        console.log("arug1",typeof(arug1))
        var right_direction = document.getElementById(arug1)
        right_direction.className = "  transition ease-in  translate-x-2  duration-200 cursor-pointer" 
        console.log("right_direction",right_direction)
    }
    function right_move_back(arug1) {
        console.log("arug1",typeof(arug1))
        var right_direction = document.getElementById(arug1)
        right_direction.className = "  transition ease-in  translate-x-0  duration-200 cursor-pointer" 
        console.log("right_direction",right_direction)
    }


    return(

         <div>
         <section className="w-full h-screen flex items-center justify-center bg-slate-200">
         <a onMouseOver={()=>{right_move("arrow_icon")}} onMouseOut={()=>{right_move_back("arrow_icon")}} onMouseEnter={(e)=>{callme(e)}} onMouseLeave={(e)=>{callmeout(e)}} className="relative  transform-gpu rounded-md bg-white overflow-hidden  text-black px-5 py-2.5 group cursor-pointer">
         <span id="in" className=' w-0 group-hover:w-full hover:transition-all ease-in duration-300  h-full bg-blue-700 left-0 top-0'></span>
         <span className='relative'>Human Solutions<p id="arrow_icon" className="ml-0"><ArrowRightIcon  className="w-4 h-4 ml-130 -mt-18 overflow-hidden  transition ease-in  hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer"/></p>
         </span>
         </a>
         </section>
         </div>




           
            


    
            
    )
}