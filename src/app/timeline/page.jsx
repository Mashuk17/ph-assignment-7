"use client";
import { TimelineContext } from "@/context/TimelineProvider";
import Image from "next/image";
import { useContext } from "react";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="bg-base-200 p-10">
      <div className="w-10/12 mx-autow-10/12 mx-auto">
        <h2>Timeline</h2>
        <div>
          {timeline.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-2 my-4 flex gap-4 items-center"
            >
              <div>
                {value.type == "Call" ? (
                  <Image
                    src="/call.png"
                    alt="call icon"
                    height={20}
                    width={20}
                  ></Image>
                ) : value.type == "Text" ? (
                  <Image
                    src="/text.png"
                    alt="call icon"
                    height={20}
                    width={20}
                  ></Image>
                ) : (
                  <Image
                    src="/video.png"
                    alt="call icon"
                    height={20}
                    width={20}
                  ></Image>
                )}
              </div>
              <div>
                <h2>
                  {value.type} with {value.name}
                </h2>
                <h2>{value.date}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
