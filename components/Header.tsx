import Link from "next/link";

export default function Header() {
  return(
  <div className="smallIsland mb-10 border-t-0 rounded-t-none flex justify-between items-center ">
    <Link href="/">
      <img
        src=""
        alt="Logo"
      />
    </Link>
    <form className="w-1/3">
      <input
        className="w-full rounded-xl border border-black p-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
        placeholder="Search products"
      />
    </form>
    <div>
      <button className="btn">Cart</button>
      <button className="btn ml-5">Log in</button>
    </div>
  </div>
  )
}
