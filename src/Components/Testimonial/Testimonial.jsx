import React from "react";
import "./Testimonial.css";
import {Swiper,SwiperSlide} from "swiper/react"
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {
   const  clients=[
    {
      img: profilePic1,
      review:
      
           
            "text of Lorem Ipsum is simply dummy text of"                                                                                                                                                                                                                                                                                                   
             

      },

      {
        img: profilePic2,
        review:
        
             
              "Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of"                                                                                                                                                                                                                                                                                                   
               
        },

        {
        img: profilePic3,
        review:
            
                 
                  "Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of"                                                                                                                                                                                                                                                                                                    
                    
            },

            {
                img: profilePic4,
                review:
                
                     
                      "Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of"                                                                                                                                                                                                                                                                                                    
                       
                },
     ]




  return (
   <div className="t-wrapper">
    <div className="t-heading">
    <span>Client always get</span>
    <span>Exceptional WOrk</span>
    <span>from me</span>
  <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
  <div className="blur t-blur2" style={{background: "skyblue"}}></div>
   </div>
   {/* slider */}
   <Swiper
   modules={[Pagination]}
   slidesPerView={1}
   pagination={{clickable:true}}
   
   >
    {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
              <div className="testimonial" id='Testimonials'>
                <img src={client.img}  alt="" />
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        );
    })}

   </Swiper>


</div>
  );
};

export default Testimonial
