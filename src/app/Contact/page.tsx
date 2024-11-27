import Navbar from "../component/navbar";

function Contact(){
    return(
<div>
<img src="https://cdn.pixabay.com/photo/2017/06/08/17/43/blue-2384333_1280.png" alt="img" className="opacity-40 -z-0 inset-0 absolute rounded-lg h-[] mx-" />
    <Navbar/>
<h1 className="font-serif bg-blue-300 text-center rounded-lg text-[30px]">For Contact Me</h1>
<p className="text-center bg-blue-200 rounded-lg font-serif text-[25px]">Phone Number</p>
<li className="font-serif">03262018841</li>
<p className="font-serif bg-blue-200 text-center rounded-lg text-[25px]">House No#</p>
<li className="font-serif">House #KMC- 754, Street 9,
 sheet 5, Sector 11 ½, Orangi
 Town, Karachi 75800,
 Pakistan</li>
 <p className="font-serif text-center bg-blue-200 rounded-lg text-[25px]">For Gmail ID</p>
 <button className="font-serif hover: text-blue-300">Show More</button>
</div>
    )
}
export default Contact