import React from 'react'
import { GoPrimitiveDot } from "react-icons/go"
import { billsData, SparklineAreaData } from '../../assets/FakeData'
import { SparkLine } from '../../components/Charts/SparkLine'
import Starked from '../../components/Charts/Starked'

const AdminDashboard = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-[url('./assets/admin.png')] bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-blue-600'>
                Total Bills
              </p>
              <p className='text-3xl font-bold'>
                $103,00.00
              </p>
            </div>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {billsData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-main-dark-bg md:w-56 m-auto p-4 pt-9 rounded-2xl">
              <button type="button" className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl" style={{ color: item.iconColor, backgroundColor: item.iconBg }}>
                {item.icon}
              </button>
              <p className="mt-3"><span className="text-lg font-semibold">{item.amount}</span><span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}</span></p>
            </div>
          ))}
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className="flex justify-between">
              <p className="font-semibold">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className=" flex items-center gap-2 text-red-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expenses</span>
                </p>
                <p className=" flex items-center gap-2 text-blue-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-rap justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p className="flex items-center">
                    <span className="text-3xl font-semibold">$75,000.00</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-blue-400 ml-3 text-xs ">%15</span>
                  </p>
                  <p className="text-gray-600 mt-1">Budget</p>
                </div>
                <div className="mt-6">
                  <p className="flex items-center">
                    <span className="text-3xl font-semibold">$30,000.00</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white ml-3 bg-red-600 text-xs ">%30</span>
                  </p>
                  <p className="text-gray-600 mt-1">Expenses</p>
                </div>
                <div className="mt-6">
                  <SparkLine
                    currentColor="blue"
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color="blue"
                  />
                </div>
              </div>

              <div>
                <Starked width="320px" height="360px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AdminDashboard }