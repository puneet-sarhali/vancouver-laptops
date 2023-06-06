import Image from "next/image";
import Product from "./components/product";
import Logo from "./components/logo";
import Banner from "./components/banner";
import Landing from "./components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-8">
      <div className="flex flex-col gap-36 text-xl">
        <div>
          <h2 className="ml-10 text-gray-400">Logo</h2>
          <Logo />
        </div>
        <div>
          <h2 className="ml-10 text-gray-400">Banner</h2>
          <Banner />
        </div>
        <div>
          <h2 className="ml-10 text-gray-400">Products</h2>
          <Landing />
        </div>
        <div>
          <h2 className="ml-10 text-gray-400">Product Page</h2>
          <Product />
        </div>
      </div>
    </main>
  );
}
