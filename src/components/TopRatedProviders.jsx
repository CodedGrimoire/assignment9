import React, { useEffect, useState } from "react";
import "animate.css";


import prooovidersData from "../assets/topProviders.json";
import radius from "daisyui/utilities/radius";

const TopRatedProviders = () => {


  const [tprov, setProhvidersteac] = useState([]);


  useEffect(() => {
    setProhvidersteac(prooovidersData);
  }, []);

  return (
    <section
      className="animate__animated animate__fadeIn"

      style={{
        textAlign: "center",  marginTop: "4rem",

        
        padding: "3rem 1rem", background: "white",        borderRadius: "10px",
       
       
      }}
    >
      <h2
        style={{
          fontSize: "2rem",

           marginBottom: "2rem", fontWeight: "600",
         

          
          color: "black",
        }}
      >

        Top Rated Providers </h2>
     

      <div
        style={{
          display: "flex",  gap: "20px",   justifyContent: "center",

         
        


          flexWrap: "wrap",
          
        }}
      >
        {tprov.map((provider, index) => (
          <div
            key={index}

            className="animate__animated animate__fadeInUp"
            style={{
              width: "251px",   paddingBottom: "2rem",

              
              background: "white",

            
             

              borderRadius: radius.md,   overflow: "hidden",
             
            }}
          >
            <img
              src={provider.image}   alt=""

            


              style={{

                borderRadius:"50%",
                width: "180px",
               
               
                 objectFit: "cover",

                  height: "180px",
              

                
               
              }}


            />
            <h3 style={{ marginTop: "1.5rem", 
              
              
              fontSize: "1.3rem" ,color: "#111010ff"}}>
              {provider.name}
            </h3>
            <p style={{ color: "#403e3eff", margin: "6px 0" }}>{provider.skill}

            </p>

            <p style={{ color: "#020815ff", fontWeight: "600" }}>
               {provider.rating} ⭐⭐⭐ </p> </div>
           
         
        ))}
      </div>  </section>
   
  );
};

export default TopRatedProviders;
