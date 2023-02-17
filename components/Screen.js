import BottomHalf from "./BottomHalf";
import SideBar from "./SideBar";
import TopHalf from "./TopHalf";


const Screen = () => {
    return (
       <div>
         <div className="flex flex-col items-center left-0 w-screen h-screen justify-center pt-[8rem]">
          <TopHalf/>
          <BottomHalf/>
         </div> 
       </div> 
    );
}

export default Screen;