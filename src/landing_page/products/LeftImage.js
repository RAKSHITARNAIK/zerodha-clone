import React from 'react';
function LeftImage({imageURL, productName,produtDescription,tryDemo,learnMore,googlePay,appStore}) {
    return ( 
        <div className='container  '>
            <div className='row  '>
                <div className='col-6 '>
                    <img src={imageURL} ></img>
                    </div>
                    
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{produtDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePay}><img src="media/googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="media\appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                    </div>
                    </div>
                </div>
     );
}

export default LeftImage;