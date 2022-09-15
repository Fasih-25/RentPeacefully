import { React, useState } from "react";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round"  d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
 export default function FAQs() {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
    return (
     <div>
        <Navbar />
        <div className='text-center bg-sky-400 text-slate-50 flex flex-row justify-around  shadowBox' >
            <h2 className='lg:text-2xl py-2 xl:text-3xl xl:!py-4 '> Frequently Asked Questions (FAQ)</h2>    
        </div>
        <div className='py-10 px-3 lg:!px-10 xl:!px-20 2xl:!px-40 flex flex-col mb-5'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold text-3xl pb-6'>General</h1>
                <div className="accordion w-full  " id="accordionExample" >
                    <div className="accordion-item shadowBox" >
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         What's RentPeacefully? 
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-center text-sm 2xl:text-base md:px-14 ">
                            RentPeacefully is a blockchain based platform which enables Landlord to list properties for rent, successively create an easy, securely and safely Smart Contract and then deploy it to the public Ethereum Network, which will only work once both Parties have signed the agreement with their blockchain private keys. Built with blockchain Technology and Smart Contracts, which makes it the most transparent process possible and fosters trust between the parties.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How RentPeacefully works? 
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body  text-center text-sm 2xl:text-base md:px-14 ">
                            Please, check our how-it-works section by  <a className="hover:underline text-blue-500" href="/FAQs">Click Here</a>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingThree">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What's Ethereum? 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.These apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingFour">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                             What's a Smart Contract?  
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingFive">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What's the difference between Traditional Contracts and Smart Contracts?   
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body flex justify-center items-center text-center text-sm 2xl:text-base md:px-14">
                             <img src={require('./assets/contract5.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingSix">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Why do I have an Ethereum Wallet created along with my account?   
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            <p className="font-semibold">A wallet is created along with your account for the following reasons: </p>
                            {/* <ul class="text-left pt-2 "> */}
                                <li className="text-left"> It's required to have an address/private key which can identify the user in the Ethereum Network, for example for blockchain signatures. </li>
                                <li className="text-left"> Contract creation, and interaction with it (for example, deposits, withdrawals, disputes,etc.) costs miner fee in the Ethereum Network, so the contract can process the action and save the record in the blockchain. </li>
                            {/* </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingSeven">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Can I use my wallet outside the platform to interact with my Rental Agreement Smart Contract?  
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                                Yes, you can export your wallet file and use it in other platforms, to interact with your contract, these also includes, parity wallet and mist. However, it's obviously easier to use the wallet inside the platform since it has a built-in interface for your exact needs. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingEight">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            Are the Rental Aggreement clauses written in the Smart Contract? 
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Yes!, The rental aggreement document is generated based on the clauses saved in the smart contract which resides in the Ethereum network, so they are also visible through a blockchain explorer, you'll be provided with the contract source code, abi, and all related info. However, since the clauses are saved in the form of numbers, to know what it means it's a bit tricky, so a tutorial will be provided soon so you can read it easily. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingNine">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            How Smart Contract Escrow account works? 
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Besides saving the clauses, the smart contract is also capable of saving the rent payment for you, so there's no need to deposit the payment to a bank account anymore. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="headingTen">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            Can I see the record of the activities in my Rental Aggreement in a blockchain explorer?  
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Yes, every action taken is a transaction saved on blockchain, however, RentPeacefully offers a user-friendly interface so you can see it much understandably. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading11">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                            What happens if a ticket is open at the moment of a payment? 
                            </button>
                        </h2>
                        <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            The paymement will be locked until the ticket is closed. The ticket can be closed either by the Tenant or an admin. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading12">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                            What cryptocurrencies does the platform support? 
                            </button>
                        </h2>
                        <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Ethereum is the only cryptocurrency supported for the moment, since it's used to deploy the smart contract, however, we'll be adding more cryptocurrencies which meet this requirement soon. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading13">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                            When can I get access to the panel/dashboard?  
                            </button>
                        </h2>
                        <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Any type of entity (Landlord, Tenant or Service provider) can get an access to their Admin panel or dashboard once we approve them on their request so they have to provide most of the information in the initial form and before we approve them, it is necessary to get their email verified. 
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2" />
                </div>
                
                
                <h1 className='font-bold text-3xl pt-12 pb-6'>Landlord</h1>
                <div className="accordion w-full  " id="accordionExample" >
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading14">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                            Can I list my property on RentPeacefully?  
                            </button>
                        </h2>
                        <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Yes, you can. Set your guide price, select amenities, add a brief description and add beautiful pictures of it
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading15">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                Why do I have to pay a fee to deploy the Smart Contract and interact in my Rental Aggreement with it?  
                            </button>
                        </h2>
                        <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Every Smart Contract created is saved in the Ethereum blockchain in a transaction, and every transaction in the network costs as small miner fee so it can be saved in the blockchain. The same happens with the actions taken in the Rental Aggreement since they are processes in the form of Ethereum transactions and its record is saved. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading16">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                            What can I do with my Ethereum Wallet?   
                            </button>
                        </h2>
                        <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            For Landlords, it's possible to raise the rent, start a dispute, and withdraw the payment from the Smart Contract Escrow Account. This actions are processed in Ethereum transactions and saved in the blockchain, so it costs a small miner fee for processing. 
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2" />
                </div>


                <h1 className='font-bold text-3xl pt-12 pb-6'>Tenants</h1>
                <div className="accordion w-full  " id="accordionExample" >
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading17">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                            Can I rent a property on RentPeacefully?  
                            </button>
                        </h2>
                        <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Yes, you can. Know the property you want to rent, the amenities it offers, price, rules and more.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading18">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                            Why do I have to pay a fee to interact in my Rental Aggreement with the Smart Contract? 
                            </button>
                        </h2>
                        <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                                Every action taken is processed by the Ethereum network and also generates a record which is saved in the Ethereum blockchain in a transaction, and every transaction in the network costs as small miner fee so it can be saved in the blockchain. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading19">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                            What can I do with my Ethereum Wallet?    
                            </button>
                        </h2>
                        <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            For Tenants, it's possible to open a maintenance service request ticket, start a dispute, and deposit the payment from the Smart Contract Escrow Account. This actions are processed in Ethereum transactions and saved in the blockchain, so it costs a small miner fee for processing. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading20">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                            Can I also deposit just by sending the money to the smart contract address?    
                            </button>
                        </h2>
                        <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Yes. You just need to send the payment to the Smart Contract Address from any wallet (a friend can deposit for you) and this one will automatically process your payment. 
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2" />
                </div>


                <h1 className='font-bold text-3xl pt-12 pb-6'>Service Provider</h1>
                <div className="accordion w-full  " id="accordionExample" >
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading21">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                            Can I list the services I provide on RentPeacefully? 
                            </button>
                        </h2>
                        <div id="collapse21" className="accordion-collapse collapse" aria-labelledby="heading21" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Yes, you can. Once your service is listed you must wait until you get hired by a Landlord .
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item shadowBox mt-2" >
                        <h2 className="accordion-header " id="heading22">
                            <button className="accordion-button collapsed text-sky-500 2xl:text-lg" type="button"  data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                            What does the score mean? 
                            </button>
                        </h2>
                        <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-center text-sm 2xl:text-base md:px-14">
                            Your score indicates how good you're at your job according to the Landlord and Tenant opinion you've worked with. The higher score, the higher are the chances to get hired again and your service ad will be in a higher position.
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2" />
                </div>
            </div>
        </div>
        <Footer />
     </div>
   )
 }
 