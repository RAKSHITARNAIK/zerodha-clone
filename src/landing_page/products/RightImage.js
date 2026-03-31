import React from 'react';
function RightImage({imageURL, productName,produtDescription,learnMore}) {
    return ( 
        <div className='container '>
            <div className='row  '>
                
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{produtDescription}</p>
                    <div>
                        <a href={learnMore} >learn More</a>
                    </div>
                </div>
                <div className='col-6 '>
                    <img src={imageURL} ></img>
                </div>
                    
            </div>
        </div>
     );
}

export default RightImage;