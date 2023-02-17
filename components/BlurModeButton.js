import { blurLevels, selectBlurMode } from "@/reducers/blurSlice/blurSlice";
import { useDispatch, useSelector } from "react-redux";




const BlurModeButton = () => {
    const BlurValue=useSelector(selectBlurMode);
    const dispatch = useDispatch();

    return (
       <div className="absolute top-[11rem] text-sm 
       px-3 py-1 right-8 bg-white rounded-full hover:bg-red-400">
          
          <button onClick={()=>dispatch(blurLevels())}>
            {BlurValue===0 ? `Whats hidden behind? Click` : BlurValue===1 ? `Still not clear? Click` :
              BlurValue===2 ? `Cant guess? Click` : BlurValue=== 3 ? `OML Its happening! CLICK` : `RESET`}
          </button>
          <div className={BlurValue===4 ? `fixed bg-yellow-500
          border-black border-[1rem] p-3 font-bold text-xl bottom-[3rem] right-[5rem]` : `hidden`}>
            Created by Thomas Mathew <br/><div className="text-sm pt-5">(This website is for Desktop only)</div>
                <br/>
            Image credit:
            Melonciutus
          </div>
       </div> 
    );
}

export default BlurModeButton