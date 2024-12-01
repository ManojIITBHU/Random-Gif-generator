import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
   <div className="flex flex-col w-full  items-center background overflow-hidden p-[70px]">
      <h1 className="bg-white text-4xl font-bold text-center mt-[45px] px-12 py-6 w-11/12 rounded-3xl">RANDOM GIFS</h1>
       <div className="flex flex-col w-full  items-center">
            <Random></Random>
            <Tag></Tag>
       </div>

   </div>


  )
}
