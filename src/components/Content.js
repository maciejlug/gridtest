import React from 'react'






const Content = () => {
    return(
        
    <div className="contentblock">
        <source className="video" src="photos/rain.mp4" type="video/mp4"/>
        <div className="titletext">
            
            <div className="titletext2">
                <p>urban photography by niko moreno</p>
            </div>
        </div>
        <div className="photosection">
            <div className="photoleft-1">
                <img src="photos/zd1.jpg"></img>
            </div>
            <div className="textright-1">SAN FRANCISCO IN LONG EXPOSURE</div>
                <div className="buttonarea-1">
                    <a className="button-works"href="#">VIEW GALLERY</a>
                </div>

            <div className="photoright-2">
                <img src="photos/zd2.jpg"></img>
            </div>
            <div className="textleft-2">SOMBRE SIDE OF CHICAGO</div>
                <div className="buttonarea-2">
                        <a className="button-works"href="#">VIEW GALLERY</a>
                    </div>
           

            <div className="photoleft-3">
              <img src="photos/zd3.jpg"></img>
            </div>
            <div className="textright-3">BERLIN’S METRO STATIONS</div>
                <div className="buttonarea-3">
                        <a className="button-works"href="#">VIEW GALLERY</a>
                    </div>  
            

            <div className="photoright-4">
               <img src="photos/zd4.jpg"></img>
            </div>
            <div className="textleft-4">JUXTAPOSITIONING IN PARIS</div>
                <div className="buttonarea-4">
                        <a className="button-works"href="#">VIEW GALLERY</a>
                    </div>
            

            <div className="photoleft-5">
              <img src="photos/zd5.jpg"></img>
            </div>
            <div className="textright-5">MODERN ART ON THE STREETS OF NYC</div>
                <div className="buttonarea-5">
                        <a className="button-works"href="#">VIEW GALLERY</a>
                    </div>
            
            
            <div className="photoright-6">
                <img src="photos/zd6.jpg"></img>
            </div>
            <div className="textleft-6">TOKYO MINIMALISTIC EXPERIMENTS</div>
                <div className="buttonarea-6">
                        <a className="button-works"href="#">VIEW GALLERY</a>
                    </div>
            </div>
       
       <div className="footer"></div>
       
    </div>


    )
}

export default Content;