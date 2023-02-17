import IconProp from "./props/IconProp";
import InputProp from "./props/InputProp";
import TextProp from "./props/TextProp";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ImageProp from "./props/ImageProp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const RightNavIcons = [
  {
    id:1,
    icon:<NotificationsIcon/>,
  },
  {
    id:2,
    icon:<EmailIcon/>,
  }
]


const Navbar = () => {
    return (
      <div>
        <div className="fixed w-full z-40 top-11 flex items-center">

         <div className="flex gap-[9rem]"> 
          <div className="flex items-center relative left-[1.7rem]">
           <div className="rounded-full w-[2rem] h-[3rem] absolute left-8 z-40 border-l-[0.8rem]
            border-purple-600 border-y-[0.5rem]"/>
            <TextProp title={`TEAM`}
             titleClassN={`text-white font-bold pl-[3.7rem]`}/>
           </div>  

           <div className="relative flex items-center shadow-black">
            <IconProp 
              icon={<SearchIcon/>}
              iconDivClassN={`absolute text-purple-600 pl-4`}
            />
            <InputProp
              inputPlaceholder={`Search CTEAM`}
              inputClassN={`outline-none py-2 pl-11 border-x-[0.2rem] rounded-full border-white
                bg-transparent text-white placeholder-white font-bold w-[40rem]
                 hover:border-purple-600
                 hover:border-b transition detay-120 duration-300`}
            />
           </div>
         </div>  

         <div className="absolute text-white flex items-center right-11 gap-6">
           <div className="flex z-40 items-center gap-6">
              {RightNavIcons.map((item)=>(
                <div key={item.id}>
                   <IconProp 
                     icon={item.icon}
                     iconDivClassN={`border-x-[0.2rem] border-white
                     cursor-pointer hover:text-purple-600 flex 
                     items-center rounded-full p-2
                     hover:rotate-180 transition detay-120 duration-300`}
                   />
                </div>  
              ))}
           </div>

           <div className="flex items-center gap-6">
              <ImageProp
                 imgSrc={`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`}
                 imgHt={80}
                 imgWd={80}
                 imgAlt={`Profile_pic`}
                 imgClassN={`h-[2.5rem] w-[2.5rem] border-x-[0.2rem]
                   object-cover rounded-full border-white cursor-pointer
                   hover:rotate-180 transition detay-120 duration-300`}
              />
              <TextProp title={`Thomas Mathew`}/>
           </div>

           <IconProp 
             icon={<ArrowDropDownIcon/>}
             iconDivClassN={`cursor-pointer hover:text-purple-600`}
           />
         </div> 
        </div> 
      </div>  
    );
}

export default Navbar;