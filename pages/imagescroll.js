import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
export default function Imageflow() {

    useEffect(() => {

        document.addEventListener("scroll", function (e) {
            // e.wheel = e.deltaY ? -e.deltaY : e.wheelDelta/40;
            var deltaY
            var w = window.innerWidth
            var h = window.innerHeight
            var var1 = document.getElementById("image1")
            var var2 = document.getElementById("image2")
            var var3 = document.getElementById("image3")

            // console.log(e)

            var all_image_tag = document.getElementById('all_image_tag')
            var x_range = all_image_tag.getBoundingClientRect().x;
            var y_range = all_image_tag.getBoundingClientRect().y
            console.log("y_rangeee", y_range)
            // document.getElementById("image_data2").style.top = (y_range-700)+"px"
            // var2.style.top = y_range+"px"
            // var1.className = "-mt-500 transition-all ease-in translate-y-full delay-1000 duration-300 top-0 scroll-m-0"
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

            // if (document.documentElement.scrollTop > y) {
            //     var1.className = "-mt-500 transition-all ease-in translate-y-[1000px] delay-150 duration-[2000ms] top-0"
            //     var2.className = `px-10 mt-500 transition-all ease-in -translate-y-${image2_translate_p} delay-1000 duration-[2000ms] top-5 overflow:hidden  ml-12`
            //     var3.className = "px-12 transition-all  ease-in -mt-500  translate-y-[1000px] delay-150 duration-[2000ms] top-0 overflow:hidden"
            // }
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
            // else {
            //     var1.className = "-mt-500 transition-all ease-in translate-y-1 delay-150 duration-[2000ms] top-0"
            //     var2.className = "px-10 mt-500 transition-all ease-in -translate-y-1 delay-150 duration-[2000ms] top-5 overflow:hidden  ml-12"
            //     var3.className = "px-12 transition-all  ease-in -mt-500  translate-y-1 delay-150 duration-[2000ms] top-0 overflow:hidden"
            // }


            // if (y > y) {
            //     var1.className = "-mt-500 transition-all ease-in translate-y-0 delay-1000 duration-300 top-0 scroll-m-0"

            // }





            // var2.className = var1.className
            // var edit_position = e.target.getBoundingClientRect();
            // var x_position = edit_position.x
            // console.log("x_position",x_position)
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
            {/* 
            <div className='w-full h-full bg-black -z-40'>

                <h1 className="text-white text-center text-3xl">We are all in.</h1>
                <h1 className="text-white text-center text-3xl">Health,wellness,accountability.+++</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>




            </div> */}


            <div id="divheight" className='w-full h-900 bg-black z-30 sticky shadow-xl pt-0'>

            </div>
            {/* 
            <div className='bg-red-500 w-full h-10 transition-all hover:-translate-y-40 top-5 overflow:hidden'>
                Karajg
            </div> */}
            
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

            {/* <div className=' transition-all hover:-translate-y-40'>
                    <div className='relative'>
                        <Image src="/first_image.png" width="430" height="827" />
                    </div>
                    <div className="absolute ml-36  -mt-807">
                        <Image className='rounded-[12px]' src="/third_image.jpg" width="362" height="775" />
                    </div>
                </div>


                <div className='transition-all hover:translate-y-40'>
                    <div className=''>
                        <Image src="/first_image.png" width="430" height="827" />
                    </div>
                    <div className=" ml-36  -mt-807">
                        <Image className='rounded-[12px]' src="/fourth_image.jpg" width="362" height="775" />
                    </div>
                </div> 
            </div><br /> */}
            <div className="-mt-700 sticky w-full  h-900 bg-black">

            </div>
































































            {/* <div  className='absolute'>
            <div className='relative'>
            <Image   src="/first_image.png"    width="430" height="827"/>
            </div>
            <div className='absolute ml-400'>
                <Image className='rounded-[12px]' src="/third_image.jpg" width="362" height="775"/>
            </div>
            </div> */}

            {/* <div className=''>
            <div className=''>
            <Image className="sticky" src="/first_image.png"    width="430" height="827"/>
            </div>
            <div className=''>
                <Image src="/fourth_image.jpg" width="375" height="1020"/>
            </div>
            </div> */}
            {/* </div> */}

            {/* <div class="container mx-auto my-12 p-12 border bg-gray-100 h-40 overflow-auto">
 <section class="mb-4 bg-gray-200">
    <div class="p-2 bg-black text-white sticky top-0 uppercase">Sticky Heading 1</div>
    <div class="p-4">
      stick content 1 stick content 1 stick content 1 stick content 1 stick content 1
      stick content 1 stick content 1 stick content 1 stick content 1 stick content 1
      stick content 1 stick content 1 stick content 1 stick content 1 stick content 1
    </div>
  </section>
  <section class="mb-4 bg-gray-200">
    <div class="p-2 bg-black text-white sticky top-0 uppercase">Sticky Heading 2</div>
    <div class="p-4">
      stick content 2 stick content 2 stick content 2 stick content 2 stick content 2
      stick content 2 stick content 2 stick content 2 stick content 2 stick content 2
      stick content 2 stick content 2 stick content 2 stick content 2 stick content 2
    </div>
  </section>
  <section class="mb-4 bg-gray-200">
    <div class="p-2 bg-black text-white sticky top-0 uppercase">Sticky Heading 3</div>
    <div class="p-4">
      stick content 3 stick content 3 stick content 3 stick content 3 stick content 3
      stick content 3 stick content 3 stick content 3 stick content 3 stick content 3
      stick content 3 stick content 3 stick content 3 stick content 3 stick content 3
    </div>
  </section>
</div> */}








        </div>
    )
}


