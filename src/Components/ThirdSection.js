import React from 'react'
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank, faCode, faMoneyBill, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

export default function ThirdSection() {
  return (
    <div>
      <div className='container pb-5 pt-5'>
        <section className='flex flex-col justify-center items-center'>
           <div className='flex flex-col'>
            <div className='flex flex-col lg:flex-row justify-around 2xl:justify-around '>
              <div className='flex items-center justify-center'>
                <h2 className='font-bold text-black text-center text-5xl  lg:text-4xl pb-2'>Why is RentalApp so great?</h2>
              </div>
              <div className=" flex justify-center items-center mt-3">
                  <div className="flex justify-center items-center">
                      <img src={require('../assets/contract3.png')}  alt="" />
                  </div>
              </div>
            </div>
            <p className=' py-8 !px-12 mb-5 pb-3 text-gray-400 text-xl md:text-xl md:!px-20 lg:text-lg lg:!px-12 xl:text-xl xl:!px-32 2xl:!px-64 text-center'>Built with blockchain Technology and Smart Contracts, which makes it the most transparent process possible and fosters trust between the parties.</p>
            </div>
            <div className="container row flex flex-row justify-center items-center  px-5">
                <div className="flex justify-center flex-col sm:w-1/3 px-1">
                    <FontAwesomeIcon icon={faBank} className="text-5xl text-red-600"></FontAwesomeIcon>
                    <h1 className='font-bold mt-3 text-xl text-center'>Safety</h1>
                    <p className='text-center text-slate-400'>All the activities and transactions are saved and publicly visible on the Ethereum Network.</p>
                </div>
                <div className="flex justify-center items-center flex-col sm:w-1/3 pt-4 sm:!pt-0 px-1">
                    <FontAwesomeIcon icon={faCode} className="text-5xl text-cyan-400"></FontAwesomeIcon>
                    <h1 className='font-bold mt-3 text-xl text-center'>Technology</h1>
                    <p className='text-center text-slate-400'>Rental Agreement created within minutes. All of its clasuses are saved on the Ethereum Blockchain.</p>
                </div>
                <div className="flex justify-center items-center flex-col sm:w-1/3 pt-4 sm:!pt-4 px-1 mt-1">
                    <FontAwesomeIcon icon={faMoneyBillAlt} className="text-5xl text-orange-400"></FontAwesomeIcon>
                    <h1 className='font-bold mt-3 text-xl text-center'>Finance</h1>
                    <p className='text-center text-slate-400'>There's no need to deposit the payment to a bank account anymore. A Smart Contract created by the Tenant and Approved by the Landlord will hold it for you.</p>
                </div>
            </div>

        </section>
      </div>
      <hr className='mb-5 mt-5 pb-3' />
    </div>
  )
}
