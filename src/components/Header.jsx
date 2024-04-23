import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="">
        <nav className="p-2 my-2 shadow-lg border-b-gray-500 h-14 w-[100vw] text-md font-semibold ">
            <Link to="/" className="p-2 m-2 ">Home</Link>
            <Link to="/intersection-observer" className="p-2 m-2">Infinite Scroll</Link>
        </nav>
    </div>
  )
}

export default Header