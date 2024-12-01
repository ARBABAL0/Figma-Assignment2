import Link from "next/link";

export default function Home(){
    return(
        <div>
            <Link className="ml-2 mr-5 hover:text-red-400" href="http://localhost:3000/"> Home</Link> 
            <Link className="mr-5 hover:text-red-400" href={"http://localhost:3000/Aboutus"}>About us </Link>
            <Link className="mr-5 hover:text-red-400" href={"http://localhost:3000/Courses"} >Courses </Link>       
            <Link className="mr-5 hover:text-red-400" href={"http://localhost:3000/Achivement"} >Achivement </Link>
            <Link className="mr-5 hover:text-red-400" href={"http://localhost:3000/Testimonial"} >Testimonial </Link>
        </div>
    )
}