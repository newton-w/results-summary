import React from "react"
import data from "./data.json"
function App() {


  return (
    <main>
      <div className=" flex items-center justify-center">
        <div className=" w-[23.438rem] h-[50.5rem]">
          <div className="flex flex-col items-center text-White text-center font-Hanken h-[22.188rem] bg-lightSlateBlue rounded-b-[1.875rem] pt-7">
            <h1 className=" text-lg">Your Result</h1>
            <div className="my-7 ">
              <div className="gap-5 bg-CobaltBlue w-[8.813rem] h-[8.813rem] rounded-full flex flex-col justify-center items-center">
                <p className=" text-4xl font-bold">76</p>
                <p>of 100</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold pb-[1.125rem]">Great</h1>
              <p className=" font-medium pb-[2.625rem] w-[15.625rem]">You scored higher than 65% of the people who have taken these tests</p>
            </div>
          </div>

          <div className=" px-8 py-[1.875rem]">
            <h1 className=" font-medium ">Summary</h1>
            <div className="bg-black flex flex-col items-center justify-center gap-[1.125rem]">
              {data && data.map((res, indx) => {
                return (
                  <div className=" w-[19.563rem] h-[3.375rem] flex" key={indx}>
                    <div>
                      {console.log(res)}
                      <img src={res.icon} alt="" />
                      {res.category}
                    </div>
                    <div>
                      {res.score} / 100
                    </div>
                  </div>
                )
              })}
              <div className="flex items-center justify-center w-[19.563rem] h-14 rounded-[4.375rem] bg-Darkgrayblue text-White cursor-pointer">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default App
