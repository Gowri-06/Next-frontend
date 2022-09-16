import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from "react"

export default function Home() {

  // const [state, setState] = useState(9);

  // const [redBall, setRedBall] = useState(false);
  // const [blueBall, setBlueBall] = useState(false);
  // const [yellowBall, setYellowBall] = useState(false);

  // useEffect(() => {
  //   if (state > 0) {
  //     setTimeout(() => {
        
  //       if (state === 1){
  //         console.log(state)
          
  //           var red = document.getElementById("redball")
  //           if(state === 1){
  //             red.style.backgroundColor = "green"
            
  //         }
  //       }else if (state === 3){
          
  //           var red = document.getElementById("redball")
  //           if(state === 0){
  //             red.style.backgroundColor = "blue"
            
  //         }
  //       }else if (state === 4){
          
  //           var red = document.getElementById("redball")
  //           if(state === 0){
  //             red.style.backgroundColor = "pink"
            
  //         }
  //       }else if (state === 5){
          
  //           var red = document.getElementById("redball")
  //           if(state === 0){
  //             red.style.backgroundColor = "orange"
            
  //         }
  //       }
  //       setState(state - 1)}, 500);
  //   } else {
  //     if(redBall === true){
  //       var red = document.getElementById("redball")
  //       if(state === 0){
  //         red.style.backgroundColor = "violet"
  //       }
  //     }
  //     setState(5)   
  //   }
  // })

  // function newfun(e) {

  //   setBlueBall(true)
  //   setRedBall(true)
  //   setYellowBall(true)
  //   // var ball = document.getElementById("ggg")
  //   // ball.className = "w-10 h-10 rounded-full bg-red-600"
  //   // const f = document.getElementById('foo');
  //   // document.addEventListener('click', (ev) => {
  //   // f.style.transform = `translateY(${ev.clientY - 25}px)`;
  //   // f.style.transform += `translateX(${ev.clientX - 25}px)`;
  //   // }, false);


  // }



 
 function fill_canvas() {
     // CREATE CANVAS CONTEXT.
     var img = new Image();
     img.src = 'D:/frontend_design/frontend/public/episyche_ball_image/episyche_logo.png';
     var canvas = document.getElementById('canvas');
     var ctx = canvas.getContext('2d');
 
     // canvas.width = 5
     // canvas.height = 5
 
     ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
 }
 
 var canvas1 = document.getElementById("episyche");
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 // ctx.drawImage(img,0,0);
 var explosions = [];
 var mouseX;
 var mouseY;
 canvas.addEventListener('mousemove', setMouse, false);
 canvas1.addEventListener('click', function() {
     explosions.push(new explosion(mouseX, mouseY));
    
 }, false);
 
 function loop() {
     
     ctx.clearRect(0, 0, 500, 500);
     drawExplosion();
     requestAnimationFrame(loop);
 }
 
 loop();
 
 function drawExplosion() {
     if (explosions.length === 0) {
         return;
     }
 
     for (let i = 0; i < explosions.length; i++) {
         const explosion = explosions[i];
         const projectiles = explosion.projectiles;
 
         if (projectiles.length === 0) {
             explosions.splice(i, 1);
             return;
         }
 
         const projectilesRemove = projectiles.slice();
 
         for (let ii = 0; ii < projectiles.length; ii++) {
             const projectile = projectiles[ii];
 
             // remove projectile if radius is below 0
             if (projectile.radius < 0) {
                 projectilesRemove.splice(ii, 1);
                 continue;
             }
 
             // draw
             ctx.beginPath();
             ctx.arc(projectile.x, projectile.y, projectile.radius, Math.PI * 2, 0, false);
             ctx.closePath();
             // ctx.fillStyle = 'hsl(' + projectile.h + ',' + projectile.s + '%,' + projectile.l + '%)';
             var gr = ctx.createLinearGradient(0, 100, 0, 200);
             gr.addColorStop(0, "green");
             gr.addColorStop(1, "yellow");
             // grd.addColorStop(0.5, "green");
             // gr.addColorStop(2, "pink");
             // gr.addColorStop(3, "blue");
             ctx.fillStyle = gr;
             ctx.fill();
 
 
             // update
             projectile.x -= projectile.vx * 1;
             projectile.y -= projectile.vy * 1;
             projectile.radius -= 0.02;
 
 
             // collisions
             if (projectile.x > 500) {
                 projectile.x = 500;
                 projectile.vx *= 1;
             }
 
             if (projectile.x < 0) {
                 projectile.x = 0;
                 projectile.vx *= 1;
             }
 
             if (projectile.y > 500) {
                 projectile.y = 500;
                 projectile.vy *= -1;
             }
 
             if (projectile.y < 0) {
                 projectile.y = 0;
                 projectile.vy *= -1;
             }
         }
 
         explosion.projectiles = projectilesRemove;
     }
 }
 
 function explosion(x, y) {
     this.projectiles = [];
 
     for (let i = 0; i < 10; i++) {
         this.projectiles.push(
             new projectile(x, y)
         );
     }
 }
 
 function projectile(x, y) {
     this.x = x;
     this.y = y;
     this.radius = 2 + Math.random() * 4;
     this.vx = -10 + Math.random() * 20;
     this.vy = -10 + Math.random() * 20;
     this.h = 100;
     this.s = Math.floor((Math.random() * 100) + 70);
     this.l = Math.floor((Math.random() * 70) + 30);
 }
 
 function setMouse(e) {
     mouseX = e.offsetX;
     mouseY = e.offsetY;
 }
  

 
  return (
    

  //   // <div>
  //   //   <h1 className="text-3xl font-bold underline">Ball popup</h1>
  //   //   <p className="mt-6">Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  //   //   <p>Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  //   //   <p>Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  //   //   <p>Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  //   //   <p>Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  //   //   <p>Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  //   //   <div className="flex justify-between mt-6" onClick={newfun} id="ggg">
  //   //     <Image src="" alt="" className="w-10 h-10 rounded-full bg-red-600" id="hhh"/>
  //   //     <Image onClick={newfun}  src="/episyche_ball_image/episyche_logo.png" alt="slab" width={60} height={30} />
  //   //     <div className="flex" >
  //   //       <h3>2022 episyche Inc</h3> <h4>Terms</h4> <h4>Privacy</h4>

  //   //     </div>
  //   //   </div>
  //   //   <p>Lorem ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

  //   //   <div className="w-10 h-10 rounded-full bg-red-600"></div>
  //   // </div>
  //   // <div>
  //   // <p onClick={newfun}>Click anywhere to move the ball</p>
  //   // <div id="foo" class="ball" ></div>
  //   // </div>

  //   // <p className="mt-12">Click anywhere to move the ball</p>
  //   <div id="ggg" className="mt-6">
  //     <div onClick={() => newfun()}><Image src="/episyche_ball_image/episyche_logo.png" alt="slab" width={100} height={100} /></div>

  //     <div className={`${blueBall ? "block" : "hidden"}  fixed top-10 bg-blue-600 w-3 h-3 rounded-full`}></div>
  //     <div id="redball" className={`${redBall  ? "block" : "hidden"} fixed top-7 left-10 bg-red-600 w-3 h-3 rounded-full`}></div>
  //     <div className={`${yellowBall  ? "block" : "hidden"} fixed top-12 left-20 bg-yellow-200 w-3 h-3 rounded-full`}></div>
  //     <div>{state}</div>
  //   </div>
  //  <div> 
  // </div>
  <div className="mt-12 flex flex-row mr-4">
  <div className="border-2 border-pink-600 bg-pink-600 w-40 text-center hover:border-black hover:bg-black">
      <div>
      <div className="bg-white px-7 py-5 text-xs h-48 text-center">Study your users'wishes and expectations,do market researchand gap analysis</div>
      <div className=" text-white font-medium text-xl text-center py-2">Ask & Listen</div>
      </div>
  </div>
  <div className="border-2 border-pink-600 bg-pink-600 w-40 text-center hover:border-black hover:bg-black">
      <div>
      <div className="bg-white px-7 py-5 text-xs h-48 text-center">Study your users'wishes and expectations,do market researchand gap analysis</div>
      <div className=" text-white font-medium text-xl text-center py-2">Ask & Listen</div>
      </div>
 
  </div>
  <div className="border-2 border-pink-600 bg-pink-600 w-40 text-center hover:border-black hover:bg-black">
      <div>
      <div className="bg-white px-7 py-5 text-xs h-48 text-center">Study your users'wishes and expectations,do market researchand gap analysis</div>
      <div className=" text-white font-medium text-xl text-center py-2">Ask & Listen</div>
      </div>
  </div>
  {/* <div className="border-2 rounded-tr-full rounded-bl-lg w-96  border-pink-600 overflow-hidden ">
         <div><small className="relative top-16">Develop the UI/UX designs<br/>and user journey<br/>and validating them<br/>with the target audience</small></div>
         <div className=" text-center py-7 relative top-26 right-16 bg-pink-600 text-white w-48 h-48 text-2xl rotate-50 rounded-full mt-30">Design</div>
  </div> */}
<div className="w-20 h-20 border border-black ml-40 rounded-r-full border-y-0  border-l-0" ></div>
<div className="w-20 h-20 border border-black ml-40  border-y-0  border-l-0" ></div>
</div>
  



    
  

    

    

     

    

  


  

  
  
    
  
    
  
    
  






  )

  
}
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
        id_span1.className = 'absolute w-0 group-hover:w-full hover:transition-all ease-in duration-300 delay-150 h-full bg-blue-700 left-0 top-0'
        
        

        // console.log("id_span1",e.target)
    }
    function callmeout(e){
        console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>",e)
        console.log("<<<<<<<<<<<<<,,>>>>>>>>>>>>>",e.target)
        
        var id_span2 = document.getElementById('in')
        console.log("id_span2",id_span2)
        id_span2.className = 'absolute w-0 group-hover:w-full transition-all ease-in duration-200 h-full bg-blue-700 right-0 bottom-0'
        
    }


    return(

        <div>

            {/* <h1>Button Effects</h1> */}
            {/* <div className='mt-12 -ml-8 bg-slate-100'> */}
            {/* <button className="ml-700 border-2 bg-white  text-black font-bold py-4 px-20 rounded-md static">GET STARTED </button><ArrowRightIcon className="h-7 w-5 ml-805 -mt-10 text-black hover:text-black rounded-full  transition ease-in-out delay-50 hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer"/> */}
            {/* <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"><ArrowRightIcon className="h-5 w-5 text-white"/>GET STARTED</button> */}
            {/* </div> */}
            {/* <div className='w-full h-40 mx-auto m-auto py-10 '>
            <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">  
            <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>  
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">    hover effect 2  </span>
            </button>
            </div>  */}
{/* 
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12  bg-slate-500">
            <div className="max-w-screen-xl mx-12 z-10">
            <button className="relative rounded-md border-2 border-white bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 mb-6">button one</button><br/>
            <a href="#_" className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-black no-underline align-middle bg-white border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-white focus-within:border-white">Button Text<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
            </div>
            </div> */}
         
         {/* <div className='text-white w-fit bg-green-400 h-fit p-10 ' id='name11' onMouseEnter={(e)=>{callme(e)}} onMouseLeave={(e)=>{callmeout(e)}}>Kaaaaaaaaaaaaa</div> */}
         <section className="w-full h-screen flex items-center justify-center bg-slate-200">
         <a onMouseEnter={(e)=>{callme(e)}} onMouseLeave={(e)=>{callmeout(e)}} className="relative rounded-md bg-white overflow-hidden  text-black px-5 py-2.5 group cursor-pointer">
         <span id="in" className=''></span>
         {/* <span id="out" className="absolute w-0 group-hover:w-full transition-all ease-in duration-[2000ms] h-full bg-black left-0 top-0"></span> */}
         {/* <span className="absolute w-0 group-hover:w-fixed transition-all ease-out duration-300 h-full bg-blue-700 "></span> */}
         <span className='relative'>Human Solutions<span id="arrow_move" className="ml-0"><ArrowRightIcon  className="w-4 h-4 ml-130 -mt-18 overflow-hidden  transition ease-in  hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer"/></span>
         </span>
         </a>
         </section>



{/* 
         
         <div className='text-white w-fit bg-green-400 h-fit p-10 ' id='name11' onMouseEnter={(e)=>{callme(e)}} onMouseLeave={(e)=>{callmeout(e)}}>Kaaaaaaaaaaaaa</div>
         <section className="w-full h-screen flex items-center justify-center bg-slate-200">
         <a className="relative rounded-md bg-white overflow-hidden  text-black px-5 py-2.5 group">
         <span id="in"  onMouseEnter={(e)=>{callme(e)}} className="absolute w-0 group-hover:w-full transition-all ease-in duration-300 h-full bg-red-700 left-0 top-0"></span>
         <span id="out" className="absolute w-0 group-hover:w-full transition-all ease-out duration-[2000ms] h-full bg-blue-700 left-0 top-0"></span>
         <span className="absolute w-0 group-hover:w-fixed transition-all ease-out duration-300 h-full bg-blue-700 "></span> 
         <span className='relative'>Human Solutions<svg className="w-4 h-4 ml-130 -mt-18 overflow-hidden  transition ease-in  hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer" fill="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
         </span>
         <span className='relative'>Human Solutions<svg id="arrow_move"  className="w-4 h-4 ml-130 -mt-18 overflow-hidden  transition ease-in  hover:translate-x-1 hover:scale-110 duration-200 cursor-pointer" fill="" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
         </span>
         </a>
         </section> */}
           
            


        </div>
    
            
    )
}

















































// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }

