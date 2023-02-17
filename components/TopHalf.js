import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import WindowIcon from '@mui/icons-material/Window';


const OnePieceGenres=[
  {
    id:1,
    title:`Comedy`,
  },
  {
    id:2,
    title:`Action`,
  },
  {
    id:3,
    title:`Drama`,
  },
  {
    id:4,
    title:`Friendship`,
  },
  {
    id:5,
    title:`Wholesome`,
  },

]



const TopHalf = () => {
    return (
      <div className="">
        <div className="flex justify-center items-center gap-3">
          <div className="relative">  
            <ImageProp
              imgSrc={`https://i.redd.it/8o1s4via4w061.jpg`}
              imgHt={`1500`}
              imgWd={`1500`}
              imgClassN={`object-cover h-[25rem] w-[50rem] rounded-l-3xl border-l-[0.2rem]
                 border-white`}
              imgAlt={`zoro_large_pic`}
            /> 
            <div className="top-1 text-sm z-20 
             absolute flex gap-8 py-2 px-8">
            {OnePieceGenres.map((item)=>(
              <div key={item.id}>
                <TextProp 
                  title={item.title} 
                  titleClassN={`text-white
                    px-4 py-1 bg-gradient-to-t from-indigo-500 via-black to-transparent
                   ${item.id===1 ? `rounded-l-full` : item.id===5 ? `rounded-r-full` : ``}`}/>
                   
              </div>
            ))}
            </div>
            
            <div className="absolute h-full w-full top-0 rounded-l-3xl
               bg-gradient-to-b from-black via-transparent to-black
               hover:opacity-0 cursor-pointer ease-in-out
                transition transition-opacity delay-150
                duration-300"/>
          </div> 
          <div className="">
            <div className="bg-black text-white rounded-tr-3xl border-r-[0.2rem] border-white
              h-[16.3rem] p-5 w-[21rem]">
               <div className="relative"> 
               <TextProp 
                  title={`One Piece`}
                  titleClassN={`font-bold text-2xl`}
                  details={`One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.
                   It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with
                    its individual chapters compiled into 104 tankōbon volumes as of November 2022.`}
                  textDivClassN={`text-xs`}
               />   
               </div>
               <div className="flex relative">
               <TextProp title={`₹1,406.55 INR`} details={`Available Now`}
                  detailClassN={`px-3 py-2 mt-3 bg-gradient-to-b from-gray-500 via-white to-gray-600
                    hover:text-purple-700 text-black hover:shadow hover:shadow-purple-600
                  w-[8rem] rounded-tr-lg cursor-pointer absolute z-50`}
                   textDivClassN={`mt-3`}
                  />
               <IconProp icon={<WindowIcon/>} iconDivClassN={`absolute right-6 pt-[3.7rem]`}/>   
               </div>
            </div>
            <div className="flex gap-3 pt-3">
              <div className="relative">
               <ImageProp
                  imgSrc={`https://i.redd.it/7obtl8i2ews61.jpg`}
                  imgHt={`250`}
                  imgWd={`250`}
                  imgClassN={`object-cover h-[8rem] w-[10rem]
                  `}
                  imgAlt={`luffy_small_pic`}
                />
                <div className="absolute h-full w-full top-0
               bg-gradient-to-b from-black via-transparent to-black
               hover:opacity-0 cursor-pointer ease-in-out
                transition transition-opacity delay-150
                duration-300"/>
              </div> 
                {/** @East blue95 */}
              <div className="relative"> 
                <ImageProp
                  imgSrc={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/788fdb2c-99dd-45f3-883d-5623836037df/d60uqwz-7688f82c-c7db-43c3-8423-a08ebb17779a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc4OGZkYjJjLTk5ZGQtNDVmMy04ODNkLTU2MjM4MzYwMzdkZlwvZDYwdXF3ei03Njg4ZjgyYy1jN2RiLTQzYzMtODQyMy1hMDhlYmIxNzc3OWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iVi0MKkaKj1bTPhwbJqMjv3mSXil9MgxTDrk2krQ7vY`}
                  imgHt={`150`}
                  imgWd={`150`}
                  imgClassN={`object-cover h-[8rem] w-[10.3rem] rounded-br-3xl
                    border-r-[0.2rem] border-white`}
                  imgAlt={`zoro_large_pic`}
                /> 
                <div className="absolute h-full w-full top-0 rounded-br-3xl
               bg-gradient-to-b from-black via-transparent to-black
               hover:opacity-0 cursor-pointer ease-in-out
                transition transition-opacity delay-150
                duration-300"/>
              </div>  
            </div>
          </div>
        </div>
      </div>  
    );
}

export default TopHalf;