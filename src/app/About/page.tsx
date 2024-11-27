import Navbar from "../component/navbar"
 function About(){
    return(
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/06/08/17/43/blue-2384333_1280.png" alt="img" className="opacity-40 -z-0 inset-0 absolute rounded-lg h-[] max-" />
        <div>
            <Navbar/>
            <h1 className="text-center bg-blue-300 rounded-lg font-serif text-[30px] ">This is About My Self</h1>
            <p className="font-serif">I Love PLaying Game</p>
            <p className="font-serif">I Love to Work Hard</p>
            <p className="font-serif">I Love To Work On TypeScript</p>
            <p className="font-serif">I love to Build MY Self</p>
            <h2 className="text-center bg-blue-300 rounded-lg font-serif text-[30px]">My Language</h2>
            <p className="font-serif">Urdu</p>
            <p className="font-serif">English</p>
        </div>
        </div>
    )
}
export default About