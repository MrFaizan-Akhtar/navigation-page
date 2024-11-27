import Navbar from "../component/navbar";

function Profile(){
    return(
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/06/08/17/43/blue-2384333_1280.png" alt="img" className="opacity-40 -z-0 inset-0 absolute rounded-lg h-[] mx-" />
            <Navbar/>
            <h1 className="text-center rounded-lg bg-blue-300 text-[30px] font-serif">Education</h1>
            <p className="font-serif">MetroPolitan University Karachi BBA (Continue)</p>
            <p className="font-serif">MetroPolitan University Karachi ADBA (2022)</p>
            <p className="font-serif">Degree Boys College, Buffer Zone Board of Secondary Education</p>

        <h2 className="text-center font-serif bg-blue-300 text-[30px]">Experience</h2>
        <p className="font-serif">Ismail Nutrition 2022-2024</p>
            

        </div>
    )
}
export default Profile