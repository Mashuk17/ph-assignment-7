"use client";
import { TimelineContext } from "@/context/TimelineProvider";
import Image from "next/image";
import { useContext, useState } from "react";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");
  const [sortedOrder, setSortedOrder] = useState("newest");
  const [search, setSearch] = useState("");

  const handleFilter = (type) => {
    setFilter(type);
  };

  const handleSortedOrder = (order) => {
    setSortedOrder(order);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filteredTimeline =
    filter == "All" ? timeline : timeline.filter((item) => item.type == filter);

  const searchedTimeline = filteredTimeline.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedTimeline = [...searchedTimeline].sort((a, b) => {
    if (sortedOrder == "newest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  // console.log(filter);

  return (
    <div className="bg-base-200 p-10">
      <div className="w-10/12  mx-auto">
        <h2 className="text-2xl font-bold">Timeline</h2>
        {/* filter dropdown */}
        <div>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              {filter == "All"
                ? "ALL ⬇️"
                : filter == "Call"
                  ? "Call ⬇️"
                  : filter == "Text"
                    ? "Text ⬇️"
                    : "Video ⬇️"}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleFilter("All")}>
                <a>All</a>
              </li>
              <li onClick={() => handleFilter("Call")}>
                <a>Call</a>
              </li>
              <li onClick={() => handleFilter("Text")}>
                <a>Text</a>
              </li>
              <li onClick={() => handleFilter("Video")}>
                <a>Video</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          {/* sort buttons */}
          <div>
            <button
              className={`btn ${sortedOrder == "newest" ? "btn-neutral" : ""}`}
              onClick={() => handleSortedOrder("newest")}
            >
              Newest
            </button>
            <button
              className={`btn ${sortedOrder == "oldest" ? "btn-neutral" : ""}`}
              onClick={() => handleSortedOrder("oldest")}
            >
              Oldest
            </button>
          </div>

          {/* search field */}
          <div>
            <input
              type="text"
              placeholder="search by name or type"
              className="input "
              value={search}
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>

        {/* tileline data card */}
        <div>
          {sortedTimeline.map((value, index) => (
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
                <h2>{new Date(value.date).toLocaleDateString()}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
