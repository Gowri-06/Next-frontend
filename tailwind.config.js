/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img1': "linear-gradient(to bottom, var(red 50%, black 50%));",
      },
      margin: {
        9: '9px',
        9.5: '9.5px',
        2:'2px',
        8:'8px',
        13:'13px',
        34:'34px',
        15: '15px',
        17: '17px',
        18: '18px',
        20: '20px',
        25: '25px',
        30: '30px',
        40: '40px',
        43: '43px',
        53: '53px',
        34: '34px',
        36: '36px',
        70: '70px',
        80: '80px',
        500: '500px',
        370: '370px',
        602: '602px',
        222: '222px',
        195: '195px',
        520: '520px',
        565: '565px',
        700:'600px',
        805:'805px',
        807:'807px',
        60:'60px',
        64:'64px',
        100:'100px',
        130:'130px',
        140:'140px',
        165:'165px',
        300:'300px',
        260:'260px',
        250:'250px',
        210:'210px',
        357:'357px',
        355:'355px',
        400:'400px',
        450:'450px',
        460:'460px',
        465:'465px',
        114:'114px',
        40:'40px',
        292:'292px',
        145:'145px',
        65:'65px',
        543:'543px',
        612:'612px',
        665:'665px',
        295:'295px',
   
        
      },
      spacing:{
        128: "550px",
      },
      borderRadius:{
        '4xl': '50px'
      },
      color: {
        borderdiv: '#ED1B52'
      },
      width: {
        '128': '66rem',
        '480': '480px',
        '30': '30px',
        '288':'288px',
        '490':'490px',
        '300':'300px',
        
      },
      height: {
        
        '50': '50px',
        '310': '310px',
        '320': '320px',
        '300': '300px',
        '380': '380px',
        '500': '500px',
        '800': '800px',
        '900': '900px',
        
      },
      translate: {
        '-2': '2rem',
      },
      colors: {
        'blue-opt': '#5b21b6',
        'blue-thick':'#7e22ce',
        'orange':'#f97316',
        'grey':'#171717',
        'dustgrey':'#e4e4e7',
      },
      maxWidth: {
        '240': '240px',
        '220': '220px',
        '260': '260px',
        '360': '360px',
      },
      
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

// plugins: [
// 		require("tailwindcss-animate"),
// 		// ...
// 	],
