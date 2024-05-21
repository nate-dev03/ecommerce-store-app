import p1 from '../assets/p1.webp';

export default function Product() {
  return (
    <div className="flex flex-col  items-center space-y-5 w-80 p-5 rounded-lg text-black bg-gray-300">
      <img className="rounded-lg w-52 h-52 md:w-60 md:h-60 bg-transparent" src={p1} alt="Men's Causal Shirt" /> 
      <div id="description" className="flex flex-col space-y-3">
        <p className="text-blue-600 text-left font-bold">Slim fit casual shirt made from 100% cotton.</p>
        <p className="text-blue-600 text-xl text-left">$<span className="text-green-500 font-bold">39.99</span></p>
      </div>
      <div className='flex space-x-5'>
        <button className='p-2 font-bold text-green-600 border-2 rounded border-green-600 hover:bg-green-600 hover:text-white'>Buy Now</button>
        <button className='p-2 font-bold text-blue-600 border-2 rounded border-blue-600 hover:bg-blue-600 hover:text-white'>Add to Cart</button>
      </div>
    </div>
  )
}
