import "../App.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faFile, faHomeLg, faStar, faWrench } from '@fortawesome/free-solid-svg-icons';

export default function NavCenter() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
  }; 
  
    return (
        <>
        <div>
            <div>
                <section className="py-4 ">
                    <div className="flex flex-col sm:flex-row bg-teal-500 py-3 mx-5  rounded shadowBox centerNav text-center justify-center items-center">
                        <button className={toggleState === 1 ? "text-white sm:w-1/3 bg-teal-700 py-1 px-24  sm:px-0 mx-3 text-center !outline-0 rounded" : "text-white sm:w-1/3 "} onClick={() => toggleTab(1)} > For Tenants </button>
                        <button className={toggleState === 2 ? "text-white sm:w-1/3 bg-teal-700 py-1 px-24 mt-2 sm:!mt-0 sm:px-0 mx-3 text-center !outline-0 rounded" : "text-white sm:w-1/3 mt-2 sm:!mt-0"} onClick={() => toggleTab(2)} > For Landlords </button> 
                        <button className={toggleState === 3 ? "text-white sm:w-1/3 bg-teal-700 py-1 px-16 mt-2 sm:!mt-0 sm:px-0 mx-3 text-center !outline-0 rounded" : "text-white sm:w-1/3 mt-2 sm:!mt-0"} onClick={() => toggleTab(3)} > For Service Providers </button>
                    </div>
                    <div className="">
                    <div className="card shadowBox relative mx-3 -z-10 flex flex-col p-3">
                        <div className={toggleState === 1 ? "  flex-start " : "hidden"}>
                            <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-start">
                                    <img src={require('../assets/property2.jpg')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start xl:pl-10 2xl:pl-60">
                                <h4 className="text-green-600 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faHomeLg} className="text-green-600"></FontAwesomeIcon> Property </h4>
                                <h1 className="text-slate-700 text-center lg:!text-left text-2xl md:text-3xl mb-3  "><strong>Know all the property details before applying</strong></h1>
                                <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg lg:text-base lg:pr-6 xl:text-lg  ">Know the property you want to rent, the amenities it offers, price, rules and more.</p>
                                </div>
                             </div>
                             
                             <hr className="mb-5 mt-5 pb-3"></hr>
                             
                             <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-start lg:w-3/4 2xl:w-2/4">
                                    <img src={require('../assets/keyman1.jpg')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start ">
                                <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faChain} className="text-red-500"></FontAwesomeIcon> Signature</h4>
                                <h1 className="text-slate-600 text-center lg:!text-left text-3xl md:text-3xl mb-4  "><strong>Blockchain Signature </strong></h1>
                                <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Sign the Residential Lease Agreement with your blockchain private key. The Signature will be publicly visible and immutable in the Ethereum Network.</p>
                                </div>
                             </div>
                             
                             <hr className="mb-5 mt-5 pb-3"></hr>

                             <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:items-start lg:justify-start  lg:w-full lg:h-full">
                                    <img src={require('../assets/contract2.png')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start lg:pl-5 xl:pl-10 2xl:pl-30 pt-4 lg:pt-0 ">
                                    <h4 className="text-blue-800 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faFile} className="text-blue-800"></FontAwesomeIcon> Smart Contract </h4>
                                    <h1 className="text-slate-600 text-center lg:!text-left text-2xl md:text-3xl mb-3 px-6 md:px-0 "><strong>The answer: Smart Contracts!</strong></h1>
                                    <p className="text-center mb-4 lg:!text-left text-base lg:mt-6 md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                                        <p className="pt-4"><strong>Clauses:</strong> The clauses are written in the Smart Contract, which are publicly visible and immutable in the Ethereum Network and displayed as a document on the platform for both parties.</p>
                                        <p className="pt-4"><strong>Escrow account:</strong> Deposit the rent payment to the Smart Contract escrow Account, this one will lock the payment once a maintenance request is submited. There's no need to appeal to a bank.</p>
                                        <p className="pt-4"><strong>Rental agreement activity processing:</strong> The contract will process all the rental agreement activities, such as: maintenance request, dispute mediation and arbitration and payment deposits. All the actions taken can be read on the Ethereum network and on the platform in a user-friendly way for both parties.</p>
                                    </p>
                                </div>
                             </div>
                             
                        </div>

                        <div className={toggleState === 2 ? "flex-start" : "hidden"} >
                            <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-start shadowBox">
                                    <img src={require('../assets/property1.jpg')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start lg:pl-8 xl:pl-10 2xl:pl-24">
                                    <h4 className="text-green-600 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faHomeLg} className="text-green-600"></FontAwesomeIcon> Property </h4>
                                    <h1 className="text-slate-700 text-center lg:!text-left text-2xl md:text-3xl mb-3  "><strong>Add Property</strong></h1>
                                    <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg lg:text-base lg:pr-6 xl:text-lg  ">Tell us about your property. Set your guide price, select amenities, add a brief description and add beautiful pictures of it.</p>
                                </div>
                             </div>
                             
                             <hr className="mb-5 mt-5 pb-3"></hr>
                             
                             <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 ">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-start lg:w-3/4 2xl:w-2/4">
                                    <img src={require('../assets/keyman2.jpg')} className="" alt="" />
                                </div>
                                    <div className=" md:justify-center lg:justify-start ">
                                    <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faChain} className="text-red-500"></FontAwesomeIcon> Signature</h4>
                                    <h1 className="text-slate-600 text-center lg:!text-left text-3xl md:text-3xl mb-4  "><strong>Blockchain Signature </strong></h1>
                                    <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Sign the Residential Lease Agreement with your blockchain private key. The Signature will be publicly visible and immutable in the Ethereum Network.</p>
                                </div>
                             </div>
                             
                             <hr className="mb-5 mt-5 pb-3"></hr>

                             <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 ">
                                <div className="contract4 md:text-center flex md:items-center md:justify-center lg:items-start lg:justify-start lg:w-full">
                                    <img src={require('../assets/contract4.png')} className="h-full " alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start lg:pl-5 xl:pl-10 2xl:pl-30 pt-4 lg:pt-0 2xl:pl-0  ">
                                    <h4 className="text-blue-800 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faFile} className="text-blue-800"></FontAwesomeIcon> Smart Contract </h4>
                                    <h1 className="text-slate-600 text-center lg:!text-left text-2xl md:text-3xl mb-3 px-6 md:px-0 "><strong>The answer: Smart Contracts!</strong></h1>
                                    <p className="text-center mb-4 lg:!text-left text-base lg:mt-6 md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                                        <p className="pt-4"><strong>Clauses:</strong> The clauses are written in the Smart Contract, which are publicly visible and immutable in the Ethereum Network and displayed as a document on the platform for both parties.</p>
                                        <p className="pt-4"><strong>Escrow account:</strong> Deposit the rent payment to the Smart Contract escrow Account, this one will lock the payment once a maintenance request is submited. There's no need to appeal to a bank.</p>
                                        <p className="pt-4"><strong>Rental agreement activity processing:</strong> The contract will process all the rental agreement activities, such as: maintenance request, dispute mediation and arbitration and payment deposits. All the actions taken can be read on the Ethereum network and on the platform in a user-friendly way for both parties.</p>
                                    </p>
                                </div>
                             </div>
                        </div>

                        <div className={toggleState === 3 ? "flex-start" : "hidden"} >
                            <div className="flex flex-col lg:flex-row pt-14 xl:pl-7 justify-around 2xl:justify-start">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-center">
                                    <img src={require('../assets/service1.jpg')} className="" alt="" />
                                </div>
                                <div className=" md:justify-center lg:justify-start xl:pl-10 2xl:pl-96 2xl:ml-12">
                                    <h4 className="text-green-600 font-bold text-center lg:!text-left mb-3"><FontAwesomeIcon icon={faWrench} className="text-green-600"></FontAwesomeIcon> Services </h4>
                                    <h1 className="text-slate-700 text-center lg:!text-left text-2xl md:text-3xl mb-3  "><strong>List Services</strong></h1>
                                    <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg lg:text-base lg:pr-6 xl:text-lg  ">List the services you offer and get hired by a Landlord.</p>
                                </div>
                            </div>
                             
                             <hr className="mb-5 mt-5 pb-3"></hr>
                             
                             <div className="flex flex-col-reverse lg:flex-row-reverse pt-14 xl:pl-7 justify-around">
                                <div className="md:text-center flex md:items-center md:justify-center lg:justify-end  ">
                                    <img src={require('../assets/service2.jpg')} className="" alt="" />
                                </div>
                                    <div className=" md:justify-center lg:justify-start mb-20 -ml-56">
                                        <h4 className="text-red-500 font-bold text-center lg:!text-left mb-3 "><FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon> Score</h4>
                                        <h1 className="text-slate-600 text-center lg:!text-left text-3xl md:text-3xl mb-4  "><strong>Get a Score </strong></h1>
                                        <p className="text-center mb-4 lg:!text-left lg:mt-6 md:text-lg xl:text-lg lg:text-base 2xl:text-sm">Get a great score for your services so your service ad can reach more Landlords.</p>
                                    </div>
                             </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
  }
