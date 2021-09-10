import React, { useState } from "react";
import Login from "../Login/Login";

const NavBar: React.FC = () => {
  const [open, SetIsOpen] = useState(false);

  return (
    <>
      <div className="relative bg-white">
        <div className="w-[100vw] mx-auto px-4 sm:px-6 mt-1">
          <div className="flex justify-around items-center border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <svg
                  className="h-8 w-auto sm:h-10"
                  viewBox="0 0 316 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.12 0.499998V32H24.21V19.715H12.06V32H3.15V0.499998H12.06V12.335H24.21V0.499998H33.12ZM56.2799 20.705V32H47.3699V20.57L35.3549 0.499998H44.7599L52.2299 13.01L59.6999 0.499998H68.3399L56.2799 20.705ZM70.4742 0.499998H85.3692C88.8192 0.499998 91.8792 1.145 94.5492 2.435C97.2192 3.725 99.2892 5.555 100.759 7.925C102.229 10.295 102.964 13.07 102.964 16.25C102.964 19.43 102.229 22.205 100.759 24.575C99.2892 26.945 97.2192 28.775 94.5492 30.065C91.8792 31.355 88.8192 32 85.3692 32H70.4742V0.499998ZM85.0092 24.89C87.7092 24.89 89.8692 24.125 91.4892 22.595C93.1392 21.065 93.9642 18.95 93.9642 16.25C93.9642 13.55 93.1392 11.435 91.4892 9.905C89.8692 8.375 87.7092 7.61 85.0092 7.61H79.3842V24.89H85.0092ZM121.422 23.63H116.562V32H107.652V0.499998H122.052C124.902 0.499998 127.377 0.979998 129.477 1.94C131.577 2.87 133.197 4.22 134.337 5.99C135.477 7.73 136.047 9.785 136.047 12.155C136.047 14.435 135.507 16.43 134.427 18.14C133.377 19.82 131.862 21.14 129.882 22.1L136.677 32H127.137L121.422 23.63ZM127.047 12.155C127.047 10.685 126.582 9.545 125.652 8.735C124.722 7.925 123.342 7.52 121.512 7.52H116.562V16.745H121.512C123.342 16.745 124.722 16.355 125.652 15.575C126.582 14.765 127.047 13.625 127.047 12.155ZM162.068 25.88H148.748L146.273 32H137.182L151.088 0.499998H159.863L173.813 32H164.543L162.068 25.88ZM159.458 19.31L155.408 9.23L151.358 19.31H159.458ZM176.338 0.499998H185.248V24.935H200.278V32H176.338V0.499998ZM203.804 0.499998H212.714V32H203.804V0.499998ZM225.758 7.565H216.083V0.499998H244.298V7.565H234.668V32H225.758V7.565ZM272.908 25.115V32H247.618V0.499998H272.323V7.385H256.438V12.695H270.433V19.355H256.438V25.115H272.908Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M251.78 53.28H245.86L244.76 56H240.72L246.9 42H250.8L257 56H252.88L251.78 53.28ZM250.62 50.36L248.82 45.88L247.02 50.36H250.62ZM258.123 42H262.083V52.86H268.763V56H258.123V42ZM276.73 42C277.996 42 279.096 42.2133 280.03 42.64C280.963 43.0533 281.683 43.6533 282.19 44.44C282.696 45.2133 282.95 46.1267 282.95 47.18C282.95 48.2333 282.696 49.1467 282.19 49.92C281.683 50.6933 280.963 51.2933 280.03 51.72C279.096 52.1333 277.996 52.34 276.73 52.34H274.29V56H270.33V42H276.73ZM276.49 49.22C277.303 49.22 277.916 49.0467 278.33 48.7C278.743 48.34 278.95 47.8333 278.95 47.18C278.95 46.5267 278.743 46.02 278.33 45.66C277.916 45.3 277.303 45.12 276.49 45.12H274.29V49.22H276.49ZM298.2 42V56H294.24V50.54H288.84V56H284.88V42H288.84V47.26H294.24V42H298.2ZM310.374 53.28H304.454L303.354 56H299.314L305.494 42H309.394L315.594 56H311.474L310.374 53.28ZM309.214 50.36L307.414 45.88L305.614 50.36H309.214Z"
                    fill="#2B2B2B"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="19.5"
                      y1="13"
                      x2="223.5"
                      y2="15.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6B78FC" />
                      <stop offset="1" stopColor="#7B61FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base hover:shadow-md font-medium text-gray-500 hover:text-gray-900 duration-200 border px-9 py-2 rounded-xl hover:border-gray-600"
              >
                Github
              </a>
              <div
                onClick={() => {
                  SetIsOpen(true);
                }}
                className="whitespace-nowrap mx-4 text-base font-medium hover:shadow-md text-gray-500 hover:text-gray-900 duration-200 border px-9 py-2 rounded-xl hover:border-gray-600 cursor-pointer select-none"
              >
                Login
              </div>
            </div>
          </div>
          <Login isopen={open} setIsOpen={SetIsOpen} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
