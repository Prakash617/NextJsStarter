import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Btn from "../Reusable/Button/Btn";

type Props = {};

const NavTop = (props: Props) => {
  return (
    <div>
      <div className=" w-full  lg:w-3/5 mx-auto my-2">
        <div className="flex flex-col  md:flex-row">
          <div className="mx-auto">
            <h1 className="font-bold text-2xl">Consolution</h1>
          </div>
          <div className="mx-auto md:ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-row gap-4">
                <div className="my-auto">
                  <FaTelegramPlane className="text-3xl  text-blue-500" />
                </div>
                <div className="text-sm">
                  <h1 className="font-medium">Email</h1>
                  <p className="text-gray-400">youremail@email.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="my-auto">
                  <BsFillTelephoneFill className="text-xl  text-blue-500" />
                </div>
                <div className="text-sm">
                  <h1 className="font-medium">Phone</h1>
                  <p className="text-gray-400">Call Us: + 1235 2355 98</p>
                </div>
              </div>
              <div>
                <Btn text={"Free Consulting"} icon={undefined} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
