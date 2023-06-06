/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordian";
export default function Product() {
  return (
    <div>
      <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap items-center mb-16">
                <li className="mr-6">
                  <a
                    className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <span>Home</span>
                    <svg
                      className="ml-6"
                      width="4"
                      height="7"
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <span>Store</span>
                    <svg
                      className="ml-6"
                      width="4"
                      height="7"
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm font-medium text-orange-500 hover:text-orange-600"
                    href="#"
                  >
                    Dell Precision M4600
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                {/* <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                  <a
                    className="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a className="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                    <img
                      className="h-full w-full"
                      src="/main-laptop.jpg"
                      alt=""
                    ></img>
                  </a>
                  <a
                    className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0"
                    href="#"
                  >
                    <img
                      className="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder2.png"
                      alt=""
                    ></img>
                  </a>
                  <a
                    className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500"
                    href="#"
                  >
                    <img
                      className="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder4.png"
                      alt=""
                    ></img>
                  </a>
                  <a className="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0" href="#">
                    <img
                      className="h-full w-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder3.png"
                      alt=""
                    ></img>
                  </a>
                  <a
                    className="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div> */}
                <div className="w-full sm:w-9/12 px-4">
                  <img className="mb-5" src="/main-laptop.jpg" alt=""></img>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md mb-6">
                <span className="text-xs text-gray-400 tracking-wider">
                  DELL #3299803
                </span>
                <h2 className="mt-6 mb-4 text-3xl md:text-3xl lg:text-3xl font-heading font-medium">
                  Dell Precision M4600
                </h2>
                <p className="flex items-center mb-6">
                  <span className="mr-2 text-sm text-orange-500 font-medium">
                    $
                  </span>
                  <span className="text-3xl text-orange-500 font-medium">
                    299.00
                  </span>
                </p>
                <section className="bg-blueGray-50">
                  <div className="container">
                    <div className="pb-6 pt-6 bg-white rounded-5xl">
                      <div className="overflow-x-auto">
                        <div className="inline-block min-w-full overflow-hidden">
                          <table className="table-auto w-full">
                            {/* <thead>
                              <tr>
                                <th className=" h-20 bg-white text-left">
                                  <span className="block text-sm text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">
                                    Transaction id
                                  </span>
                                </th>
                                <th className="h-20 bg-white text-left">
                                  <span className="block text-sm text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">
                                    Date
                                  </span>
                                </th>
                              </tr>
                            </thead> */}
                            <tbody>
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center  h-14 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                    <span className="text-lg font-heading font-medium">
                                      CPU
                                    </span>
                                  </div>
                                </td>
                                <td className="p-0">
                                  <div className="flex items-center  h-14 bg-blueGray-50 border-t border-b border-gray-100">
                                    <span className="text-lg text-darkBlueGray-400 font-heading">
                                      Core i5 M, 2.60GHz
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center  h-14 bg-white rounded-tl-5xl rounded-bl-5xl">
                                    <span className="text-lg font-heading font-medium">
                                      Memory
                                    </span>
                                  </div>
                                </td>
                                <td className="p-0">
                                  <div className="flex items-center  h-14  bg-white rounded-tr-5xl rounded-br-5xl">
                                    <span className="text-lg text-darkBlueGray-400 font-heading">
                                      8 GB DDR3
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center  h-14 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                    <span className="text-lg font-heading font-medium">
                                      OS
                                    </span>
                                  </div>
                                </td>
                                <td className="p-0">
                                  <div className="flex items-center  h-14  bg-blueGray-50 border-t border-b border-gray-100">
                                    <span className="text-lg text-darkBlueGray-400 font-heading">
                                      Window 10 Pro 64 bit
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center  h-14 bg-white rounded-tl-5xl rounded-bl-5xl">
                                    <span className="text-lg font-heading font-medium">
                                      Video card
                                    </span>
                                  </div>
                                </td>
                                <td className="p-0">
                                  <div className="flex items-center  h-14  bg-white rounded-tr-5xl rounded-br-5xl">
                                    <span className="text-lg text-darkBlueGray-400 font-heading">
                                      Intel HD Graphics 3000
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center  h-14 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                    <span className="text-lg font-heading font-medium">
                                      Warranty
                                    </span>
                                  </div>
                                </td>
                                <td className="p-0">
                                  <div className="flex items-center h-14 bg-blueGray-50 border-t border-b border-gray-100">
                                    <span className="text-lg text-darkBlueGray-400 font-heading">
                                      1 year
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex flex-wrap -mx-2 mb-12">
                <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                  <a
                    className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 hover:bg-orange-600 rounded-xl"
                    href="#"
                  >
                    Add to bag
                  </a>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <a
                    className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    href="#"
                  >
                    <span className="mr-2">Wishlist</span>
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Vendor Information</AccordionTrigger>
                    <AccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
