import Product from "./Product";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 items-center p-5 font-[Poppins]">
      <h1 className="text-xl font-bold text-blue-500">Products</h1>
      <ul className="space-y-5">
        <Product />
      </ul>
    </div>
  )
}
