
import React from "react";
import Loader from 'react-loader-spinner'


 function Loading() {
     return (
       <div style={{display: "flex", justifyContent: "center", textAlign: "center", marginTop: "6px"}}>
        <Loader
         type="ThreeDots"
         color="#000000"
         height={30}
         width={200}
         timeout={500000}
      />
      </div>
     )
 }


 export default Loading
