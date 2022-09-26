import Image from "next/image";
import { useEffect } from "react";

export default function Test() {

   
  

    function mouserEnterfun(e1,e2){
        var rect1 = document.getElementById(e1)
        rect1.setAttribute("stroke","black")
        var rect2 = document.getElementById(e2)
        rect2.setAttribute("fill","black")
        rect2.setAttribute("stroke","black")
     
    }
    function mouserLeavefun(e1,e2){
        var rect1 = document.getElementById(e1)
        rect1.setAttribute("stroke","#ED1B52")
        var rect2 = document.getElementById(e2)
        rect2.setAttribute("fill","#ED1B52")
        rect2.setAttribute("stroke","#ED1B52")

    }

 
    return (
            <>
           
            <div  className="w-128 mt-12 ml-12">
                <svg width="100%" height="100%" id="desktop"  viewBox="0 0 1334 750"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="loop" stroke="" fillRule="evenodd">
                        <g id="section-0" className="section"  stroke=""> 
                            <g className="bg-sky-700">
                            <rect onMouseEnter={()=>{mouserEnterfun('rect1','rect2')}} onMouseLeave={()=>{mouserLeavefun('rect1','rect2')}}    id="rect1" className="body" stroke="#ED1B52" fill="#FFFFFF" x="0.5" y="0.5" width="244" height="207"></rect>
                            <rect onMouseEnter={()=>{mouserEnterfun('rect1','rect2')}} onMouseLeave={()=>{mouserLeavefun('rect1','rect2')}} id="rect2" className="title text-black" stroke="#FFFFFF" fill="#ED1B52" x="0.5" y="206.5" width="244" height="58"></rect>
                            </g>
                            <g className="transition-all ease-in  hover:scale-80 hover:text-lg hover:duration-700 bg-white">
                            <text onMouseEnter={()=>{mouserEnterfun('rect1','rect2')}} fill="black" stroke="" x="121" y="35" id="section-0-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                                <tspan x="115" dy="1.2em">Study your users&apos</tspan>
                                <tspan x="115" dy="1.2em">wishes and expectations,</tspan>
                                <tspan x="115" dy="1.2em">do market research</tspan>
                                <tspan x="115" dy="1.2em">and gap analysis</tspan>
                            </text>
                            <text onMouseEnter={()=>{mouserEnterfun('rect1','rect2')}} fill="#ffffff" x="121" y="238" id="section-0-inner-text" className="text-white" dominantBaseline="middle" textAnchor="middle">Ask &amp; Listen</text>
                            </g>
                        </g>
                    </g>
                    

                    <g id="section-1" className="section" transform="translate(245.000000, 0.000000)">
                    <g>
                    <rect id="rect3" onMouseEnter={()=>{mouserEnterfun('rect3','rect4')}} onMouseLeave={()=>{mouserLeavefun('rect3','rect4')}}  className="body" stroke="#ED1B52" fill="#FFFFFF" x="0.5" y="0.5" width="243" height="207"></rect>
                    <rect id="rect4" onMouseEnter={()=>{mouserEnterfun('rect3','rect4')}} onMouseLeave={()=>{mouserLeavefun('rect3','rect4')}} className="title" stroke="#FFFFFF" fill="#ED1B52" x="0.5" y="206.5" width="243" height="58"></rect>
                    </g>
                    <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                    <text onMouseEnter={()=>{mouserEnterfun('rect3','rect4')}} x="121.5" y="35" id="section-1-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                    <tspan x="115" dy="1.2em">Refine and prioritize</tspan>
                    <tspan x="115" dy="1.2em">the features against</tspan>
                    <tspan x="115" dy="1.2em">the business goals</tspan>
                    <tspan x="115" dy="1.2em">and market capabilities</tspan>
                    </text>
                    <text onMouseEnter={()=>{mouserEnterfun('rect3','rect4')}}fill="#ffffff" x="121" y="238" id="section-1-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle">Analyse &amp; Refine</text>
                    </g>
                    </g>
                   

                   
                    <g id="section-2" className="section" transform="translate(489.000000, 0.000000)">
                    <rect id="rect5"  onMouseEnter={()=>{mouserEnterfun('rect5','rect6')}} onMouseLeave={()=>{mouserLeavefun('rect5','rect6')}} className="body" stroke="#ED1B52" fill="#FFFFFF" x="0.5" y="0.5" width="237" height="207"></rect>
                    <rect id="rect6"  onMouseEnter={()=>{mouserEnterfun('rect5','rect6')}} onMouseLeave={()=>{mouserLeavefun('rect5','rect6')}} className="title" stroke="#FFFFFF" fill="#ED1B52" x="0.5" y="206.5" width="237" height="58"></rect>
                    <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                    <text  onMouseEnter={()=>{mouserEnterfun('rect5','rect6')}} x="118" y="35" id="section-2-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                    <tspan x="115" dy="1.2em">Create the product</tspan>
                    <tspan x="115" dy="1.2em">development roadmap with</tspan>
                    <tspan x="115" dy="1.2em">milestones and business</tspan>
                    <tspan x="115" dy="1.2em">reasoning</tspan>
                    </text>
                    <text  onMouseEnter={()=>{mouserEnterfun('rect5','rect6')}} fill="#ffffff" x="118" y="240" id="section-2-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle">Plan &amp; Map</text>
                    </g>
                    </g>
                   
                   
                
               
               
               
                    <g id="loop" className="transition-all-colors duration-500 ease-in 
                       bg-green hover:bg-yellow transform 
                        rounded-lg p-4 border 
                       border-green-900 hover:border-black"  fill="none" fillRule="evenodd">
                        <g id="section-3" className="section items-eight-qty" transform="translate(727.500000, 0.498813)">
                            <path  onMouseEnter={()=>{mouserEnterfun('rect7','rect8')}} onMouseLeave={()=>{mouserLeavefun('rect7','rect8')}} d="M0.0027085917,0 L0.0027085917,206.212872 C90.6299953,213.218344 153.85766,263.653514 173.452449,357 L372.82085,335.927404 C349.787716,125.335898 181.837617,4.7825289 0.0027085917,0 Z" id="rect7" className="body" stroke="#ED1B52" fill="#FFFFFF"></path>
                            <path  onMouseEnter={()=>{mouserEnterfun('rect7','rect8')}} onMouseLeave={()=>{mouserLeavefun('rect7','rect8')}} d="M0,206.002187 L0,263.967253 C52.7709532,264.501187 103.451526,299.724542 113.991423,362.97076 L173.452449,357 C155.730665,267.689856 95.533654,210.91397 0,206.002187 Z" id="rect8" className="title" stroke="#FFFFFF" fill="#ED1B52"></path>
                            <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                            <text  onMouseEnter={()=>{mouserEnterfun('rect7','rect8')}} fill="black" x="112" y="145" id="section-3-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                                <tspan x="190" dy="1.2em">Develop the UI/UX</tspan>
                                <tspan x="190" dy="1.2em">designs and user</tspan>
                                <tspan x="190" dy="1.2em">journey and validating</tspan>
                                <tspan x="190" dy="1.2em">them with the</tspan>
                                <tspan x="190" dy="1.2em">target audience</tspan>
                            </text>
                            <text  onMouseEnter={()=>{mouserEnterfun('rect7','rect8')}} fill="#ffffff"  x="110" y="240" id="section-3-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle" transform="translate(190,35) rotate(45)">Design</text>
                            </g>
                        </g>
                    </g>

                   
                    <g id="section-7" className="section" transform="translate(727.000000, 0.000000)" stroke="#ED1B52">
                    <line x1="371.5" y1="0.5" x2="0.5" y2="0.5" id="Line-2" strokeLinecap="square"></line>
                    <line x1="371.5" y1="263.5" x2="359.5" y2="263.5" id="Line" fill="#ED1B52" strokeLinecap="square"></line>
                    <rect id="rect9" onMouseEnter={()=>{mouserEnterfun('rect9','rect10')}} onMouseLeave={()=>{mouserLeavefun('rect9','rect10')}} className="body" fill="#FFFFFF" x="372.5" y="0.5" width="234" height="207"></rect>
                    <rect id="rect10" onMouseEnter={()=>{mouserEnterfun('rect9','rect10')}} onMouseLeave={()=>{mouserLeavefun('rect9','rect10')}} className="title" fill="#ED1B52" x="372.5" y="206.5" width="234" height="57"></rect>
                    <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                    <text  onMouseEnter={()=>{mouserEnterfun('rect9','rect10')}} x="0" y="35" id="section-7-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle" stroke="none">
                    <tspan x="490" dy="1.2em">Scaling infrastructure</tspan>
                    <tspan x="490" dy="1.2em">staffing,</tspan>
                    <tspan x="490" dy="1.2em">and training teams</tspan>
                    <tspan x="490" dy="1.2em">to match the</tspan>
                    <tspan x="490" dy="1.2em">business</tspan>
                    <tspan x="490" dy="1.2em">expansion goals</tspan>
                    </text>
                    <text  onMouseEnter={()=>{mouserEnterfun('rect9','rect10')}}fill="#ffffff" x="490" y="238" id="section-7-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle" stroke="none">Scale &amp; Grow</text>
                    </g>
                    </g>
                   

                    <g id="section-4" className="section items-eight-qty" transform="translate(761.005727, 337.389848)">
                    <path  onMouseEnter={()=>{mouserEnterfun('rect11','rect12')}} onMouseLeave={()=>{mouserLeavefun('rect11','rect12')}} d="M140.109159,21.0673187 L339.422157,-5.68434189e-14 C356.848596,168.314 256.998747,341.276196 67.485747,396.048199 L14.2560309,210.181918 C101.597452,182.034296 150.292809,104.233535 140.109159,21.0673187 Z" id="rect11" className="body" stroke="#ED1B52" fill="#FFFFFF"></path>
                    <path  onMouseEnter={()=>{mouserEnterfun('rect11','rect12')}} onMouseLeave={()=>{mouserLeavefun('rect11','rect12')}} d="M80.569665,27.0389464 L140.109159,21.0673187 C151.067738,105.582875 101.065243,181.860085 14.2804251,210.463085 L0,150.929528 C59.3139707,129.472585 80.569665,89.3365292 80.569665,27.0389464 Z" id="rect12" className="title" stroke="#FFFFFF" fill="#ED1B52"></path>
                    <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                    <text onMouseEnter={()=>{mouserEnterfun('rect11','rect12')}}  x="112" y="145" id="section-4-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                    <tspan x="195" dy="1.2em">Select a suitable</tspan>
                    <tspan x="195" dy="1.2em">tech architecture, building</tspan>
                    <tspan x="195" dy="1.2em">building</tspan>
                    <tspan x="195" dy="1.2em">the app and</tspan>
                    <tspan x="195" dy="1.2em">infrastructure</tspan>
                    <tspan x="195" dy="1.2em">to support it</tspan>
                    </text>
                    <text onMouseEnter={()=>{mouserEnterfun('rect11','rect12')}}  fill="#ffffff" x="0" y="0" id="section-4-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle" transform="rotate(-58, 155, -12)">Develop</text>
                    </g>
                    </g>
                    

                    <g id="section-5" className="section items-eight-qty" transform="translate(436.886407, 448.902345)">
                    <path  onMouseEnter={()=>{mouserEnterfun('rect13','rect14')}} onMouseLeave={()=>{mouserLeavefun('rect13','rect14')}} d="M337.474089,99.1242478 C262.877718,115.81039 201.029415,96.4768869 152.466413,38.3621533 L0,160.069622 C93.947461,278.129333 252.617161,325.562457 390.680208,284.809832 L337.474089,99.1242478 Z" id="rect13" className="body" stroke="#ED1B52" fill="#FFFFFF"></path>
                    <path onMouseEnter={()=>{mouserEnterfun('rect13','rect14')}} onMouseLeave={()=>{mouserLeavefun('rect13','rect14')}}  d="M323.170055,39.6941041 L337.474413,99.2337787 C267.502816,118.975187 198.911485,96.1121009 152.427593,38.293551 L200.307739,5.68434189e-14 C229.641118,38.1630719 272.445166,50.6904127 323.170055,39.6941041 Z" id="rect14" className="title" stroke="#FFFFFF" fill="#ED1B52"></path>
                    <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                    <text onMouseEnter={()=>{mouserEnterfun('rect13','rect14')}}  x="112" y="125" id="section-5-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                    <tspan x="210" dy="1.2em">Configure the Quality</tspan>
                    <tspan x="210" dy="1.2em">Assurance system and</tspan>
                    <tspan x="210" dy="1.2em">automating routine quality</tspan>
                    <tspan x="210" dy="1.2em">control procedures</tspan>
                    </text>
                    <text onMouseEnter={()=>{mouserEnterfun('rect13','rect14')}} fill="#ffffff" x="0" y="0" id="section-5-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle" transform="translate(246, 65) rotate(18)">Test</text>
                    </g>
                    </g>

                   
                    <g id="section-6" className="section items-eight-qty" transform="translate(353.641366, 285.391000)">
                    <path onMouseEnter={()=>{mouserEnterfun('rect15','rect16')}} onMouseLeave={()=>{mouserLeavefun('rect15','rect16')}} d="M10.5961202,0.109 L228.399305,0.109 C188.968929,69.1435254 189.863567,135.763812 235.159945,201.049478 L82.6357031,322.816405 C8.85323584,230.685 -16.563351,114.311 10.5961202,0.109 Z" id="rect15" className="body" stroke="#ED1B52" fill="#FFFFFF"></path>
                    <path onMouseEnter={()=>{mouserEnterfun('rect15','rect16')}} onMouseLeave={()=>{mouserLeavefun('rect15','rect16')}} d="M227.231275,0 L307.218634,0 C251.047929,46.1143616 247.763796,115.659901 282.950213,162.723504 L235.074058,201.003633 C188.655733,134.886401 188.682042,67.6750039 227.231275,0 Z" id="rect16" className="title" stroke="#FFFFFF" fill="#ED1B52"></path>
                    <g className="transition-all ease-in   hover:scale-80 hover:text-lg  hover:black hover:duration-700">
                    <text onMouseEnter={()=>{mouserEnterfun('rect15','rect16')}} x="112" y="70" id="section-6-outer-text" className="text-body" dominantBaseline="middle" textAnchor="middle">
                    <tspan x="103" dy="1.2em">Configure environments </tspan>
                    <tspan x="103" dy="1.2em">easy and bug-free</tspan>
                    <tspan x="103" dy="1.2em">continuous code</tspan>
                    <tspan x="103" dy="1.2em">integration</tspan>
                    <tspan x="103" dy="1.2em">and deployment</tspan>
                    </text>
                    <text onMouseEnter={()=>{mouserEnterfun('rect15','rect16')}}fill="#ffffff" x="0" y="0" id="section-6-inner-text" className="text-title" dominantBaseline="middle" textAnchor="middle" transform="translate(232,95) rotate(270)">Deploy</text>
                    </g>
                    </g>

               

                </svg>

                
            </div>
            </>
    )
}