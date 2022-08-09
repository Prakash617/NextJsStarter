import React from "react";
import { Container } from "react-bootstrap";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {};

const OurStaitic = (props: Props) => {
  const percentage = 66;
  return (
    <div>
      <div className="w-full mt-8 h-[30rem] bg-[url('https://lmstheme.wpengine.com/kids/wp-content/uploads/sites/6/2016/08/donut-bg.jpg')]">
        <div></div>
        <Container>
          <div className="flex-col">
            <hr className="h-2 mt-4" />

            <div className="flex justify-center ">
              <div className="mt-5  ">
                {" "}
                <p className="text-4xl text-white font-extrabold">
                  OUR STATISTICS
                </p>{" "}
              </div>
            </div>
            <div className="flex mt-3 space-x-4">
              <div>
                <CircularProgressbar
                  className="w-[10rem] "
                  value={50}
                  text={`${percentage}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "blue",
                    // trailColor: "gold"
                  })}
                />
                <div className="flex justify-center  mt-2">
                  <p className="text-white text-4xl italic">2011</p>
                </div>
              </div>

              <div>
                <CircularProgressbar
                  className="w-[10rem] "
                  value={30}
                  text={`${30}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    // trailColor: "gold"
                  })}
                />
                <div className="flex justify-center  mt-2">
                  <p className="text-white text-4xl italic">2012</p>
                </div>
              </div>

              <div>
                <CircularProgressbar
                  className="w-[10rem] "
                  value={70}
                  text={`${70}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "yellow",
                    // trailColor: "gold"
                  })}
                />
                <div className="flex justify-center  mt-2">
                  <p className="text-white text-4xl italic">2013</p>
                </div>
              </div>

              <div>
                <CircularProgressbar
                  className="w-[10rem] "
                  value={65}
                  text={`${65}%`}
                  strokeWidth={3}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "green ",
                    // trailColor: "gold"
                  })}
                />
                <div className="flex justify-center mt-2">
                  <p className="text-white text-4xl italic">2016</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurStaitic;
