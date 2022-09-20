import { useEffect, useState } from 'react'
import Image from 'next/image'


export default function () {

    const [showcontent, setshow_content] = useState(false)
           
    useEffect(() => {
        if (showcontent === true) {
            // document.getElementById('show_content_data').className = 'block'
            second_fun()
        }
    }, [showcontent])
    useEffect(() => {
        var but_one = document.getElementById("but_one")
        console.log("but_one", but_one)
        // but_one.className = "hidden"
        var blue1 = document.getElementById("blue1")
        console.log("blue1",blue1)
        // but_one.className = "hidden"
        var emancipation = document.getElementById("emancipation (1)")
        console.log("but_one", emancipation)
        // emancipation.className = "hidden"
        var green = document.getElementById("green 11")
        console.log("but_one", green)
        var true_img = document.getElementById("true_img")
        console.log("true",true_img)
        // green.className = "hidden"
        document.addEventListener("scroll", function (e) {

            var all_image_tag = document.getElementById('all_image_tag')
            var x_range = all_image_tag.getBoundingClientRect().x;
            var y_range = all_image_tag.getBoundingClientRect().y;
            console.log("y_rangeee", y_range)
            var blue1 = document.getElementById('blue1')
            console.log("blue1", blue1)
            var imggreen = document.getElementById('imggreen')
            console.log("imggreen", imggreen)
            var three_hands = document.getElementById('three_hands')
            console.log("three_hands", three_hands)
            var grey = document.getElementById('grey 1')
            console.log("grey", grey)
            var orange_hands = document.getElementById('orange_hands')
            console.log("orange_hands",orange_hands)
            var scissor_cut = document.getElementById('scissor_cut')
            console.log("scissor_cut",scissor_cut)
            var chain = document.getElementById('chain')
            console.log("chain",chain)
            var pointing_yellow = document.getElementById('pointing_yellow')
            console.log("pointing_yellow",pointing_yellow)
            var orange_right_2 = document.getElementById('orange_right_2')
            console.log("orange_right_2",orange_right_2)
            var green_palm = document.getElementById('green_palm')
            console.log("green_palm",green_palm)

            if (y_range > -101) {
                // blue1.className = 'ml-602 transition-all  ease-in translate-y-[200px] delay-150 duration-300'
                but_one.className = "ml-370 -mt-355 transition-all  ease-in  delay-500 duration-[2000ms] opacity-100"
                emancipation.className = "ml-370 mt-43 transition-all  ease-in  delay-500 duration-[2000ms] opacity-100"
                blue1.className = 'absolute left-[221px] top-[30px]   transition-all ease-in  translate-y-[100px] delay-1000 duration-[300ms] opacity-0'
                green.className = "relative left-[1600px] transition-all -translate-x-[660px]  ease-in   delay-150 duration-[2000ms]"

            }
            if (y_range > -500) {
                //  blue1.className = 'opacity-0  absolute left-[221px] -top-[30px] z-30 transition-all ease-in  translate-y-[200px] delay-1000 duration-[300ms]'
                // imggreen.className = "relative left-[1600px] transition-all -translate-x-[660px]  ease-in   delay-150 duration-[2000ms] opacity-1"
            }
            // if (y_range > -300) {
            //      blue1.className = 'absolute left-[221px] -top-[30px] z-30 opacity-0 transition-all ease-in  translate-y-[200px] delay-1000 duration-[300ms]'
            // }
            // if (y_range > -450) {
            //     green.className = 'relative  left-[1600px] top-[70px] transition-all ease-in -translate-x-[655px]  delay-1000 duration-[400ms]'
            // }
            if (y_range > -695) {
                grey.className = 'relative  -left-[545px] -top-[100px]  transition-all ease-in  -translate-y-[10px]  translate-x-[920px]  delay-1000 duration-[1500ms]'
            }
            if (y_range > -795) {
                three_hands.className = 'relative left-[630px] -top-[75px] transition-all ease-in  -translate-y-[10px] delay-1000 duration-[1500ms]'
            }
            if (y_range > -900) {
                orange_hands.className = 'relative left-[368px] top-[30px]  transition-all ease-in  -translate-y-[50px] delay-1000 duration-[1500ms]'
            }
            if (y_range > -1000) {
                scissor_cut.className = 'absolute -left-[800px] transition-all ease-in  translate-x-full delay-1000 duration-[1500ms]'
            }
            if (y_range > -1110) {
                true_img.className = "ml-370 mt-20 transition-all ease-in"
            }
            if (y_range > -1240) {
                chain.className = "relative left-[1400px] top-[100px] -translate-x-full delay-1000 duration-[2000ms]"
            }
            if (y_range > -1350) {
                pointing_yellow.className = "relative top-[300px] left-[1800px] -translate-x-[850px] delay-1000 duration-[2000ms]"
            }
            if (y_range > -1350) {
                pointing_yellow.className = "relative top-[300px] left-[1800px] -translate-x-[850px] delay-1000 duration-[2000ms]"
            }
            if (y_range > -1450) {
                orange_right_2.className = "relative top-[50px] left-[1800px] -translate-x-[1390px] delay-1000 duration-[2000ms]"
            }
            if (y_range > -1650) {
                green_palm.className = "relative left-[1800px] mt-195 -translate-x-[1420px] delay-1000 duration-[2000ms]"
            }
            // if (y_range > -450) {
            //     grey.className = 'relative  left-[1600px] top-[70px] transition-all ease-in -translate-x-[655px]  delay-1000 duration-[2000ms]'
            // }
            // if (y_range > -500) {
            //     green.className = 'relative  left-[1600px] top-[70px] transition-all ease-in translate-x-[655px]  delay-1000 duration-[2000ms]'
            // }


            // if (y_range > -108) {
            //      document.getElementById('blue1').className = "hidden" 
            // }




            // if (y_range > -110) {
            //     blue1.className = 'ml-602 transition-all  ease-in translate-y-[0px] delay-150 duration-300'
            // but_one.className = "ml-370 transition-all  ease-in translate-y-[30px] delay-150 duration-[2000ms]" + " opacity-50"
            // }
            // if (y_range > -115) {
            // blue1.className = 'ml-602 transition-all  ease-in translate-y-[0px] delay-150 duration-300'
            // but_one.className = "ml-370 transition-all  ease-in translate-y-[30px] delay-150 duration-[2000ms]" + " opacity-100"
            // }

            // if (y_range > -278) {
            //     blue1.className = 'ml-602 transition-all  ease-in translate-y-[20px] delay-150 duration-300'
            // }


        })


    }, [])
    function first() {
        // console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>")
        // console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>")
        var show_content_data = document.getElementById('show_content_data')
       
        var first_transtale = document.getElementById('first')
        // if(show_content_data) {
            document.getElementById('combined_images1').className="relative -left-[80px] top-[30px] bottom-[3px]  border border-black w-fit  mx-auto transition-all -translate-y-[400px] ease-in delay-1000 duration-[5000ms]"

            // show_content_data.className='block'
        // }
        console.log("first1", first_transtale.className="relative bottom-[500px] w-fit h-fit my-auto py-44 mx-auto px-2 transition-all ease-in delay-150 duration-[1000ms] ")
        
        setshow_content(true)
        // first1.className = 'w-fit h-fit my-auto py-44 mx-auto transition-all  ease-in -translate-y-[500px] delay-150 duration-[2000ms]'

    }

    function second_fun() {
        var first1 = document.getElementById('first')
        console.log("first1", first1)

        // first1.className = 'w-fit h-fit my-auto py-44 mx-auto transition-all  ease-in -translate-y-[500px] delay-150 duration-[1000ms]'
        // combined_images1.className = 'relative w-fit  mx-auto relative bottom-[525px] transition-all ease-in-out  delay-700 duration-[2000ms]'
        // as_far_back.className = 'ml-370 transition-all  ease-in  delay-150 duration-[3000ms]'

    }


    return (
       
        <div className="w-full" id="all_image_tag" >

            <div className="relative bottom-0 w-fit h-fit my-auto py-44 mx-auto px-2 transition-all ease-in delay-150 duration-[20000ms] " id="first">
                <h1 className='text-sky-600 text-5xl font-extrabold mb-40'>How many slaves</h1>
                <h1 className='text-sky-600 text-5xl font-extrabold ml-40'>work for you?</h1>
                <div className=" w-fit mx-auto py-3 " id='first-transtale'>
                    <Image onClick={first}   src="/hand_pick/what.png" width="111px" height="100px" />
                    <Image src="/hand_pick/separator (1).png" width="38px" height="100px" />
                    <Image src="/hand_pick/find_out.png" width="86px" height="100px" />
                </div>

            </div>
            <div className='h-full' id='show_content_data'>
            <div className='w-full pt-40'>
                <div className=" relative bottom-[3px] border border-black w-fit  mx-auto transition-all ease-in delay-150 duration-[20000ms]" id="combined_images1">
                    <Image src="/hand_pick/as_far_back.png" width="445px" height="68px" />

                    <div className="absolute left-[221px] top-[30px]" id="blue1">
                        <Image src="/hand_pick/blue 1.png" width="384px" height="587px" />
                    </div>
                </div>
            </div>


              

                    <div className="ml-370 -mt-355 opacity-1 hidden" id="but_one">
                        <Image src="/hand_pick/but_one.png" width="624px" height="76px" />
                    </div>
                    <div className="ml-370 mt-43 opacity-1 hidden" id="emancipation (1)">
                        <Image src="/hand_pick/emancipation (1).png" width="345px" height="25px" />
                    </div>

                    <div className="relative  left-[1600px] top-[70px]" id="green 11">
                        <Image id="imggreen" src="/hand_pick/green 11.png" width="822px" height="392px" />

                        <div className="absolute -left-[570px] top-[52px]" id="">
                            <Image src="/hand_pick/thats_what.png" width="596px" height="105px" />
                        </div>
                    </div>

                    <div className="relative  -left-[545px] top-[30px] " id="grey 1">
                        <Image src="/hand_pick/but_buying.png" width="531px" height="25px" />

                        <div className="absolute -left-[353px] top-[0px]" id="">
                            <Image id="" src="/hand_pick/grey 1.png" width="507px" height="521px" />
                        </div>

                    </div>

                    <div className="relative left-[730px] top-[120px]" id="three_hands">
                        <Image src="/hand_pick/if_thats.png" width="459px" height="68px"/>

                        <div className="absolute " id="">
                            <Image id="" src="/hand_pick/small_blue 1.png" width="147px" height="521px" />
                            <Image id="" src="/hand_pick/small_magenta 1.png" width="95px" height="521px" />
                            <Image id="" src="/hand_pick/small_yellow 1.png" width="134px" height="521px" />
                        </div>
                    </div>

                    <div className="relative left-[368px] top-[600px]" id="orange_hands">
                        <Image src="/hand_pick/actually.png" width="555px" height="47px" />

                        <div className="absolute -left-[490px] -top-[60px]" id="">
                            <Image id="" src="/hand_pick/orange_left 2.png" width="507px" height="688px"/>
                        </div>
                        <div className="absolute left-[540px] -top-[60px] " id="">
                            <Image id="" src="/hand_pick/orange_right.png" width="507px" height="688px"/>
                        </div>

                    </div>
                   
                    <div className="relative left-[370px]" id="">
                        <Image src="/hand_pick/but_theyre.png" width="348px" height="111px" />
                   
                    <div className="absolute -left-[800px]" id="scissor_cut">
                        <Image id="" src="/hand_pick/scissors.png" width="3000px" height="170px"/>
                    </div>
                    </div>

                    <div className="ml-370 mt-20 hidden" id="true_img">
                    <Image src="/hand_pick/true.png" width="624px" height="100px" />
                    </div>


                    <div className="ml-[527px] mt-[70px]">
                    <Image src="/hand_pick/thats.png" width="342px" height="111px"/>
                    </div>

                    <div className="relative left-[370px] -top-[180px]" id="">
                    <div className="absolute" id="">
                    <Image src="/hand_pick/stone_1.png" width="545px" height="220px" />
                    </div>

                    <div className="absolute">
                    <Image src="/hand_pick/stone_2.png" width="545px" height="220px" />
                    </div>

                    <div className="absolute">
                    <Image src="/hand_pick/stone_3.png" width="545px" height="220px" />
                    </div>

                    <div className="absolute">
                    <Image src="/hand_pick/stone_4.png" width="545px" height="220px" />
                    </div>

                    <div className="absolute">
                    <Image src="/hand_pick/stone_5.png" width="545px" height="220px" />
                    </div>
                    </div>

                    <div className="relative left-[1900px] top-[100px]" id="chain">
                    <div className="absolute left-[20px] top-[32px]">
                    <Image src="/hand_pick/its_the.png" width="618px" height="47px" />
                    </div>
                    <div className="absolute -left-[1900px]">
                    <Image src="/hand_pick/chain.png" width="1939px" height="117px" />
                    </div>
                    </div>

                    <div className='relative top-[300px] left-[1800px]' id="pointing_yellow">
                        <div className="absolute -left-[300px]">
                        <Image src="/hand_pick/so_much.png" width="234px" height="20px" />
                        </div>
                        <div className="absolute">
                        <Image src="/hand_pick/pointing_yellow.png" width="1000px" height="196px" />
                        </div>
                    </div>
                    
                    <div className="ml-370 mt-450">
                    <Image src="/hand_pick/thats_why.png" width="555px" height="47px" />
                    </div>

                    <div className='relative top-[50px] left-[1800px] w-full' id="orange_right_2">
                        <div className="absolute -left-[42px] top-[17px]">
                        <Image src="/hand_pick/so_you_will.png" width="496px" height="68px" />
                        </div>
                        <div className="absolute -top-[30px] left-[440px]">
                        <Image src="/hand_pick/orange_right_2.png" width="357px" height="663px" />
                        </div>
                    </div>

                    <div className='relative left-[1800px] mt-195' id="green_palm">
                    <div className="absolute">
                    <Image src="/hand_pick/take.png" width="613px" height="25px"/>
                    </div>
                    <div className="absolute left-[200px] top-[0px]">
                    <Image src="/hand_pick/green_palm.png" width="513px" height="688px"/>
                    </div>
                    </div>

                    <div className="relative">
                    <div className='absolute left-[370px] top-[70px]'>
                    <Image src="/hand_pick/to_earn.png" width="606px" height="47px"/>
                    </div>
                    </div>


                    <div className="relative left-[495px] top-[170px]">
                    <div className='absolute '>
                    <Image src="/hand_pick/together.png" width="391px" height="111px"/>
                    </div>
                    <div className='absolute -left-[910px]'>
                    <Image src="/hand_pick/yellow (1).png" width="918px" height="194px"/>
                    </div>
                    </div>
                        

 






                    </div>
                    </div>



                       

                   



                       

               






            
       
        
    )

}