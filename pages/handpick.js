import { useEffect } from 'react'
import Image from 'next/image'


export default function () {

    useEffect( () => {

        document.addEventListener("scroll", function (e) {

            var all_image_tag = document.getElementById('all_image_tag')
            var x_range = all_image_tag.getBoundingClientRect().x;
            var y_range = all_image_tag.getBoundingClientRect().y
            console.log("y_rangeee", y_range)
            var blue1 = document.getElementById('blue1')
            console.log("blue1",blue1)
            if (y_range > -101) {
                blue1.className = 'ml-602 transition-all  ease-in translate-y-[20px] delay-150 duration-300'
            }
            if (y_range > -123) {
                blue1.className = 'ml-602 transition-all  ease-in translate-y-[20px] delay-150 duration-300'
            }
            if (y_range > -152) {
                blue1.className = 'ml-602 transition-all  ease-in translate-y-[20px] delay-150 duration-300'
            }
          
           
            
            })
            
  
},[])
function first() {
    
    console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>")
    console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>")
    var first1 = document.getElementById('first')
    console.log("first1",first1)
    first1.className = 'transition-all ml-48 ease-in -translate-y-[500px] delay-150 duration-[2000ms]'
   
}


  
    return(
        <div className=" w-full h-screen" id="all_image_tag">
        
        <div className="ml-460 mt-222" id="first">
                        <h1 className='text-sky-600 text-5xl font-extrabold mb-40'>How many slaves</h1>
                        <h1 className='text-sky-600 text-5xl font-extrabold ml-40'>work for you?</h1>
                        <div className="mt-40 ml-80">
                        <Image onClick={first} src="/hand_pick/what.png" width="111px" height="100px"/>
                        <Image src="/hand_pick/separator (1).png" width="38px" height="100px"/>
                        <Image src="/hand_pick/find_out.png" width="86px" height="100px"/>
                        </div>
                    
        </div>
        <div className="">
        <div className=" ml-370">
            <Image src="/hand_pick/as_far_back.png" width="445px" height="68px" />
        </div>
        <div className="ml-602 -mt-24" id="blue1">
            <Image src="/hand_pick/blue 1.png" width="484px" height="887px" />
        </div>
        </div>
        <div className="">
            <Image src="/hand_pick/but_one.png" width="624px" height="76px" />
        </div>
        <div className="">
            <Image src="/hand_pick/emancipation (1).png" width="345px" height="25px" />
        </div>

       
        </div>
    )

}