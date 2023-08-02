import React from "react";
import Navbar from "./Navbar";
<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.js"></script>

const AboutUs = () => {
  return (
    <div name='about' className='w-full h-screen bg-[white] text-black-300'>
      
      <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ecc951]"> ABOUT US</p>
          </div>

        <div className="max-w-[4600px] w-full px-4 grid grid-cols-2 gap-8">
         
          
          <div className='max-w-[4500px] w-full grid sm:grid-cols-2 gap-8 px-7'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Why Husky Systers Code was formed?</p>
            </div>
            <div>
              <p>As women in the graduate school, we realized the need for a platform for all our female students to come together, 
                share, learn and grow. A platform that is a safe space for us to overcome our inhibitions and at the same time a space 
                that challenges us to be better versions of ourselves. When one woman helps another, amazing things can happen. 
                Our aim is to Encourage and Build a strong community for our fellow women, over a broad spectrum, right from building 
                strong fundamental technical skills to being articulate and confident about expressing their ideas and beliefs – enabling
                them to tap into their potential, their wisdom and apply it to real-world problem solving.</p>
            </div>
            {/* <div className='grid gap-4'>
             
              <img className="transition-opacity duration-1000 opacity-80 hover:opacity-100" src="/src/assets/image1.jpeg" alt="Image 1" />
              <img className="transition-opacity duration-1000 opacity-80 hover:opacity-100" src="/src/assets/image2.jpeg" alt="Image 2" />
              <img className="transition-opacity duration-1000 opacity-80 hover:opacity-100" src="/src/assets/image3.jpeg" alt="Image 3" />
            </div> */}


          </div>
          <div class="flex justify-between max-w-600 mx-auto">
             
             <img  src="/src/assets/image1.jpeg" alt="Image 1" />
             <img  src="/src/assets/image2.jpeg" alt="Image 2" />
             <img  src="/src/assets/image3.jpeg" alt="Image 3" />
          </div>
        </div>
        

      </div>

    </div>

  );
};

<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.js"></script>
export default AboutUs;