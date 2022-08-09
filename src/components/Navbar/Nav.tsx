import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const Nav = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className=" bg-black text-white w-full h-full  p-4 flex md:justify-center md:items-center">
        <div className="w-4/5 hidden md:block  ">
          <div className="flex flex-col md:flex-row">
            <ul className="flex flex-col mx-auto md:flex-row md:space-x-7 space-y-2 cursor-pointer ">
              <li></li>
              <li className="cursor pointer hover:text-blue-300">Home</li>
              <li className="cursor pointer hover:text-blue-300">About</li>
              <li className="cursor pointer hover:text-blue-300">Project</li>
              <li className="cursor pointer hover:text-blue-300">Services</li>
              <li className="cursor pointer hover:text-blue-300">Blog</li>
              <li className="cursor pointer hover:text-blue-300"> <Link href="/contact"> Contact</Link></li>
            </ul>
            <div className="mx-auto md:ml-auto  mt-2 md:mt-0">
              <div className=" border-[1.5px] border-white rounded-full overflow-hidden ">
                <div className="flex ">
                  <input
                    type="text"
                    placeholder=" Search"
                    className="placeholder:text-slate-200 p-1 placeholder:text-sm  bg-black outline-none bg-none  "
                  />
                  <BsSearch className="text-lg my-auto cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  w-full  md:hidden">
          <div className="flex items-center">
            <div onClick={openModal}>
              <GiHamburgerMenu className="text-3xl inline-block" />
            </div>
            <div>
              <h1 className="text-2xl font-bold uppercase inline-block">
                Menu
              </h1>
            </div>
            {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed  inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel>
                        <ul className="flex h-screen  w-screen relative flex-col bg-black text-xl text-white space-y-8 ">
                          <li></li>
                          <li onClick={closeModal} className="cursor-pointer">
                            Home
                          </li>
                          <li onClick={closeModal} className="cursor-pointer">
                            About
                          </li>
                          <li onClick={closeModal} className="cursor-pointer">
                            Project
                          </li>
                          <li onClick={closeModal} className="cursor-pointer">
                            Services
                          </li>
                          <li onClick={closeModal} className="cursor-pointer">
                            Blog
                          </li>
                          <li onClick={closeModal} className="cursor-pointer">
                            Contact
                          </li>
                          <li
                            onClick={closeModal}
                            className="cursor-pointer text-4xl absolute right-7 top-4"
                          >
                            X
                          </li>
                        </ul>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          <div className="ml-auto">
            <div className=" border-[1.5px] border-white   rounded-full overflow-hidden  ">
              <div className="flex ">
                <input
                  type="text"
                  placeholder=" Search"
                  className="placeholder:text-slate-200 p-1 placeholder:text-sm  bg-black outline-none bg-none  "
                />
                <BsSearch className="text-lg my-auto cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
