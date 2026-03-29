import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';



function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftImage imageURL="media\kite.png"  productName="Kite" produtDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemolearnMore="" googlePay="" appStore=""/>
        <RightImage  imageURL="media\console.png"  productName="Console" produtDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>
        <LeftImage imageURL="media\coin.png"  productName="Coin" produtDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemolearnMore="" googlePay="" appStore=""/>
        <RightImage imageURL="media\kiteconnect.png"  productName="Kite Connect API" produtDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore=""/>
        <LeftImage imageURL="media\varsity.png"  productName="Varsity mobile" produtDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemolearnMore="" googlePay="" appStore=""/>
        <p className='text-center fs-5 mt-5'>Want to know more about our technology stack? Check out the <a   style={{textDecoration:"none"}}href=''>Zerodha.tech</a> blog.</p>
        
        <Universe/>
        
        </>
     );
}

export default ProductPage;