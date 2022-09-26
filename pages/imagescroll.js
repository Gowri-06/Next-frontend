import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
export default function Imageflow() {

    useEffect(() => {

        document.addEventListener("scroll", function (e) {
           
            var deltaY
            var w = window.innerWidth
            var h = window.innerHeight
            var var1 = document.getElementById("image1")
            var var2 = document.getElementById("image2")
            var var3 = document.getElementById("image3")

         

            var all_image_tag = document.getElementById('all_image_tag')
            var x_range = all_image_tag.getBoundingClientRect().x;
            var y_range = all_image_tag.getBoundingClientRect().y
            console.log("y_rangeee", y_range)
            var divHeight = document.getElementById("divheight")
            var y = divHeight.scrollHeight;
            var x = divHeight.scrollWidth;

            var image2_translate_p;
            if (y_range > 350) {
                image2_translate_p = "[1000px]"
            }
            else {
                image2_translate_p = "1/2"
            }

        
            if (y_range > 430) {

                var1.className = "-mt-500 transition-all ease-in -translate-y-[340px] delay-150 duration-[2000ms] top-0 ml-12"
                var2.className = "mt-500 transition-all ease-in  translate-y-[340px] delay-150 duration-[2000ms] top-0 ml-12"
                var3.className = "-mt-500 transition-all ease-in -translate-y-[340px] delay-150 duration-[2000ms] top-0 ml-12"
            }
              
            if (y_range < 430 ) {
                var1.className = "-mt-500 transition-all ease-in translate-y-[100px] delay-150 duration-[2000ms] top-0 ml-12"
                var2.className = " mt-500 transition-all ease-in -translate-y-[100px] delay-150 duration-[2000ms] top-5   ml-12"
                var3.className = "-mt-500 transition-all ease-in translate-y-[100px] delay-150 duration-[2000ms] top-0 ml-12"
            }
           
            if (y_range < 275) {
                var1.className = "-mt-500 transition-all ease-in translate-y-[200px] delay-150 duration-[2000ms] top-0 ml-12"
                var2.className = " mt-500 transition-all ease-in -translate-y-[200px] delay-150 duration-[2000ms] top-5  ml-12"
                var3.className = "-mt-500 transition-all ease-in translate-y-[200px] delay-150 duration-[2000ms] top-0 ml-12"


            }
            if (y_range < 90) {
                var1.className = "-mt-500 transition-all ease-in translate-y-[400px] delay-150 duration-[2000ms] top-0 ml-12"
                var2.className = " mt-500 transition-all ease-in -translate-y-[400px] delay-150 duration-[2000ms] top-5 ml-12"
                var3.className = "-mt-500 transition-all ease-in translate-y-[400px] delay-150 duration-[2000ms] top-0 ml-12"


            }
            if (y_range < 54) {
                var1.className = "-mt-500 transition-all ease-in translate-y-[900px] delay-150 duration-[2000ms] top-0 ml-12"
                var2.className = " mt-500 transition-all ease-in -translate-y-[900px] delay-150 duration-[2000ms] top-5 overflow:hidden  ml-12"
                var3.className = "-mt-500 transition-all ease-in translate-y-[900px] delay-150 duration-[2000ms] top-0 ml-12"

            }
            if (y_range < -120) {
                var1.className = "-mt-500 transition-all ease-in translate-y-[1250px] delay-150 duration-[2000ms] top-0 ml-12"
                var2.className = " mt-500 transition-all ease-in -translate-y-[1250px] delay-150 duration-[2000ms] top-5 overflow:hidden  ml-12"
                var3.className = "-mt-500 transition-all ease-in translate-y-[1250px] delay-150 duration-[2000ms] top-0 ml-12"
            }
        
        })
    }, [])
    return (
        <div  className="bg-black">
            <div clasname="fixed z-50 ">
            <div className='w-full h-50'>
            </div>
            <div className='-mt-10 ml-6'>
            <Image className="rounded-full" src="/Stryds-Logo-Gradient.svg" alt="Stryds-Logo-Gradient" width="80" height="80" />
            <p className="text-white text-medium ml-10 -mt-6"></p>
            </div> 
            </div>
          

            <div id="divheight" className='w-full h-900 bg-black z-30 sticky shadow-xl pt-0'>

            </div>
          
            
            <div className="bg-grey -ml-14">
            <div className='flex ' id='all_image_tag'>
                <div id="image1" className='-mt-612 hover:transition-all ease-in  top-0 scroll-m-0'>
                    <div className='relative pt-2'>
                        <div className="ml-12">
                        <Image className="rounded-[36px]" alt="second_image" src="/second_image.jpg" width="340px" height="830px" />
                        </div>

                        <div className="absolute top-0 w-480 ml-4">
                            <Image className='' src="/first_image.png" alt="first_image" width="400px" height="840px" />
                        </div>
                    </div>
                </div>


                <div id="image2" className='ml-12 mt-500 transition-all  top-5 overflow:hidden'>
                    <div id='image_data2' className='relative pt-2'>
                        <div className="ml-36 -ml-2">
                        <Image className="rounded-[36px]" alt="third_image" src="/third_image.jpg" width="350px" height="830px"/>
                        </div>

                        <div className="absolute top-0 w-480 -ml-6">
                            <Image className='' src="/first_image.png" alt="first_image" width="400px" height="840px"/>
                        </div>
                    </div>
                </div>


                <div id="image3" className='ml-12  transition-all -mt-612  top-0 overflow:hidden'>
                    <div className='relative  pt-2'>
                        <div className="ml-12">
                        <Image className="rounded-[36px]" src="/fourth_image.jpg" alt="fourth_image" width="340px" height="830px" />
                        </div>

                        <div className="absolute top-0 w-480 ml-4">
                            <Image className='' src="/first_image.png" alt="first_image" width="400px" height="840px" />
                        </div>
                    </div>
                </div>


            </div>
            </div>

         
            <div className="-mt-700 sticky w-full  h-900 bg-black">

            </div>






































































        </div>
    )
}


