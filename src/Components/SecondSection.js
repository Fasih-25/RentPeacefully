import React from 'react'
import "../App.css";

export default function SecondSection() {
  return (
    <div className='pt-5 flex flex-col justify-center text-white bg-teal-500 md:px-20 lg:px-40 xl:px-48 2xl:px-64'>
        <h2 className='col-12 mb-5 pt-4 text-center font-bold text-4xl md:'>What is RentalApp?</h2>
        <h5 className='text-center mb-3 pb-6 lg:text-lg 2xl:text-xl  px-5 '>RentPeacefully is a blockchain based platform which enables Landlord to list properties for rent, successively create an easy, securely and safely Smart Contract and then deploy it to the public Ethereum Network, which will only work once both Parties have signed the agreement with their blockchain private keys. Also, Service Providers are allowed to sign up.</h5>      
    </div>
  )
}
