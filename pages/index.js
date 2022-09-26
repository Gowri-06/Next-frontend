export default function Home(){
    return(
        <></>
    );
}

// import Image from "next/image"
// import Link from 'next/link'
// import { useEffect, useState } from "react"

// export default function Home() {

//     var kk = 0
//     useEffect(() => {
//         setInterval(() => {
//             document.getElementById("episyche").click()
//             console.log("setinterval")
//         }, 10000);

//     // function fill_canvas() {
//     //         // CREATE CANVAS CONTEXT.
//     //         var img = new Image();
//     //         img.src = 'D:/frontend_design/frontend/public/episyche_ball_image/episyche_logo.png';
//     //         var canvas = document.getElementById('canvas');
//     //         var ctx = canvas.getContext('2d');

//     //         // canvas.width = 5
//     //         // canvas.height = 5

//     //         ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
//     //     }
//         var canvas2 = document.getElementById("episyche");
//         function check(e) {
//             // console.log(e)
//             var canvas3 = document.getElementById("canvas");
//             // canvas3.style.top = e.clientY + "px";
//             // canvas3.style.left = e.clientX + "px";
//         }
//         // console.log(canvas2)
//         canvas2.onmouseover = check;
//         //   console.log(canvas2.mouseX,canvas2.mouseY)
//         var canvas1 = document.getElementById("episyche");
//         var canvas = document.getElementById("canvas");
//         var ctx = canvas.getContext("2d");
//         // ctx.drawImage(img,0,0);
//         var explosions = [];
//         var mouseX;
//         var mouseY;
//         canvas.addEventListener('mousemove', setMouse, false);
//         canvas1.addEventListener('click', function (e) {
//             console.log("???????????/", e.clientX, e.clientY)
//             explosions.push(new explosion(mouseX, mouseY));
//             // mouseX = e.clientX
//             // mouseY = e.clientY
//             mouseX = 180
//             mouseY = 185

//         }, false);

//         function loop() {

//             ctx.clearRect(0, 0, 500, 500);
//             drawExplosion();
//             requestAnimationFrame(loop);
//         }

//         loop();

//         function drawExplosion() {
//             if (explosions.length === 0) {
//                 return;
//             }

//             for (let i = 0; i < explosions.length; i++) {
//                 const explosion = explosions[i];
//                 const projectiles = explosion.projectiles;

//                 if (projectiles.length === 0) {
//                     explosions.splice(i, 1);
//                     return;
//                 }

//                 const projectilesRemove = projectiles.slice();

//                 for (let ii = 0; ii < projectiles.length; ii++) {
//                     const projectile = projectiles[ii];

//                     // remove projectile if radius is below 0
//                     if (projectile.radius < 0) {
//                         projectilesRemove.splice(ii, 1);
//                         continue;
//                     }

//                     var list_colour = ["red", "green", "yellow", "blue", "black"]
//                     // draw
//                     var radius = canvas.height / 2;
//                     ctx.beginPath();
//                     ctx.arc(projectile.x, projectile.y, projectile.radius, Math.PI * 2, 0, false);
//                     // ctx.arc(0, 0, radius, 0, 2*Math.PI,false);
//                     ctx.closePath();
//                     // ctx.fillStyle = 'hsl(' + projectile.h + ',' + projectile.s + '%,' + projectile.l + '%)';
//                     var gr = ctx.createLinearGradient(0, 100, 0, 200);
//                     // console.log(ctx)
//                     gr.addColorStop(0, list_colour[kk]);
//                     // gr.addColorStop(1, "yellow");
//                     ctx.fillStyle = gr;
//                     kk = kk + 1
//                     if (kk === 5) {
//                         kk = 0
//                     }
//                     ctx.fill();



//                     // update
//                     projectile.x -= projectile.vx * 1;
//                     projectile.y -= projectile.vy * 1;
//                     projectile.radius -= 0.02;


//                     // collisions
//                     if (projectile.x > 500) {
//                         projectile.x = 500;
//                         projectile.vx *= 1;
//                     }

//                     if (projectile.x < 0) {
//                         projectile.x = 0;
//                         projectile.vx *= 1;
//                     }

//                     if (projectile.y > 500) {
//                         projectile.y = 500;
//                         projectile.vy *= -1;
//                     }

//                     if (projectile.y < 0) {
//                         projectile.y = 0;
//                         projectile.vy *= -1;
//                     }
//                 }

//                 explosion.projectiles = projectilesRemove;
//             }
//         }

//         function explosion(x, y) {
//             this.projectiles = [];

//             for (let i = 0; i < 10; i++) {
//                 this.projectiles.push(
//                     new projectile(x, y)
//                 );
//             }
//         }

//         function projectile(x, y) {
//             this.x = x;
//             this.y = y;
//             this.radius = 2 + Math.random() * 4;
//             this.vx = -10 + Math.random() * 20;
//             this.vy = -10 + Math.random() * 20;
//             this.h = 200;
//             this.s = Math.floor((Math.random() * 100) + 70);
//             this.l = Math.floor((Math.random() * 70) + 30);
//         }

//         function setMouse(e) {
//             console.log(">>>>>>>>>>>>>>>>",e)
//             mouseX = e.offsetX;
//             mouseY = e.offsetY;
//         }

//     },[]);


//         return (
//         <>
//             <div className="absolute -left-2">
//             <div className="w-20 h-20 text-center">


//             <div className="h-fit text-center w-80 absolute  w-96 h-fit">
//             <canvas hidden width="500px" id="canvas" className=""></canvas>
//             </div>
//             <div className="relative top-32 left-36">
//             <Image id="episyche" className="ball" src="/logo.svg" width="50px" height="50px" alt="sswdwd"/>
//             </div>

//             </div>
//             </div>
            
//             <div className="bg-white w-96 h-40 absolute left-96">
//             </div>
//         </>

// )
// }
