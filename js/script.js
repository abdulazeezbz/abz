
    var m = 0
        const menu = ()=>{
            

            if (m==0) {
                // Open
                document.querySelector(".nav .phone").style.display= "flex";
                document.querySelector(".nav .phone.b").style.display= "flex";
                document.querySelector(".pop").style.display= "flex";

                // set m = 1
                m = 1
                console.log(m)
            }else {
                if(m == 1){
                // close
                document.querySelector(".nav .phone").style.display= "none";
                document.querySelector(".nav .phone.b").style.display= "none";
                document.querySelector(".pop").style.display= "none";

                m = 0

                
            }
            }
        }



        const github = ()=>{
            window.location.href = 'https://github.com/abdulazeezbz'
        }


        const linkedin = ()=>{
            window.location.href = 'https://www.linkedin.com/in/abdulazeezabz/'
        }

         const twitter = ()=>{
            window.location.href = 'https://x.com/abdoulazeez_abz'
        }