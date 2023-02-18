import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import { SideBarItems } from "./SideBarItems";



const SideBar = () => {
    return (
    
       <div className={`absolute px-7 py-[6rem] mt-[10rem] text-white 
         z-20 w-[20rem] border-y-[0.2rem]
            flex flex-col
         items-center rounded-full border-white`}>
         <div className="w-full h-full top-0 z-[-10]
            bg-gradient-to-r from-black via-black to-black
            absolute blur-sm opacity-80 rounded-full"/>
         {SideBarItems.map((item)=>(
            <div key={item.id} className={`flex items-center gap-4
              border-l-[0.2rem] border-b-[0.2rem] rounded-full px-5 w-[13rem]
              cursor-pointer hover:text-purple-600 hover:-rotate-3
               transition delay-120 duration-300
             ${item.id===4 ? `mb-[13rem] pb-3` : `mb-6 pb-3`}`}>
               <IconProp icon={item.icon}/>
               <TextProp title={item.title}/> 
            </div>    
         ))}
       </div> 
     
    );
}

export default SideBar;