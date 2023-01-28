import React from "react";
import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <img
        className="w-1/2 lg:w-1/3 2xl:w-1/2  bottom-0 right-0 fixed"
        src="img/mainG.png"
        alt="hero bg"
      />
      <div className="mb-40 2xl:mb-60">
        <h1 className="mx-4 lg:w-1/2 px-3 mt-10 text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-extrabold max-w-7xl">
          FROM THE ALLEY TO THE GARDEN{" "}
          <span className="text-[#CE8600] opacity-20 ">//</span>
        </h1>
        <div className="m-auto flex mt-9 mx-4 items-center w-1/2">
          <div className="mt-10  mx-auto">
            <h4 className=" text-sm lg:text-base font-Inconsolata mt-3 px-4 py-2 ">
              Azuki is a brand. A new kind of brand that we build together.
              <span className="block rounded font-extrabold w-fit px-3 bg-gradient-to-r from-red-400">
                A brand for the metaverse. By the community.
              </span>
            </h4>
            <h4 className=" text-sm lg:text-base font-Inconsolata mt-1 px-4 py-2 ">
              A collection of 10,000 avatars that give you membership access to
              The Garden. It starts with exclusive streetwear collabs, NFT
              drops, live events, and much more that will be revealed over time.
              Community ownership in Azuki allows for a new genre of media which
              the world has yet to explore. An Azuki is your identity in the
              metaverse — let's build together.
            </h4>
            <h4 className="text-sm lg:text-base font-Inconsolata mt-1 px-4 py-2 ">
              The Garden is a corner of the internet where art, community, and
              culture fuse to create magic. The lines between the physical and
              digital worlds are blurring and the rules are being rewritten.
            </h4>
            <h4 className="text-sm lg:text-base font-Inconsolata mt-1 px-4 py-5 ">
              Take the Red Bean.
              <span className="px-3 w-fit py-1 block lg:inline rounded-3xl bg-black text-white lg:px-3 lg:py-2 lg:mx-2 cursor-pointer">
                We Did
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="mb-40 2xl:mb-60">
        <h1 className="mx-4 lg:w-1/2 px-3 mt-10 text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold max-w-7xl">
          CREATED BY MANY <span className="text-[#CE8600] opacity-20 ">//</span>
        </h1>
        <div className="m-auto flex mt-9 mx-4 items-center w-1/2">
          <div className="mt-10  mx-auto">
            <h4 className=" text-sm lg:text-base font-Inconsolata mt-3 px-4 py-2 ">
              The core team is born in Los Angeles, CA - a team of human beans
              with backgrounds in crypto, technology, and gaming{" "}
              <span className="mr-2 rounded font-extrabold w-fit px-3 bg-gradient-to-r from-red-400">
                working to build a decentralized brand of the future.
              </span>
            </h4>
            <div className="flex flex-wrap">
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/1.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/2.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1 "
                src="img/3.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/4.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/5.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1 "
                src="img/6.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/7.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/8.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/9.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1 "
                src="img/10.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/11.png"
              />
              <img
                className="mask mask-squircle w-24 xl:w-28 2xl:w-36 bg-red-200  mx-2 my-1"
                src="img/12.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-40 2xl:mb-60">
        <h1 className="mx-4 lg:w-1/2 px-3 mt-10 text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold max-w-7xl">
          OWNED BY ALL <span className="text-[#CE8600] opacity-20 ">//</span>
        </h1>
        <div className="m-auto flex mt-9 mx-4 items-center w-1/2">
          <div className="mt-10  mx-auto">
            <h4 className=" text-sm lg:text-base font-Inconsolata mt-3 px-4 py-2 ">
              The real team is the broader Azuki community -
              <span className="mx -2 rounded font-extrabold w-fit px-3 bg-gradient-to-r from-red-400">
                a global community working together
              </span>
              to build a decentralized brand of the future:
            </h4>
            <svg
              class="fill-current text-gray-300 overlay-item w-fit mx-auto"
              viewBox="0 0 3608 2033"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m3215.867 734.259-71.297 34.604-17.824-24.872 64.73-34.604 24.39 24.872Zm-97.564 63.802-55.35 103.812-89.12 52.988-25.33-34.604 89.122-57.313 30.02-100.569 50.658 35.686Zm-13.134 220.602-29.082 24.872-26.267-94.08 17.824 5.406 37.525 63.802Zm47.844 408.763-179.18-43.256-5.63-73.534 167.924 48.662 16.886 68.128Zm255.168 400.111-62.854 88.674-30.02-4.326-8.443-50.825 77.864-97.324-31.896-55.15 17.824-30.28 30.02 50.825 7.505 98.406Zm-482.192-527.715-33.773 68.127-29.081-4.325 29.081-77.86 33.773 14.058Zm-62.854-14.058-35.649 77.86-63.792-19.465 4.69-58.395 55.35-63.801 39.4 63.801Zm549.737-759.13-119.141 15.139 3.752 48.662-71.297 108.138-14.072-98.405 39.401-58.395-136.965 15.14-80.678 48.661-10.32 40.012 57.226-15.14 3.752 93-38.462 4.325-12.196 45.418-77.864 59.476 12.196 38.93-49.72 38.93-17.825-68.128-33.772 20.547 8.443 137.335-145.408 97.325 38.463 64.883-63.792 43.255-26.267-57.313-13.134 4.325 13.134 63.802 51.596 38.93-17.824 20.546-33.772-10.814 8.443 30.279 30.02 4.325 16.885 59.476 77.864 33.523 3.753 30.279-89.121-18.384-124.77-157.881 51.596 4.325-73.173-182.754v-49.743h-20.638l-9.382 45.418-71.296 63.801v59.477l-56.288 18.383-34.71-112.464-24.391-8.65 3.753-65.965-205.448-43.256 33.772 63.802 34.71-14.058 38.463 43.255-38.463 55.15-90.059 38.93-93.812-207.625h-25.329l-3.752 40.011 62.854 147.068 47.844 41.093 73.173-6.488-132.275 221.683 15.948 19.465 5.629 73.534-39.401 34.604-4.69 55.15-102.255 142.743-81.617-5.406-72.235-227.09 22.515-34.605v-58.395l-60.978-83.266 25.33-19.465-59.102-44.337-119.14-4.325-69.421-70.29-3.753-151.394 153.851-153.556 85.37-8.651 21.576 28.116-4.69 24.871 68.482 24.872 33.772-34.604 26.267 24.872 92.874 5.407 17.824-20.547v-59.476l-38.463 59.476-50.658-78.94 8.443 78.94-47.844-40.01-8.443-58.395-57.225-76.779-10.32 12.977 45.968 73.534-30.02 48.662-12.195-58.394-51.596-44.337-29.082 30.279-17.824-10.814-97.565 104.894-34.71-110.301 68.483 5.407 12.195-34.605-25.329-30.278 43.153-38.93 25.33-4.326 47.844-49.743-13.134-38.93 25.33-14.058 16.885 29.197 86.307-5.407 3.753-28.115 93.811-41.093-16.886-23.79-59.101 23.79-17.824-43.255 43.153-38.93-25.33-30.279-55.348 83.267 19.7 19.465-3.752 50.825-55.35 18.383-13.133-38.93-59.101 8.651 3.752-58.394 97.565-151.394 107.883-30.279 161.356 43.256-29.081 50.825-63.792-6.489 42.215 49.744 123.831-94.08h81.617l-55.35-72.453 63.793-75.697 89.12-43.255 13.135 34.604-84.431 34.604-47.844 58.395 97.564 69.209-15.948-34.605 59.102-59.476 106.945 30.279 15.948-38.93 193.252-84.348 132.275 33.523-97.564 64.883 303.011 35.686 51.597-59.476 24.391 52.987 146.346 15.14 42.216 25.953 119.14-16.22v187.079Zm-212.953 1104.092-73.173 156.8-59.102-5.407-115.388-98.406-3.753 24.872-141.655 33.523 16.886-68.127-30.02-14.058v-84.348l184.81-137.336 84.43 63.802 4.69-54.07 25.33-4.325 106.945 187.08Zm-1504.74-995.954-3.753 41.092h-60.04l18.763-41.092-39.401-48.662 29.081-34.605 17.825 48.663 37.524 34.604Zm-119.142-185.998-76.925 63.802-45.968-78.941 85.369-24.872 37.524 40.01Zm242.035 426.065-26.268-10.814 15.948-29.197 10.32 40.01Zm-258.92-786.166-50.659 49.744-9.381 123.278-76.926 137.335-122.893 43.256-30.02 84.348-55.349-4.326-63.792-113.545-25.33-152.475-51.596-44.337-56.287 20.546-29.081-45.418 92.873-133.01L1465.34 0l93.811 88.673Zm60.977 562.32-26.267 33.522-29.082-30.278 24.391-48.663 30.958 45.419Zm567.561 817.525-38.463 141.661-55.349-44.336 15.948-63.802 55.35-49.744 22.514 16.221ZM973.766 1033.802l-33.772-19.465v-34.604l33.772 54.07Zm124.77 94.08-21.577 9.733-106.945-44.337 7.504-24.872 121.018 59.476Zm-150.1-73.534-8.442 30.28-65.668-16.222 6.566-36.767 67.545 22.71Zm401.515 343.88-33.772 45.418-9.381 88.674-259.859 320.089c9.381 18.384 12.196 40.011 8.443 63.802l-33.772 38.93 30.02 43.255-26.268 34.604-67.544-87.592v-142.743l42.215-281.16-56.287-30.278-59.101-170.858 25.329-44.337v-49.744h-59.101l-26.268-59.476-33.772 4.326-120.079-77.86-38.463-54.069h-46.906L456.863 842.397l5.629-98.406-44.092-73.534-29.081 9.733-21.577-49.744 25.33 4.326-63.793-77.86-84.43-15.14L38.463 659.645l73.173-82.185L60.04 532.04 38.463 364.426l85.369-49.744 409.957 49.744-76.926-63.802 17.824-84.347L884.645 35.686l158.542 8.65L902.469 227.09l186.685 176.266-59.101 73.534-111.636-22.71 14.072-80.021h-39.401l-16.886 55.15 12.195 47.58-84.43-8.65-44.092 68.127 30.958 29.197 60.04 20.547 55.349 73.534 20.638-73.534-12.195-15.14v-73.534l132.274 24.872 106.946 148.15-150.1 98.405v52.988l-26.267-4.325-25.329 29.197 5.629 38.93-60.978 59.476 17.825 64.883h-30.02l-25.33-44.337h-93.811l-35.649 73.534 35.649 38.93h15.948l33.772-23.79 22.515 14.057-8.443 55.15 33.772 4.326 8.443 59.477h60.978l59.101-29.198 42.216 18.384 79.74 3.244 5.628 60.557h64.73l7.505 70.29h44.092l114.45 87.592ZM3608 458.506l-128.522-4.325-30.02 14.058 33.772 38.93-70.358 19.465v-187.08l173.551 80.023 21.577 38.93ZM311.455 1084.627l-16.886 34.604-59.102-45.418-39.4 23.79-93.812-63.8 8.443-29.198 106.945 49.743 41.277-24.871 52.535 55.15ZM72.235 970.001l-46.906 34.604L0 940.803l72.235 29.198Zm376.185 635.853-25.329 29.197-38.463-29.197 26.267-30.279 37.525 30.279Zm-67.544-44.337-30.02 19.465-39.401-30.279 30.02-43.255 39.4 54.069Zm1923.14-754.805-4.69-40.011-21.577 3.244 2.815 40.01 23.453-3.243Zm-76.925 63.801-28.144-63.801 23.453-36.767-12.195-15.14-24.391 21.628 5.629 104.894 35.648-10.814Zm-132.275-65.964-30.957-57.313-29.082-6.489 1.876 25.954-25.329 3.244-21.577-32.442-38.463 55.15 7.505 34.605 33.773-30.279h26.267l75.987 7.57Z"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-40 2xl:mb-60">
        <h1 className="mx-4 lg:w-1/2 px-3 mt-10 text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold max-w-7xl">
          INTO THE RABBIT HOLE{" "}
          <span className="text-[#CE8600] opacity-20 ">//</span>
        </h1>
        <div className="m-auto flex mt-9 mx-4 items-center w-1/2">
          <div className="mt-10  mx-auto">
            <h4 className=" text-sm lg:text-base font-Inconsolata mt-3 px-4 py-2 ">
              To the ones with the courage to jump down a peculiar rabbit hole.
              One that pulls you away from a world that's created by many and
              owned by few...
            </h4>
            <div className="flex justify-end ">
              <button className="btn btn-wide justify-center mb-10 mx-4 mr-16 mt-8 hover:bg-red-600 border-none font-extrabold">
                <Link to="/mint">Mint</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
