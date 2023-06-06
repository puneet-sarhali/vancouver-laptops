/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <section className="py-8 w-full">
      <div className="container px-4 mx-auto">
        <div className="sm:px-14 sm:py-12 px-6 py-6 bg-orange-500 rounded">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="w-full   mb-10 md:mb-0">
              <h3 className="mb-1 sm:text-2xl text-xl font-bold text-white w-full">
                Vancouver Laptops - Our Services
              </h3>
              <ul className="mb-4 md:mb-4 text-sm font-medium text-white">
                <li>Repair</li>
                <li>Installation</li>
                <li>Data Recovery</li>
              </ul>
              <a className="flex items-center text-white font-medium" href="#">
                <svg
                  className="mr-1"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z"
                    fill="#D7D5F8"
                  ></path>
                </svg>
                <span>Check demo</span>
              </a>
            </div>
            <div className="hidden sm:flex w-full place-self-end self-end">
              <svg
                width="150"
                height="150"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                {" "}
                <g clip-path="url(#clip0_104_44)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
                    fill="url(#paint0_linear_104_44)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_104_44"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#fff1e0" />{" "}
                    <stop offset="1" stop-color="#f7debe" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_104_44">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
