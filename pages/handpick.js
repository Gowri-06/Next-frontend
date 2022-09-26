import { useEffect, useState } from 'react'
import Image from 'next/image'


export default function Handpick () {

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
            var imggrey = document.getElementById('imggrey')
            console.log("imggrey",imggrey)
            var three_hands_color = document.getElementById('three_hands_color')
            console.log("three_hands",three_hands_color)
            var three_hands = document.getElementById('three_hands')
            console.log("three_hands", three_hands)
            var grey = document.getElementById('grey 1')
            console.log("grey", grey)
            var orange_hands = document.getElementById('orange_hands')
            console.log("orange_hands",orange_hands)
            var orange_left = document.getElementById('orange_left')
            console.log("orange_left",orange_left)
            var orange_right = document.getElementById('orange_right')
            console.log("orange_right",orange_right)
            var but_theyre = document.getElementById('but_theyre')
            console.log("but_theyre",but_theyre)
            var scissor_cut = document.getElementById('scissor_cut')
            console.log("scissor_cut",scissor_cut)
            var stone_1 = document.getElementById('stone_1')
            console.log("stone_1",stone_1)
            var stone_2 = document.getElementById('stone_2')
            console.log("stone_2",stone_2)
            var stone_3 = document.getElementById('stone_3')
            console.log("stone_3",stone_3)
            var stone_4 = document.getElementById('stone_4')
            console.log("stone_4",stone_4)
            var stone_5 = document.getElementById('stone_5')
            console.log("stone_5",stone_5)
            var chain = document.getElementById('chain')
            console.log("chain",chain)
            var chain_disappear = document.getElementById('chain_disappear')
            console.log("chain_disappear",chain_disappear)
            var pointing_yellow = document.getElementById('pointing_yellow')
            console.log("pointing_yellow",pointing_yellow)
            var pointing_yellow_direction  = document.getElementById('pointing_yellow_direction')
            console.log("pointing_yellow_direction",pointing_yellow_direction)
            var thats_why  = document.getElementById('thats_why')
            console.log("thats_why",thats_why)
            var orange_right_2 = document.getElementById('orange_right_2')
            console.log("orange_right_2",orange_right_2)
            var orange_right_2_direction = document.getElementById('orange_right_2_direction')
            console.log("orange_right_2_direction",orange_right_2_direction)
            var it_is_not = document.getElementById('it_is_not')
            console.log("it_is_not",it_is_not)
            var green_palm = document.getElementById('green_palm')
            console.log("green_palm",green_palm)
            var green_palm_direction = document.getElementById('green_palm_direction')
            console.log("green_palm_direction",green_palm_direction)
            var to_earn_opa = document.getElementById('to_earn_opa')
            console.log("to_earn_opa",to_earn_opa)
            var second_yellow = document.getElementById('second_yellow')
            console.log("second_yellow",second_yellow)
            var second_yellow_direction = document.getElementById('second_yellow_direction')
            console.log("second_yellow_direction",second_yellow_direction)

            if (y_range > -101) {
                // blue1.className = 'ml-602 transition-all  ease-in translate-y-[200px] delay-150 duration-300'
               
                but_one.className = "ml-370 -mt-355 transition-all  ease-in  delay-500 duration-[2000ms] opacity-100"
            
          
                emancipation.className = "ml-370 mt-43 transition-all  ease-in  delay-500 duration-[2000ms] opacity-100"
                // blue1.className = 'absolute left-[221px] top-[30px]   transition-all ease-in  translate-y-[100px] delay-1000 duration-[300ms] opacity-100'
                setTimeout(function() {
                green.className = "relative left-[1600px]  transition-all -translate-x-[660px] -translate-y-[10px]  ease-in   delay-150 duration-[800ms]"
                },1000)
            }
            if (y_range > -310) {
                setTimeout(function() {
                imggreen.className = "relative left-[1800px] top-[80px] transition-all translate-x-[400px]  ease-in   delay-1000 duration-[100ms] opacity-100"
                },1000)
                
            }
            if (y_range > -313) {
               
                imggreen.className = "relative left-[1800px] top-[80px] transition-all translate-x-[0px]   ease-in   delay-500 duration-[100ms] opacity-100"
               
            }
           if (y_range > -320) {
                setTimeout(function() {
                blue1.className = 'absolute left-[221px] top-[30px]   transition-all ease-in    duration-[100ms] opacity-100'
                 },3000)
                
                 // imggreen.className = "relative left-[1800px] top-[80px] transition-all translate-x-[400px]  ease-in   delay-150 duration-[100ms] opacity-100"
                
                 green.className = "relative left-[1600px] transition-all translate-x-[660px]  ease-in   delay-1000 duration-[1800ms]"
              
                // setTimeout(function() {
                // imggreen.className = "relative left-[1800px] top-[80px] transition-all translate-x-[7px]  ease-in    duration-[500ms] opacity-100"
                // },3000)
            }
           
            if (y_range > -510) {
                setTimeout(function() {
                blue1.className = 'absolute left-[221px] top-[60px]   transition-all ease-in   duration-[100ms] opacity-100'
                },1000)
             }

            if (y_range > -730) {
               
                blue1.className = 'absolute left-[221px] top-[90px]   transition-all ease-in    duration-[500ms] opacity-0 hidden'
               
                setTimeout(function() {
                grey.className = 'relative  -left-[545px] -top-[100px]  transition-all ease-in  -translate-y-[10px]  translate-x-[920px]  delay-100 duration-[100ms]'
                // imggreen.className = "relative left-[1800px] top-[80px] transition-all translate-x-[400px]  ease-in   delay-150 duration-[100ms] opacity-100"
                },3000)
            }
            if (y_range > -830) {
               
                // blue1.className = 'absolute left-[221px] top-[120px] -z-1  transition-all ease-in  delay-100 duration-[900ms] opacity-0'
               
                grey.className = 'relative  -left-[545px] -top-[100px]  transition-all ease-in    -translate-x-[1000px]  delay-300 duration-[1000ms]'

                // setTimeout(function() {
                // imggrey.className = 'absolute -left-[353px] top-[0px]  transition-all ease-in  -translate-x-[600px]       delay-300 duration-[800ms] opacity-100'
                // },2000)
            }
            if (y_range > -930) {
                // setTimeout(function() {
                // three_hands.className = 'relative left-[630px] -top-[75px] transition-all ease-in  translate-x-[750px] delay-150 duration-[1000ms]'
                // },3000)
                // setTimeout(function() {
                    // imggrey.className = 'absolute -left-[353px] top-[0px] opacity-100 transition-all ease-in  translate-y-[0px]    delay-300 duration-[800ms] opacity-100'
                //     },1000)
              
            }
            if (y_range > -930) {
            
                three_hands.className = 'relative left-[630px] -top-[75px] transition-all ease-in  translate-y-[10px] delay-100 duration-[100ms]'

            }
            if (y_range > -931) {
              
                   

                three_hands_color.className = 'absolute transition-all ease-in  translate-x-[480px]   translate-y-[80px]  delay-300 duration-[500ms] opacity-0'
               
                
              
            }
            if (y_range > -1130) {
                    // three_hands.className = 'relative left-[630px] -top-[75px] transition-all ease-in  translate-y-[10px] delay-1000 duration-[1500ms]'

                    // three_hands_color.className = 'absolute transition-all ease-in   translate-y-[5px]  delay-0 duration-[100ms] opacity-0'
                  
                orange_hands.className = 'relative left-[368px] top-[600px]  transition-all ease-in  -translate-y-[635px] delay-1000 duration-[1500ms]'
            }
            if (y_range > -1240) {

                setTimeout(function() {
                    orange_left.className = 'absolute -left-[490px] -top-[60px]  transition-all ease-in -translate-x-[500px]    duration-[500ms]'
                },3000) 
                setTimeout(function() {
                    orange_right.className = 'absolute left-[540px] -top-[60px]   transition-all ease-in  translate-x-[500px]    duration-[500ms]'
                },3000) 
                setTimeout(function() {
                    but_theyre.className = 'relative left-[370px]  transition-all ease-in opacity-100'
                    },3000)
             
               
            }
            if (y_range > -1360) {
               
                orange_left.className = 'absolute -left-[490px] -top-[60px]  transition-all ease-in  translate-y-[0px] delay-150 duration-[500ms]'
                orange_right.className = 'absolute left-[540px] -top-[60px]  transition-all ease-in  translate-y-[0px] delay-150 duration-[500ms]'
                
                    but_theyre.className = 'relative left-[370px]  transition-all ease-in opacity-25'
                    
              
            }
            if (y_range > -1480) {
             
            }
            if (y_range > -1580) {
                setTimeout(function() {  
                scissor_cut.className = 'absolute -left-[800px] transition-all ease-in  translate-x-1/4  duration-[500ms]'
            },3000)
            }
            if (y_range > -1670) {
                setTimeout(function() { 
                scissor_cut.className = 'absolute -left-[800px] transition-all ease-in  translate-x-full  duration-[500ms]'
                },2000)
                setTimeout(function() {  
                true_img.className = "ml-370 mt-20"
                },3000)
            }
            if (y_range > -1780) {
             
                setTimeout(function() {  
                stone_1.className = " hidden"
                },100)
                setTimeout(function() {  
                stone_2.className = "hidden"
                },300)
                setTimeout(function() {  
                stone_3.className = "hidden"
                },500)
                setTimeout(function() {  
                stone_4.className = "hidden"
                },700)
                setTimeout(function() {  
                stone_5.className = "hidden"
                },900)
              
            }
            if (y_range > -1770) {

                
                    stone_1.className = "absolute"
                   
                  
                    stone_2.className = "absolute"
               
                  
                    stone_3.className = "absolute"
                 
                   
                    stone_4.className = "absolute"
             
                
                    stone_5.className = "absolute"
                  
                setTimeout(function() { 
                chain.className = "relative left-[1700px] top-[100px] -translate-x-full  duration-[2000ms]"
                },3000)
            }
            if (y_range > -1870) {
               
                chain.className = "relative left-[1900px] top-[100px] -translate-x-1/2 translate-y-[0px]    duration-[2000ms]"
                
              
            }

            if (y_range > -1970) {
                  
                // setTimeout(function() { 
                //     chain_disappear.className = "absolute -left-[1900px] -translate-x-full delay-1000 duration-[2000ms]"
                //     },5000)
                setTimeout(function() {
                pointing_yellow.className = "relative top-[300px] left-[1800px] transition-all ease-in -translate-x-[850px] delay-500 duration-[900ms]"
                },1000)
            }
            if (y_range > -2070) {
                setTimeout(function() {
                pointing_yellow_direction.className = "absolute transition-all ease-in translate-x-[500px] delay-500 duration-[1000ms]"
                },3000)
            }
            if (y_range > -2080) {
               
                     pointing_yellow_direction.className = "absolute translate-x-[0px] delay-500 duration-[100ms]"
                
                setTimeout(function() {
                    thats_why.className = "ml-370 mt-450 opacity-100"
            },3000)
            }
            if (y_range > -2200) {
                pointing_yellow.className = "relative top-[300px] left-[1800px] translate-x-[850px] delay-500 duration-[1000ms]"
                setTimeout(function() {
                    orange_right_2.className = "relative top-[50px] left-[1800px] -translate-x-[400px] delay-100 duration-[800ms]"
                },3000)
            }
            // if (y_range > -2205) {
            //     orange_right_2.className = "relative top-[50px] left-[1800px] -translate-x-[1390px] delay-100 duration-[800ms]"

            // }
            if (y_range > -2350) {

                setTimeout(function() {
                orange_right_2_direction.className = "absolute -top-[30px] left-[440px] translate-x-[600px] delay-300 duration-[100ms]"
                },1000)
              
            }
            if (y_range > -2350) {
              
                orange_right_2_direction.className = "absolute -top-[30px] left-[440px] translate-x-[0px] translate-y-[0px] delay-300 duration-[1000ms]"
                
            }

            if (y_range > -2425) {
             
                    orange_right_2.className = "relative top-[50px] left-[1800px] -translate-x-[1390px] delay-100 duration-[800ms]"
            }


           
            if (y_range > -2450) {
                setTimeout(function() {
                    it_is_not.className = "mt-[200px] ml-[370px] opacity-25"
                },6000)
            }
            if (y_range > -2550) {
               
                it_is_not.className = "mt-[200px] ml-[370px] opacity-100"
                setTimeout(function() {
                green_palm.className = "relative left-[1800px] top-[60px] -translate-x-[1420px]   delay-1000 duration-[1000ms]"
                },3000)
            }
            if (y_range > -2552) {
                setTimeout(function() {
                green_palm_direction.className = "absolute left-[200px] top-[60px] translate-x-[800px] opacity-100 delay-100 duration-[1000ms]"
           },3000)
           }


           if (y_range > -2554) {
            green_palm_direction.className = "absolute left-[200px] top-[60px] translate-x-[0px] opacity-100 delay-100 duration-[500ms]"

            }
            
            if (y_range > -2556) {
               
            green_palm.className = "relative left-[1800px] top-[60px]  translate-x-[1000px]  opacity-100 delay-1000 duration-[1000ms]"
            }
           
            // }
            if (y_range > -2560) {
                // green_palm_direction.className = "absolute left-[200px] top-[0px] translate-y-[0px] opacity-100 delay-100 duration-[100ms]"

                 setTimeout(function() {
                    to_earn_opa.className = "absolute left-[373px] top-[150px] opacity-0"
            },3000)
            }
            if (y_range > -2561) {
               
                    to_earn_opa.className = "absolute left-[373px] top-[150px] opacity-100"
                setTimeout(function() {
                second_yellow.className = "relative -left-[400px] top-[240px] transition-all translate-x-[1000px] delay-0 duration-[1000ms]"
               },3000)
            }
            if (y_range > -2568) {
                setTimeout(function() {
                second_yellow_direction.className = "absolute -left-[910px] transition-all -translate-x-[620px] delay-100 duration-[700ms]"
            },1000)
            }
        
       
            if (y_range > -2568) {
               
                second_yellow_direction.className = "absolute -left-[910px] transition-all translate-x-[0px] duration-[1000ms]"
         
            }


            if (y_range > -2568) {
               
                second_yellow.className = "relative -left-[400px] top-[240px] transition-all -translate-x-[800px] delay-0 duration-[1000ms]"
         
            }
                
           
        })










         




    }, [])
    function first() {
       
        var show_content_data = document.getElementById('show_content_data')
       
        var first_transtale = document.getElementById('first')
       
        if(show_content_data) {

            show_content_data.className='transition-all block'
        }
        setTimeout(function() {
        document.getElementById('combined_images1').className="relative left-[370px] top-[30px] bottom-[3px]   w-full pt-40  mx-auto transition-all -translate-y-[500px] ease-in delay-150 duration-[500ms]"

        console.log("first1", first_transtale.className="relative bottom-[500px] w-fit h-fit my-auto py-44 mx-auto px-2 transition-all ease-in delay-150 duration-[1000ms]")
        
        setshow_content(true)
    }, 1000)
   
      

    }
 
    
    

    function second_fun() {
        var first1 = document.getElementById('first')
        console.log("first1", first1)

       

    }
   

    return (
       
        <div className="w-full h-full  overflow-y-hidden  overflow-x-hidden  pb-[800px] bg-dustgrey" id="all_image_tag">

            <div className="relative static bottom-0 w-fit h-fit my-auto py-44 mx-auto px-2 transition-all ease-in delay-150 duration-[2000ms] " id="first">
                <h1 className='text-sky-600 text-5xl font-extrabold mb-40'>How many slaves</h1>
                <h1 className='text-sky-600 text-5xl font-extrabold ml-40'>work for you?</h1>
                <div className=" w-fit mx-auto py-3 " id='first-transtale'>
                    <Image onClick={first} src="/hand_pick/what.png" alt="what" width="111px" height="100px" />
                    <Image src="/hand_pick/separator (1).png" alt="separator" width="38px" height="100px" />
                    <Image src="/hand_pick/find_out.png" alt="find_out" width="86px" height="100px" />
                </div>

            </div>
        <div className='w-full h-full hidden' id='show_content_data'>
            <div className='w-full pt-40' id="combined_images1">
                <div className="relative bottom-[3px]    mx-auto transition-all ease-in delay-150 duration-[20000ms]">
                    <Image src="/hand_pick/as_far_back.png" alt="as_far_back" width="445px" height="68px" />

                    <div className="absolute left-[221px] top-[30px]" id="blue1">
                        <Image src="/hand_pick/blue1.png" alt="blue 1" width="484px" height="880px" />
                    </div>
                </div>
            </div>


              

                    <div className="ml-370 -mt-355 -z-4 opacity-25" id="but_one">
                        <Image src="/hand_pick/but_one.png" alt="but_one" width="624px" height="76px" />
                    </div>
                    <div className="ml-370 mt-43 opacity-25" id="emancipation (1)">
                        <Image src="/hand_pick/emancipation (1).png" alt="emancipation (1)" width="345px" height="25px" />
                    </div>

                    <div className="relative  left-[1600px] top-[70px]" id="green 11">
                        <Image id="imggreen" src="/hand_pick/green 11.png" alt="green 11" width="822px" height="392px" />

                        <div className="absolute -left-[570px] top-[52px]" id="">
                            <Image src="/hand_pick/thats_what.png" alt="thats_what" width="596px" height="105px" />
                        </div>
                    </div>

                    <div className="relative  -left-[545px] top-[30px] " id="grey 1">
                        <Image src="/hand_pick/but_buying.png" alt="but_buying" width="531px" height="25px" />

                        <div className="absolute -left-[353px] top-[0px]" id="">
                            <Image id="imggrey" src="/hand_pick/grey 1.png" alt="grey 1" width="507px" height="521px" />
                        </div>

                    </div>

                    <div className="relative left-[730px] top-[120px]" id="three_hands">
                        <Image src="/hand_pick/if_thats.png" alt="if_thats" width="459px" height="68px"/>

                        <div className="absolute" id="three_hands_color">
                            <Image id="" src="/hand_pick/small_blue 1.png" alt="small_blue 1" width="147px" height="521px" />
                            <Image id="" src="/hand_pick/small_magenta 1.png" alt="small_magenta 1" width="95px" height="521px" />
                            <Image id="" src="/hand_pick/small_yellow 1.png" alt="small_yellow 1" width="134px" height="521px" />
                        </div>
                    </div>

                    <div className="relative left-[368px] top-[750px]" id="orange_hands">
                        <Image src="/hand_pick/actually.png" alt="actually" width="555px" height="47px" />

                        <div className="absolute -left-[490px] -top-[60px]" id="orange_left">
                            <Image id="" src="/hand_pick/orange_left 2.png" alt="orange_left 2" width="507px" height="688px"/>
                        </div>
                        <div className="absolute left-[540px] -top-[60px]" id="orange_right">
                            <Image id="" src="/hand_pick/orange_right.png" alt="orange_right" width="507px" height="688px"/>
                        </div>

                    </div>
                   
                    <div className="relative left-[370px]" id="">
                        <Image className="opacity-25" id="but_theyre" src="/hand_pick/but_theyre.png" alt="but_theyre" width="348px" height="111px" />
                   
                    <div className="absolute -left-[800px]" id="scissor_cut">
                        <Image  id="" src="/hand_pick/scissors.png" alt="scissors" width="3000px" height="170px"/>
                    </div>
                    </div>

                    <div className="ml-370 mt-20 hidden" id="true_img">
                    <Image src="/hand_pick/true.png" alt="true" width="624px" height="100px" />
                    </div>


                    <div className="ml-[527px] mt-[70px]">
                    <Image src="/hand_pick/thats.png" alt="thats" width="342px" height="111px"/>
                    </div>

                    <div className="relative left-[370px] -top-[180px]" id="">
                    <div className="absolute" id="stone_1">
                    <Image src="/hand_pick/stone_1.png" alt="stone_1" width="545px" height="220px" />
                    </div>

                    <div className="absolute" id="stone_2">
                    <Image src="/hand_pick/stone_2.png" alt="stone_2" width="545px" height="220px" />
                    </div>

                    <div className="absolute" id="stone_3">
                    <Image src="/hand_pick/stone_3.png" id="stone_3" alt="stone_3" width="545px" height="220px" />
                    </div>

                    <div className="absolute"  id="stone_4">
                    <Image src="/hand_pick/stone_4.png" id="stone_4" alt="stone_4" width="545px" height="220px" />
                    </div>

                    <div className="absolute" id="stone_5">
                    <Image src="/hand_pick/stone_5.png" id="stone_5" alt="stone_5" width="545px" height="220px" />
                    </div>
                    </div>

                    <div className="relative left-[1900px] top-[100px]" id="chain">
                    <div className="absolute left-[20px] top-[32px]">
                    <Image src="/hand_pick/its_the.png" alt="its_the" width="618px" height="47px" />
                    </div>
                    <div className="absolute -left-[1900px]" id="chain_disappear">
                    <Image src="/hand_pick/chain.png" alt="chain" width="1939px" height="117px" />
                    </div>
                    </div>

                    <div className='relative top-[300px] left-[1800px]' id="pointing_yellow">
                        <div className="absolute -left-[300px]">
                        <Image src="/hand_pick/so_much.png" alt="so_much" width="234px" height="20px" />
                        </div>
                        <div className="absolute" id="pointing_yellow_direction">
                        <Image src="/hand_pick/pointing_yellow.png" alt="pointing_yellow" width="1000px" height="196px" />
                        </div>
                    </div>
                    
                    <div className="ml-370 mt-450 opacity-25" id="thats_why">
                    <Image src="/hand_pick/thats_why.png" alt="thats_why" width="555px" height="47px" />
                    </div>

                    <div className='relative top-[50px] left-[1800px] w-full' id="orange_right_2">
                        <div className="absolute -left-[42px] top-[17px]">
                        <Image src="/hand_pick/so_you_will.png" alt="so_you_will" width="496px" height="68px" />
                        </div>
                        <div className="absolute -top-[30px] left-[440px]" id="orange_right_2_direction">
                        <Image src="/hand_pick/orange_right_2.png" alt="orange_right_2" width="357px" height="663px" />
                        </div>
                    </div>

                    {/* bhkjh */}
                    <div className="mt-[200px] ml-[370px] opacity-25" id="it_is_not">
                    <Image src="/hand_pick/it_is_not.png" alt="it_is_not" width="598px" height="76px" />
                    </div>
 
                    
                    <div className='relative left-[370px] -top-[100px]' id="green_palm">
                    <div className="absolute">
                    <Image src="/hand_pick/take.png" alt="take" width="613px" height="25px"/>
                    </div>
                    <div className="absolute left-[200px] top-[0px]" id="green_palm_direction">
                    <Image src="/hand_pick/green_palm.png" alt="green_palm" width="513px" height="688px"/>
                    </div>
                    </div>

                    <div className="relative">
                    <div className='absolute left-[373px] top-[150px] ' id="to_earn_opa">
                    <Image src="/hand_pick/to_earn.png" alt="to_earn" width="606px" height="47px"/>
                    </div>
                    </div>


                    <div className="relative -left-[400px] top-[240px]" id="second_yellow">
                    <div className='absolute'>
                    <Image src="/hand_pick/together.png" alt="together" width="391px" height="111px"/>
                    </div>
                    <div className='absolute -left-[910px]' id="second_yellow_direction">
                    <Image src="/hand_pick/yellow (1).png" alt="yellow (1)" width="918px" height="194px"/>
                    </div>
                    </div> 

                     <div className="relative top-[490px]">
                        <div  className="absolute">
                        <Image src="/hand_pick/logo_banner.png" alt="logo_banner" width="2000px" height="165px"/>
                        </div>
                        <div  className="absolute top-[150px]  left-[600px]">
                        <Image src="/hand_pick/take_button.png" alt="take_button" width="177px" height="21px"/>
                        </div>
                     </div>

                        

 






        </div>
        </div>



                       

                   



                       

               






            
       
        
    )

}


