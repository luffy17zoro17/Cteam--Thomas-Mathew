import { selectBlurMode } from "@/reducers/blurSlice/blurSlice";
import { useDispatch, useSelector } from "react-redux";

const { default: ImageProp } = require("./props/ImageProp")


const BackgroundImage = () => {

   const BlurValue=useSelector(selectBlurMode);
   const dispatch = useDispatch();
    return (
      
       <div className="relative">
          <div className="absolute z-0 w-screen h-screen
          shadow-xl shadow-black
          bg-gradient-to-b from-black via-transparent to-black
          "/>
          <ImageProp
            imgSrc={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce38301f-a138-4b74-993c-53ade315241d/decmoyj-81d2a02f-24cd-4247-b91d-aa9022bf6ae5.png/v1/fill/w_1280,h_889,q_80,strp/one_piece_1001___batalla_de_onigashima_by_melonciutus_decmoyj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg5IiwicGF0aCI6IlwvZlwvY2UzODMwMWYtYTEzOC00Yjc0LTk5M2MtNTNhZGUzMTUyNDFkXC9kZWNtb3lqLTgxZDJhMDJmLTI0Y2QtNDI0Ny1iOTFkLWFhOTAyMmJmNmFlNS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eAiO6dzV213NyktHpaEVWqzSL68RN-58KyzzJdz_B9I`}
            imgHt={19000}
            imgWd={19000}
            imgAlt={""}
            imgClassN={`h-screen w-screen object-cover
             fixed z-[-10] transition delay-120 duration-300
              ${BlurValue===0 ? `blur-xl` : BlurValue===1 ? `blur-md` : BlurValue===2 ? `blur-sm` : ``}`}
            
          />
       </div> 
   
    );
}

export default BackgroundImage;