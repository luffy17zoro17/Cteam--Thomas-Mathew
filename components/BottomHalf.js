import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";


const BottomHalfImages = [
  {
    id:1,
    imgSrc:`https://i.pinimg.com/736x/e7/e9/79/e7e9791dfa672114d1c2dbda837c6da4.jpg`,
    imgAlt:`Doflamingo`,
  },
  {
    id:2,
    imgSrc:`https://i.pinimg.com/564x/fa/9e/ba/fa9eba2c5f90174aaec5d93996375eaa.jpg`,
    imgAlt:`Big_mom`,
  },
  {
    id:3,
    imgSrc:`https://i.pinimg.com/564x/63/be/2d/63be2d696ea726e0366093dfc209b5ff.jpg`,
    imgAlt:`Kaido`,
  },
  {
    id:4,
    imgSrc:`https://i.redd.it/dx3qjm426ev41.jpg`,
    imgAlt:`BlackBeard`,
  }
]



const BottomHalf = () => {
    return (
      <div className="z-10">
        <div className="pt-[5rem]">
        <div className="flex justify-center font-medium text-2xl text-white">  
           <div className="w-[72rem]"><TextProp title={`Special Offers`} textDivClassN={``}/></div>
        </div>
        <div className="top-0 flex justify-center left-0 w-screen gap-3 py-3">
          
          {BottomHalfImages.map((item)=>(
              <div key={item.id} className="relative">
                 <ImageProp
                   imgSrc={item.imgSrc}
                   imgHt={14000}
                   imgWd={14000}
                   imgAlt={item.imgAlt}
                   imgClassN={`
                   object-cover z-30 h-[15rem]
                   ${item.id===1 ? `w-[28rem] border-l-[0.2rem]
                      border-white rounded-l-3xl` : `w-[14rem]`}
                   ${item.id===4 ? `rounded-r-3xl border-r-[0.2rem]` : ``}   `}
                 />
                 <div className={`absolute h-full w-full top-0
                  bg-gradient-to-b from-black via-transparent to-black
                  hover:opacity-0 cursor-pointer ease-in-out
                    transition transition-opacity delay-150
                    duration-300
                    ${item.id===1 ? `rounded-l-3xl` : item.id===4 ? `rounded-r-3xl` : ``}`}/>
              </div>  
          ))}
         
        </div>
        </div>
      </div>  
    );
}

export default BottomHalf;