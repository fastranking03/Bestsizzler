import React from "react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-90 sm:block hidden">
        <div className="bg-[#DA0025]  text-white flex items-center justify-between py-2 px-20">
          <div className="flex items-center gap-2">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 13.5L12 14.5C12 14.5 19.5 13 20.5 13C21.5 13 21.5 14 20.5 15C19.5 16 16 19 13 19C10 19 8 17.5 6 17.5H1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 11.5C2 10.5 4 9 6 9C8 9 12.75 11 13.5 12C14.25 13 12 14.5 12 14.5M7 6V2C7 1.73478 7.10536 1.48043 7.29289 1.29289C7.48043 1.10536 7.73478 1 8 1H20C20.2652 1 20.5196 1.10536 20.7071 1.29289C20.8946 1.48043 21 1.73478 21 2V10"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 1H16.5V5.5H11.5V1Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Free Delivery on all orders Over £XX</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="gap-2 flex items-center">
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0961 11.83L7.56108 15.366C7.42178 15.5054 7.25638 15.6159 7.07433 15.6914C6.89228 15.7668 6.69714 15.8057 6.50008 15.8057C6.30302 15.8057 6.10788 15.7668 5.92583 15.6914C5.74378 15.6159 5.57838 15.5054 5.43908 15.366L1.90408 11.83C1.30046 11.2264 0.821627 10.5099 0.494924 9.72128C0.168222 8.93267 4.64453e-05 8.08743 9.61879e-09 7.23383C-4.6426e-05 6.38023 0.168037 5.53498 0.494654 4.74633C0.82127 3.95769 1.30002 3.2411 1.90358 2.63748C2.50713 2.03386 3.22367 1.55503 4.01228 1.22832C4.80089 0.90162 5.64612 0.733445 6.49973 0.733398C7.35333 0.733352 8.19858 0.901436 8.98723 1.22805C9.77587 1.55467 10.4925 2.03342 11.0961 2.63698C11.6998 3.24057 12.1786 3.95716 12.5053 4.74584C12.832 5.53451 13.0002 6.37981 13.0002 7.23348C13.0002 8.08714 12.832 8.93245 12.5053 9.72112C12.1786 10.5098 11.6998 11.2264 11.0961 11.83ZM10.0361 3.69798C9.57172 3.23362 9.02046 2.86528 8.41375 2.61397C7.80704 2.36266 7.15677 2.23332 6.50008 2.23332C5.84338 2.23332 5.19312 2.36266 4.58641 2.61397C3.9797 2.86528 3.42843 3.23362 2.96408 3.69798C2.49972 4.16233 2.13138 4.7136 1.88007 5.32031C1.62877 5.92702 1.49942 6.57728 1.49942 7.23398C1.49942 7.89067 1.62877 8.54094 1.88007 9.14765C2.13138 9.75435 2.49973 10.3056 2.96408 10.77L6.50008 14.304L10.0361 10.77C10.5005 10.3057 10.8689 9.75441 11.1203 9.1477C11.3716 8.54099 11.501 7.8907 11.501 7.23398C11.501 6.57726 11.3716 5.92697 11.1203 5.32026C10.8689 4.71354 10.5005 4.16229 10.0361 3.69798ZM6.50008 9.23398C6.23374 9.24 5.96888 9.19275 5.72105 9.09501C5.47323 8.99726 5.24743 8.85099 5.05691 8.66477C4.86639 8.47856 4.71499 8.25616 4.61161 8.01063C4.50822 7.76511 4.45493 7.5014 4.45486 7.23499C4.4548 6.96858 4.50796 6.70485 4.61122 6.45927C4.71448 6.21369 4.86577 5.99121 5.05619 5.8049C5.24662 5.6186 5.47235 5.47221 5.72012 5.37434C5.9679 5.27647 6.23274 5.22909 6.49908 5.23498C7.02164 5.24653 7.51891 5.4622 7.88445 5.83582C8.24998 6.20943 8.45473 6.7113 8.45486 7.23399C8.45499 7.75668 8.2505 8.25865 7.88515 8.63245C7.5198 9.00624 7.02263 9.22216 6.50008 9.23398Z"
                  fill="white"
                />
              </svg>

              <p>Put Your Location/Address</p>
            </div>
            <div>
              <a
                className="px-3 border-white border-x border-opacity-50"
                href=""
              >
                Register
              </a>
            </div>
            <div>
              <a className="flex items-center gap-2" href="">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.32812 6.9375C7.79945 6.9375 8.99219 5.74476 8.99219 4.27344C8.99219 2.80212 7.79945 1.60938 6.32812 1.60938C4.8568 1.60938 3.66406 2.80212 3.66406 4.27344C3.66406 5.74476 4.8568 6.9375 6.32812 6.9375Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11.6562 11.9326C11.6562 13.5877 11.6562 14.9297 6.32812 14.9297C1 14.9297 1 13.5877 1 11.9326C1 10.2776 3.38567 8.93555 6.32812 8.93555C9.27058 8.93555 11.6562 10.2776 11.6562 11.9326Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
                Login
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="">
                    <svg
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.28516 7.89453H5.23438V14.0195H2.5V7.89453H0.257812V5.37891H2.5V3.4375C2.5 1.25 3.8125 0.0195312 5.80859 0.0195312C6.76562 0.0195312 7.77734 0.210938 7.77734 0.210938V2.37109H6.65625C5.5625 2.37109 5.23438 3.02734 5.23438 3.73828V5.37891H7.66797L7.28516 7.89453Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.78125 3.875C8.50391 3.875 9.92578 5.29688 9.92578 7.01953C9.92578 8.76953 8.50391 10.1641 6.78125 10.1641C5.03125 10.1641 3.63672 8.76953 3.63672 7.01953C3.63672 5.29688 5.03125 3.875 6.78125 3.875ZM6.78125 9.07031C7.90234 9.07031 8.80469 8.16797 8.80469 7.01953C8.80469 5.89844 7.90234 4.99609 6.78125 4.99609C5.63281 4.99609 4.73047 5.89844 4.73047 7.01953C4.73047 8.16797 5.66016 9.07031 6.78125 9.07031ZM10.7734 3.76562C10.7734 4.17578 10.4453 4.50391 10.0352 4.50391C9.625 4.50391 9.29688 4.17578 9.29688 3.76562C9.29688 3.35547 9.625 3.02734 10.0352 3.02734C10.4453 3.02734 10.7734 3.35547 10.7734 3.76562ZM12.8516 4.50391C12.9062 5.51562 12.9062 8.55078 12.8516 9.5625C12.7969 10.5469 12.5781 11.3945 11.8672 12.1328C11.1562 12.8438 10.2812 13.0625 9.29688 13.1172C8.28516 13.1719 5.25 13.1719 4.23828 13.1172C3.25391 13.0625 2.40625 12.8438 1.66797 12.1328C0.957031 11.3945 0.738281 10.5469 0.683594 9.5625C0.628906 8.55078 0.628906 5.51562 0.683594 4.50391C0.738281 3.51953 0.957031 2.64453 1.66797 1.93359C2.40625 1.22266 3.25391 1.00391 4.23828 0.949219C5.25 0.894531 8.28516 0.894531 9.29688 0.949219C10.2812 1.00391 11.1562 1.22266 11.8672 1.93359C12.5781 2.64453 12.7969 3.51953 12.8516 4.50391ZM11.5391 10.6289C11.8672 9.83594 11.7852 7.92188 11.7852 7.01953C11.7852 6.14453 11.8672 4.23047 11.5391 3.41016C11.3203 2.89062 10.9102 2.45312 10.3906 2.26172C9.57031 1.93359 7.65625 2.01562 6.78125 2.01562C5.87891 2.01562 3.96484 1.93359 3.17188 2.26172C2.625 2.48047 2.21484 2.89062 1.99609 3.41016C1.66797 4.23047 1.75 6.14453 1.75 7.01953C1.75 7.92188 1.66797 9.83594 1.99609 10.6289C2.21484 11.1758 2.625 11.5859 3.17188 11.8047C3.96484 12.1328 5.87891 12.0508 6.78125 12.0508C7.65625 12.0508 9.57031 12.1328 10.3906 11.8047C10.9102 11.5859 11.3477 11.1758 11.5391 10.6289Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.39062 12.2695H0.847656V4.09375H3.39062V12.2695ZM2.10547 3C1.3125 3 0.65625 2.31641 0.65625 1.49609C0.65625 0.703125 1.3125 0.046875 2.10547 0.046875C2.92578 0.046875 3.58203 0.703125 3.58203 1.49609C3.58203 2.31641 2.92578 3 2.10547 3ZM12.8789 12.2695H10.3633V8.30469C10.3633 7.34766 10.3359 6.14453 9.02344 6.14453C7.71094 6.14453 7.51953 7.15625 7.51953 8.22266V12.2695H4.97656V4.09375H7.41016V5.21484H7.4375C7.79297 4.58594 8.61328 3.90234 9.84375 3.90234C12.4141 3.90234 12.9062 5.59766 12.9062 7.78516V12.2695H12.8789Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#000000] text-white  relative px-20  flex items-center justify-between">
          <img
            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742297670/Vector_129_hqrx77.png"
            className="absolute h-[100px] left-10 top-[-2px]"
            alt=""
          />
          <div>
            <img
              src="https://res.cloudinary.com/dj7wogsju/image/upload/v1741713282/Group_238817_uabyhv.png"
              className="h-[100px]"
              alt=""
            />
          </div>

          <div>
            <ul className="flex items-center gap-10">
              <li>
                <a className="flex items-center gap-1 hover:text-[#DA0025]" href="todaysspecial">
                  Today's Special
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.34444 2.35753C9.33145 1.46203 10.837 1.46203 11.824 2.35753C12.326 2.81299 12.9866 3.05343 13.664 3.02721C14.9957 2.97566 16.149 3.94341 16.3295 5.26384C16.4213 5.93543 16.7728 6.54425 17.3085 6.95954C18.3618 7.77606 18.6232 9.25874 17.9127 10.3863C17.5513 10.9597 17.4293 11.652 17.5727 12.3145C17.8547 13.6171 17.1019 14.9209 15.8329 15.3279C15.1875 15.535 14.6489 15.9868 14.333 16.5865C13.7118 17.7656 12.297 18.2805 11.0632 17.7766C10.4357 17.5203 9.73273 17.5203 9.10522 17.7766C7.87145 18.2805 6.45669 17.7656 5.83548 16.5865C5.51952 15.9868 4.981 15.535 4.33555 15.3279C3.06652 14.9209 2.31374 13.6171 2.59576 12.3145C2.73919 11.652 2.61712 10.9597 2.25575 10.3863C1.54525 9.25874 1.80669 7.77606 2.85997 6.95954C3.39569 6.54425 3.74719 5.93543 3.83898 5.26384C4.01947 3.94341 5.17279 2.97566 6.5045 3.02721C7.18183 3.05343 7.84243 2.81299 8.34444 2.35753Z"
                      fill="#EB0029"
                    />
                    <path
                      d="M6.94456 7.45658L6.94454 7.45657L6.94354 7.45847C6.82271 7.68742 6.76328 7.94345 6.76328 8.22434C6.76328 8.49973 6.82288 8.75525 6.94302 8.98921L6.94298 8.98924L6.94456 8.99209C7.07155 9.22066 7.2496 9.40484 7.47706 9.54384L7.47704 9.54385L7.47881 9.54489C7.70908 9.67921 7.97255 9.74497 8.26615 9.74497C8.56518 9.74497 8.82928 9.67942 9.05455 9.54426L9.05455 9.54426L9.05525 9.54384C9.28296 9.40467 9.45848 9.22005 9.57965 8.99064C9.70614 8.75646 9.76902 8.50042 9.76902 8.22434C9.76902 7.94298 9.70642 7.68658 9.57938 7.45752C9.45824 7.22841 9.28274 7.04673 9.05491 6.9135C8.82967 6.77233 8.56539 6.70371 8.26615 6.70371C7.97207 6.70371 7.70826 6.77266 7.47793 6.91319C7.24994 7.04638 7.07162 7.22788 6.94456 7.45658ZM8.85151 8.59693L8.85144 8.5969L8.84991 8.60027C8.79788 8.71474 8.72363 8.80376 8.62699 8.86988C8.53446 8.93319 8.41615 8.96784 8.26615 8.96784C8.12352 8.96784 8.00422 8.93385 7.90433 8.8692C7.80777 8.80289 7.73051 8.71349 7.67275 8.59858C7.62017 8.48229 7.59368 8.3579 7.59368 8.22434C7.59368 8.08392 7.62054 7.96004 7.67235 7.85089C7.73016 7.7356 7.80754 7.64594 7.90433 7.57947C8.00422 7.51483 8.12352 7.48084 8.26615 7.48084C8.41615 7.48084 8.53446 7.51549 8.62699 7.5788C8.72363 7.64492 8.79788 7.73394 8.84991 7.84841L8.84977 7.84847L8.85237 7.85343C8.90927 7.96207 8.93862 8.085 8.93862 8.22434C8.93862 8.35706 8.90956 8.48082 8.85151 8.59693ZM10.1854 11.0081L10.1854 11.0081L10.1843 11.01C10.0635 11.239 10.0041 11.495 10.0041 11.7759C10.0041 12.0513 10.0637 12.3068 10.1838 12.5408L10.1838 12.5408L10.1854 12.5437C10.3124 12.7722 10.4904 12.9564 10.7179 13.0954L10.7178 13.0954L10.7196 13.0965C10.9499 13.2308 11.2134 13.2965 11.507 13.2965C11.806 13.2965 12.0701 13.231 12.2954 13.0958L12.2961 13.0954C12.5238 12.9562 12.6993 12.7716 12.8204 12.5422C12.9469 12.308 13.0098 12.052 13.0098 11.7759C13.0098 11.4945 12.9472 11.2382 12.8202 11.0091C12.699 10.78 12.5235 10.5983 12.2957 10.4651C12.0705 10.3239 11.8062 10.2553 11.507 10.2553C11.2129 10.2553 10.9491 10.3242 10.7187 10.4648C10.4907 10.5979 10.3124 10.7795 10.1854 11.0081ZM12.0923 12.1485L12.0922 12.1485L12.0907 12.1518C12.0387 12.2663 11.9644 12.3553 11.8678 12.4214C11.7753 12.4848 11.657 12.5194 11.507 12.5194C11.3643 12.5194 11.245 12.4854 11.1451 12.4208C11.0486 12.3545 10.9713 12.2651 10.9135 12.1501C10.861 12.0339 10.8345 11.9095 10.8345 11.7759C10.8345 11.6355 10.8613 11.5116 10.9132 11.4025C10.971 11.2872 11.0484 11.1975 11.1451 11.131C11.245 11.0664 11.3643 11.0324 11.507 11.0324C11.657 11.0324 11.7753 11.0671 11.8678 11.1304C11.9644 11.1965 12.0387 11.2855 12.0907 11.4L12.0906 11.4L12.0932 11.405C12.1501 11.5136 12.1794 11.6366 12.1794 11.7759C12.1794 11.9086 12.1504 12.0324 12.0923 12.1485ZM11.5514 6.7925H11.4968L11.4672 6.83842L7.47172 13.0537L7.37267 13.2077H7.55584H8.22176H8.27635L8.30587 13.1618L12.3014 6.94658L12.4004 6.7925H12.2173H11.5514Z"
                      fill="white"
                      stroke="white"
                      stroke-width="0.2"
                    />
                  </svg>
                </a>
              </li>
              <li className="relative hover:text-[#DA0025]">
                <a
                  className="dropbtn flex items-center gap-1 underline "
                  href=""
                >
                  Menu
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99902 1.32642L4.65186 4.67358L1.30469 1.32642"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <div className="dropdown-content absolute hidden bg-white text-black shadow-lg rounded mt-2 w-160  z-10  p-5">
                  <div className="flex flex-wrap gap-9 items-center ">
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471937/OBJECTS_buxsga.png" className="w-[50px]" alt="" />
                        DONNER
                      </a>
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Frame_cwfw4s.png" className="w-[40px]" alt="" />
                        WRAPS
                      </a>
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Group_239205_givbng.png" className="w-[40px]" alt="" />
                        BURGER
                      </a>
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Cakes_l97qpi.png" className="w-[48px]" alt="" />
                        DESSERTS
                      </a>
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                      <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Asset_3_4x_1_gap0o0.png" className="w-[45px]" alt="" />
                        PERI PERI CHICKEN
                      </a>
                   
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                          <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/hand-drawn-fried-chicken-illustration_561641-3588_1_llkwuj.png" className="w-[50px]" alt="" />
                        FRIED ZINGER CHICKEN
                      </a>
                      <a
                        href="#"
                        className="block flex gap-2 items-center transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/plate-with-toast-face-shape-with-apple-table_1_uplmyc.png" className="w-[50px]" alt="" />
                        KIDS MEAL
                      </a>
                      <a
                        href="#"
                        className="block flex gap-2 items-center  transition-all font-[600] hover:text-[#eb0029] transform hover:translate-x-2 hover:svg-fill-red  text-[14px]"
                      >
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1742471936/Group_su4vtw.png" className="w-[36px]" alt="" />
                        DRINKS OPTIONS
                      </a>
                     
                    </div>
                    <div className="justify-end flex mt-6">
                    <a
                        href="#"
                        className="block flex gap-2 items-center justify-center transition-all px-3 py-1  text-[22px] font-[600] transform hover:translate-x-2 text-[#eb0029] rounded-full border-2 border-[#eb0029] hover:svg-fill-red w-[50%]"
                      >
                        
                        MEAL DEAL COMBO
                        
<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2071 7.29289C18.5976 7.68342 18.5976 8.31658 18.2071 8.70711L11.8431 15.0711C11.4526 15.4616 10.8195 15.4616 10.4289 15.0711C10.0384 14.6805 10.0384 14.0474 10.4289 13.6569L16.0858 8L10.4289 2.34315C10.0384 1.95262 10.0384 1.31946 10.4289 0.928932C10.8195 0.538408 11.4526 0.538408 11.8431 0.928932L18.2071 7.29289ZM1.5 9C0.947716 9 0.5 8.55228 0.5 8C0.5 7.44772 0.947716 7 1.5 7V9ZM17.5 9H1.5V7H17.5V9Z" fill="#DA0025"/>
</svg>

                      </a>
                  </div>
                  </div>
              </li>
              <li>
                <a className="hover:text-[#DA0025]" href="about-us">About Us</a>
              </li>
              <li>
                <a className="hover:text-[#DA0025]" href="product">Testimonial</a>
              </li>
              <li>
                <a className="hover:text-[#DA0025]" href="gallery">Gallery</a>
              </li>
            </ul>
          </div>

          <div>
             
              <div>
                <a href="">
                  <svg
                    width="22"
                    height="28"
                    viewBox="0 0 22 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.333 7.33464H16.333V6.0013C16.333 4.58681 15.7711 3.23026 14.7709 2.23007C13.7707 1.22987 12.4142 0.667969 10.9997 0.667969C9.58519 0.667969 8.22863 1.22987 7.22844 2.23007C6.22824 3.23026 5.66634 4.58681 5.66634 6.0013V7.33464H1.66634C1.31272 7.33464 0.973581 7.47511 0.723532 7.72516C0.473484 7.97521 0.333008 8.31435 0.333008 8.66797V23.3346C0.333008 24.3955 0.754435 25.4129 1.50458 26.1631C2.25473 26.9132 3.27214 27.3346 4.33301 27.3346H17.6663C18.7272 27.3346 19.7446 26.9132 20.4948 26.1631C21.2449 25.4129 21.6663 24.3955 21.6663 23.3346V8.66797C21.6663 8.31435 21.5259 7.97521 21.2758 7.72516C21.0258 7.47511 20.6866 7.33464 20.333 7.33464ZM8.33301 6.0013C8.33301 5.29406 8.61396 4.61578 9.11406 4.11568C9.61415 3.61559 10.2924 3.33464 10.9997 3.33464C11.7069 3.33464 12.3852 3.61559 12.8853 4.11568C13.3854 4.61578 13.6663 5.29406 13.6663 6.0013V7.33464H8.33301V6.0013ZM18.9997 23.3346C18.9997 23.6883 18.8592 24.0274 18.6091 24.2774C18.3591 24.5275 18.02 24.668 17.6663 24.668H4.33301C3.97939 24.668 3.64025 24.5275 3.3902 24.2774C3.14015 24.0274 2.99967 23.6883 2.99967 23.3346V10.0013H5.66634V11.3346C5.66634 11.6883 5.80682 12.0274 6.05687 12.2774C6.30691 12.5275 6.64605 12.668 6.99967 12.668C7.3533 12.668 7.69243 12.5275 7.94248 12.2774C8.19253 12.0274 8.33301 11.6883 8.33301 11.3346V10.0013H13.6663V11.3346C13.6663 11.6883 13.8068 12.0274 14.0569 12.2774C14.3069 12.5275 14.6461 12.668 14.9997 12.668C15.3533 12.668 15.6924 12.5275 15.9425 12.2774C16.1925 12.0274 16.333 11.6883 16.333 11.3346V10.0013H18.9997V23.3346Z"
                      fill="white"
                    />
                  </svg>
                </a>
                </div>
            
          </div>
        </div>
      </div>

  
    </>
  );
};

export default Header;
