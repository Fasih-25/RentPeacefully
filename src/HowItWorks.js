// import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import SecondSection from './Components/SecondSection'
import "./App.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faFile, faHomeLg, faStar, faWrench } from '@fortawesome/free-solid-svg-icons';
export default function HowItWorks() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
  }; 
  return (
    <div>
    <Navbar />
    <SecondSection />
    <div className='flex justify-center items-center pt-10'>
        <h1 className='text-5xl font-semibold text-center'>How RentalApp works?</h1>
    </div>
        <div>
            <section className="py-4 ">
                <div className="flex flex-col sm:flex-row bg-purple-400 py-3 mx-5  rounded shadowBox centerNav text-center justify-center items-center">
                    <button className={toggleState === 1 ? "text-white sm:w-1/3 bg-slate-900 bg-opacity-30 py-1 xxsm:px-12 xsm:px-16 px-20  sm:px-0 mx-3 text-center !outline-0 rounded" : "text-white sm:w-1/3 "} onClick={() => toggleTab(1)} > For Tenants </button>
                    <button className={toggleState === 2 ? "text-white sm:w-1/3 bg-slate-900 bg-opacity-30 py-1 xxsm:px-11 xsm:px-16 px-20 mt-2 sm:!mt-0 sm:px-0 mx-3 text-center !outline-0 rounded" : "text-white sm:w-1/3 mt-2 sm:!mt-0"} onClick={() => toggleTab(2)} > For Landlords </button> 
                    <button className={toggleState === 3 ? "text-white sm:w-1/3 bg-slate-900 bg-opacity-30 py-1 xxsm:px-5 xsm:px-10  px-16 mt-2 sm:!mt-0 sm:px-0 mx-3 text-center !outline-0 rounded" : "text-white sm:w-1/3 mt-2 sm:!mt-0"} onClick={() => toggleTab(3)} > For Service Providers </button>
                </div>
                <div className="">
                <div className="card shadowBox relative mx-3 -z-10 flex flex-col p-3">
                    <div className={toggleState === 1 ? "  flex-start " : "hidden"}>
                        <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                            <div className="md:text-center flex items-center justify-center lg:justify-start">
                                <img src={require('./assets/searchForProperties1.png')} className="" alt="" />
                            </div>
                            <div className=" md:justify-center pt-6 sm:!pt-0 lg:justify-start xl:pl-10 2xl:pl-60">
                            {/* <h4 className="text-green-600 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faHomeLg} className="text-green-600"></FontAwesomeIcon> Property </h4> */}
                            <h1 className="text-slate-700 text-center lg:!text-left text-2xl md:text-3xl mb-3  "><strong>Search for your dream property</strong></h1>
                            <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg lg:text-base lg:pr-6 xl:text-lg  ">Enter the country and city you are interested in, choose the most relevant result from a drop-down list, and go explore all the option you have.</p>
                            </div>
                            </div>
                            
                            <hr className="mb-5 mt-5 pb-3"></hr>
                            
                            <div className="flex flex-col-reverse lg:flex-row-reverse justify-evenly   pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-center lg:w-3/4 2xl:w-2/4">
                                    <img src={require('./assets/ApplyToday.jpg')} className="" alt="" />
                                </div>
                                <div className=" justify-center lg:!justify-center items-center ">
                                    {/* <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faChain} className="text-red-500"></FontAwesomeIcon> Signature</h4> */}
                                    <h1 className="text-slate-600 text-center lg:!text-center text-3xl md:text-3xl mb-4  "><strong>Submit a Rental Application </strong></h1>
                                    <p className="text-center mb-4 lg:!text-center lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Go to the property listing you like, press “Apply” button and follow the steps to apply for your favorite property.</p>
                                </div>
                            </div>
                            
                            <hr className="mb-5 mt-5 pb-3"></hr>

                            <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:items-start lg:justify-start  lg:w-full lg:h-full">
                                    <img src={require('./assets/contract1.png')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start lg:pl-5 xl:pl-10 2xl:pl-30 pt-4 lg:pt-0 ">
                                    {/* <h4 className="text-blue-800 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faFile} className="text-blue-800"></FontAwesomeIcon> Smart Contract </h4> */}
                                    <h1 className="text-slate-600 text-center lg:!text-left text-2xl md:text-3xl mb-3 px-6 md:px-0 "><strong>Approve/Sign Rental Agreement</strong></h1>
                                    <p className="text-center mb-4 lg:!text-left text-base lg:mt-6 md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                                    Once your application has being accepted, the Landlord will send you the Rental Aggreement details whose clauses are written in the smart contract and already saved publicly on the Ethereum network (you can read them there to verify). With your Ethereum wallet (which is created along with your account), you can sign the Rental Agreement. You need to have a small amount of Ether in your wallet for this, since the evidence of your signature is saved on the Ethereum Network.
                                        {/* <p className="pt-4"><strong>Clauses:</strong> The clauses are written in the Smart Contract, which are publicly visible and immutable in the Ethereum Network and displayed as a document on the platform for both parties.</p>
                                        <p className="pt-4"><strong>Escrow account:</strong> Deposit the rent payment to the Smart Contract escrow Account, this one will lock the payment once a maintenance request is submited. There's no need to appeal to a bank.</p>
                                        <p className="pt-4"><strong>Rental agreement activity processing:</strong> The contract will process all the rental agreement activities, such as: maintenance request, dispute mediation and arbitration and payment deposits. All the actions taken can be read on the Ethereum network and on the platform in a user-friendly way for both parties.</p> */}
                                    </p>
                                </div>  
                            </div>
                            <hr className="mb-5 mt-5 pb-3"></hr>
                            
                            <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 ">
                                <div className="container md:text-center flex md:items-center md:justify-center lg:justify-start w-full h-full">
                                    <img src={require('./assets/contract2.png')} className="" alt="" />
                                </div>
                                <div className="container md:justify-center lg:!justify-center items-center ">
                                    {/* <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faChain} className="text-red-500"></FontAwesomeIcon> Signature</h4> */}
                                    <h1 className="text-slate-600 text-center lg:!text-center text-3xl md:text-3xl mb-4  "><strong>Interact in your Rental Aggreement </strong></h1>
                                    <p className="text-center mb-4 lg:!text-center lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Open a ticket to submit a maintenance request, start a dispute with the Landlord and pay the rent. You need a small amount of Ether for this actions (except for the rent), since they are processed by the smart contract and the record is saved on the Ethereum Network. To pay the rent, you need to deposit the money to the smart contract escrow account, by just sending the money to the contract Ethereum address, this contract will hold the money instead of a bank, and it will even lock (freeze) the rent payment if you have a ticket open until you close it!!</p>
                                </div>
                            </div>
                            
                    </div>

                    <div className={toggleState === 2 ? "flex-start" : "hidden"} >
                        <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                            <div className="md:text-center flex md:items-center md:justify-center lg:justify-start shadowBox">
                                <img src={require('./assets/property1.jpg')} className="" alt="" />
                            </div>
                            <div className=" md:justify-center lg:justify-start lg:pl-8 xl:pl-10 2xl:pl-24 pt-6 sm:!pt-0">
                                {/* <h4 className="text-green-600 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faHomeLg} className="text-green-600"></FontAwesomeIcon> Property </h4> */}
                                <h1 className="text-slate-700 text-center lg:!text-left text-2xl md:text-3xl mb-3  "><strong>List your property</strong></h1>
                                <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg lg:text-base lg:pr-6 xl:text-lg  ">Listing a property for rent on RentPeacefully is quick and easy. Add your property in seconds with photos, description, and list of amenities. Post your rental listing on the platform to boost its visibility.</p>
                            </div>
                            </div>
                            
                            <hr className="mb-5 mt-5 pb-3"></hr>
                            
                            <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 lg:justify-evenly ">
                            <div className="md:text-center flex md:items-center md:justify-center lg:justify-center lg:w-3/4 2xl:w-2/4">
                                <img src={require('./assets/ApplyToday.jpg')} className="" alt="" />
                            </div>
                                <div className=" flex flex-col md:justify-center lg:justify-start ">
                                {/* <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faChain} className="text-red-500"></FontAwesomeIcon> Signature</h4> */}
                                <h1 className="text-slate-600 text-center  text-3xl md:text-3xl mb-4  "><strong>Receive Rental applications </strong></h1>
                                <p className="text-center mb-4 lg:!text-center  lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">View the list of applications submitted by potential tenants.</p>
                            </div>
                            </div>
                            
                            <hr className="mb-5 mt-5 pb-3"></hr>

                            <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:items-start lg:justify-start  lg:w-full lg:h-full">
                                    <img src={require('./assets/contract1.png')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start lg:pl-5 xl:pl-10 2xl:pl-30 pt-4 lg:pt-0 ">
                                    {/* <h4 className="text-blue-800 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faFile} className="text-blue-800"></FontAwesomeIcon> Smart Contract </h4> */}
                                    <h1 className="text-slate-600 text-center lg:!text-left text-2xl md:text-3xl mb-3 px-6 md:px-0 "><strong>Create Rental Aggrement and deploy Smart Contract</strong></h1>
                                    <p className="text-center mb-4 lg:!text-left text-base lg:mt-6 md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                                    Once you've accepted an application, you'll need to create the Smart Contract which will generate the Rental Aggreement document. Deploy the Smart Contract to the Ethereum Network, and send the Rental Aggreement details to the Tenant, so he/she can sign it. You can deploy your Contract with your Ethereum Wallet (Which is created along with your account). You need to have a small amount of Ether in your wallet for this, since the evidence of the Contract Creation is saved on the Ethereum Network.
                                        {/* <p className="pt-4"><strong>Clauses:</strong> The clauses are written in the Smart Contract, which are publicly visible and immutable in the Ethereum Network and displayed as a document on the platform for both parties.</p>
                                        <p className="pt-4"><strong>Escrow account:</strong> Deposit the rent payment to the Smart Contract escrow Account, this one will lock the payment once a maintenance request is submited. There's no need to appeal to a bank.</p>
                                        <p className="pt-4"><strong>Rental agreement activity processing:</strong> The contract will process all the rental agreement activities, such as: maintenance request, dispute mediation and arbitration and payment deposits. All the actions taken can be read on the Ethereum network and on the platform in a user-friendly way for both parties.</p> */}
                                    </p>
                                </div>  
                            </div>
                            <hr className="mb-5 mt-5 pb-3"></hr>
                            
                            <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 ">
                                <div className="container md:text-center flex md:items-center md:justify-center lg:justify-start w-full h-full">
                                    <img src={require('./assets/contract2.png')} className="" alt="" />
                                </div>
                                <div className="container md:justify-center lg:!justify-center items-center ">
                                    {/* <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faChain} className="text-red-500"></FontAwesomeIcon> Signature</h4> */}
                                    <h1 className="text-slate-600 text-center lg:!text-center text-3xl md:text-3xl mb-4  "><strong>Interact in your Rental Aggreement</strong></h1>
                                    <p className="text-center mb-4 lg:!text-center  lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Raise the rent, start a dispute with the Tenant and withdraw the payment. You need a small amount of Ether for this actions, since they are processed by the smart contract and the record is saved on the Ethereum Network. Withdraw the rent payment from the Smart Contract escrow account, this contract will hold the money instead of a bank!!</p>
                                </div>
                            </div>
                    </div>

                    <div className={toggleState === 3 ? "flex-start" : "hidden"} >
                        <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 justify-around 2xl:justify-start">
                            <div className="md:text-center flex items-center    justify-center lg:justify-center 2xl:pl-36">
                                <img src={require('./assets/service1.jpg')} className="" alt="" />
                            </div>
                            <div className=" md:justify-center lg:justify-start xl:pl-10 2xl:pl-96 2xl:ml-12">
                                {/* <h4 className="text-green-600 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faWrench} className="text-green-600"></FontAwesomeIcon> Services </h4> */}
                                <h1 className="text-slate-700 text-center lg:!text-left text-2xl md:text-3xl mb-3  "><strong>List your service</strong></h1>
                                <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg lg:text-base lg:pr-6 xl:text-lg  ">Listing a service on RentPeacefully is quick and easy. Add a brief description of the service you provide and wait to get contacted by a Landlord.</p>
                            </div>
                        </div>
                            
                            <hr className="mb-5 mt-5 pb-3"></hr>
                            
                            <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 justify-evenly  ">
                                <div className="container md:text-center flex md:items-center md:justify-center lg:justify-center  ">
                                    <img src={require('./assets/service2.jpg')} className="" alt="" />
                                </div>
                                <div className="container flex flex-col md:justify-center items-center lg:justify-start mb-20 2xl:-ml-56">
                                    {/* <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3 "><FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon> Score</h4> */}
                                    <h1 className="text-slate-600 text-center lg:!text-center text-3xl md:text-3xl mb-4  "><strong>Get rated </strong></h1>
                                    <p className="text-center 2xl:px-32 2xl:mx-28    mb-4 lg:!text-center lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Get a greater rating for your services once they're finished. The higher score, the greater are the chances to get hired again and your service ad will be in a higher position.</p>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    <Footer />
    </div>
  )
}
