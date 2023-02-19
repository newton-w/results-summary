import React from "react"
import Reaction from './images/icon-reaction.svg'
import Memory from './images/icon-memory.svg'
import Verbal from './images/icon-verbal.svg'
import Visual from './images/icon-visual.svg'
import github from './images/github.svg'
import { useMotionValue, useTransform, motion } from 'framer-motion'

function App() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [20, -20])
  const rotateY = useTransform(x, [-100, 100], [-20, 20])
  return (
    <main>
      <div className=" bg-raindrops bg-no-repeat bg-cover backdrop-blur-sm flex items-center justify-center lg:h-screen">
        <motion.div
          style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 100 }}
          drag
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          className=" backdrop-blur-sm bg-White/70 flex flex-col items-center justify-center lg:flex-row w-[23.438rem] h-[50.5rem] hover:shadow-xl hover:duration-300 lg:w-[46.063rem] lg:h-[32.063rem] lg:rounded-[1.875rem] ">
          <div
            className="flex flex-col items-center text-White text-center font-Hanken w-[23.438rem] h-[22.188rem] bg-gradient-to-b from-Lightroyalblue to-lightSlateBlue rounded-b-[1.875rem] pt-7 lg:rounded-[1.875rem] lg:h-full lg:w-[23.063rem] lg:pt-11">
            <h1 className=" text-lg">Your Result</h1>
            <div className="my-7 lg:mt-[2.625rem] lg:mb-9">
              <motion.div
                 style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 10000 }}
                
                className="gap-5 bg-gradient-to-b from-CobaltBlue to-VioletBlue w-[8.813rem] h-[8.813rem] rounded-full flex flex-col justify-center items-center lg:w-[12.5rem] lg:h-[12.5rem]">
                <p className="text-5xl font-bold lg:text-[3.188rem]">76</p>
                <p className=" text-Lightlavender">of 100</p>
              </motion.div>
            </div>
            <div>
              <h1 className=" pb-[1.125rem] ">Great</h1>
              <p className="pb-[2.625rem] w-[15.625rem] lg:w-60">You scored higher than 65% of the people who have taken these tests</p>
            </div>
          </div>

          <div className=" px-8 py-[1.875rem] ">
            <h1 className=" font-medium">Summary</h1>
            <div className="bg-black font-Hanken flex flex-col items-center justify-center gap-[1.125rem] py-6">
              <motion.div
                 style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 10000 }}
                
                className=" w-[19.563rem] h-[3.375rem] flex items-center justify-between bg-lightRed bg-opacity-10 rounded-md px-[1.125rem]" >
                <div className="flex gap-4 text-lightRed">
                  <img src={Reaction} alt="bolt" />
                  Reaction
                </div>
                <div>
                  80 / 100
                </div>
              </motion.div>
              <motion.div
                 style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 10000 }}
                
                className=" w-[19.563rem] h-[3.375rem] flex items-center justify-between bg-OrangeyYellow bg-opacity-10  rounded-md px-[1.125rem]">
                <div className="flex gap-4 text-OrangeyYellow">
                  <img src={Memory} alt="" />
                  Memory
                </div>
                <div>
                  92 / 100
                </div>
              </motion.div>
              <motion.div
                 style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 10000 }}
                
                className=" w-[19.563rem] h-[3.375rem] flex items-center justify-between bg-GreenTeal bg-opacity-10 rounded-md px-[1.125rem]" >
                <div className="flex gap-4">
                  <img src={Verbal} alt="chat icon" />
                  Verbal
                </div>
                <div>
                  80 / 100
                </div>
              </motion.div>
              <motion.div
                 style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 10000 }}
                
                className="w-[19.563rem] h-[3.375rem] flex items-center justify-between bg-CobaltBlue bg-opacity-10 rounded-md px-[1.125rem]">
                <div className="flex gap-4">
                  <img src={Visual} alt="eye" />
                  Visual
                </div>
                <div>
                  80 / 100
                </div>
              </motion.div>
              <motion.div
                 style={{ x, y, rotateX, rotateY , perspective: 1000, transform: "perspective(1000px)"}}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0, z: 10000 }}
                
                className="flex items-center justify-center w-[19.563rem] h-14 rounded-[4.375rem] bg-Darkgrayblue text-White cursor-pointer hover:duration-300 hover:bg-lightSlateBlue">
                Continue
              </motion.div>
            </div>
          </div>
        </motion.div>
      <div className="flex fixed bottom-0 right-0 lg:right-20 lg:bottom-20 hover:scale-110 duration-300">
        <a href="https://github.com/newton-w"  target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
      </div>
      </div>
    </main>

  )
}

export default App
