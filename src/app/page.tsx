
function Home (){
  return(
    <div className="mt-2 p-10 h-[500] ">
    
      <img src="https://cdn.pixabay.com/photo/2017/06/08/17/43/blue-2384333_1280.png" alt="img" className="opacity-40 -z-0 inset-0 absolute m-5 rounded-lg h-[570] mx-10" />
      <div>
        <h1 className="text-center font-extrabold text-[25px] bg-blue-200 rounded-lg p-2 text-blue-950 font-serif ">FAIZAN AKHTAR</h1>
        <h2 className="text-center font-bold text-[20px] bg-blue-100 rounded-md font-serif">Quality Officer</h2>
        </div> 
        <div className="flex">
          
       
        <nav className="text-white h-80 flex">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L1UopaeFSzWCX3LAZEdtlhN4-NtLIgqSSg&s" alt="bg" className="relative inset-0 -z-10 opacity-75 rounded-lg m-1" />
            <ul className="flex flex-col absolute top-40 mx-4 font-serif">
           
                <li className="mt-4 hover:text-blue-400 text-[20px]"><a href="Profile">Profile</a></li>
                <li className="mt-4 hover:text-blue-400 text-[20px]"><a href="About">About Me</a></li>
                <li className="mt-4 hover:text-blue-400 text-[20px]"><a href="Skills">Skills</a></li>
                <li className="mt-4 hover:text-blue-400 text-[20px]"><a href="Contact">Contact</a></li>
            </ul>
        </nav>
        <div className=" text-evenly m-32">
        <p className="font-bold font-serif">Extremely motivated,
 creative and versatile and
 eager to learn emerging
 technologies and
 innovations.</p>
        </div>
        </div>
   
     </div>
     
  )
}
export default Home