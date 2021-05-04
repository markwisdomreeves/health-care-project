import React from 'react';


const pageNotFound = {
    width: "80%",
    height: "80%",
    padding: "30px",
    marginTop: "50px",
    margin: "0 auto",
}

const PageNotFoundImgWidth = {
    width: "50%",
    maxHeight: "50%"
}

// eslint-disable-next-line
const PageNotFoundScreen = () => {
    return (
        <div style={pageNotFound}>
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160237/realEstateImages/PageNotFoundImg_hxi4ta.png"
          alt="Page404"
          style={PageNotFoundImgWidth} />
          <h5 style={{textAlign: "center", color: "brown"}}>Page Not Found</h5>
        </div>
    )
}


export default PageNotFoundScreen
