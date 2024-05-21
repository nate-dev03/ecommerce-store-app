import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import "typeface-poppins";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link className="text-yellow-500 text-lg font-bold font-[Poppins]" to="/">
          <span className="text-green-200 font-normal">Nathan's </span>
          Store
      </Link> 
    
      <div className="flex">
        <ShoppingCartIcon className="w-8 h-8"/> 
      </div>

    </nav>
  )
}
