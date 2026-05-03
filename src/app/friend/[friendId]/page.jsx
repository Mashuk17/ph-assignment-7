import friendData from "@/data/friendsData.json";
import { Archive, BellDot, Trash } from "lucide-react";
import Image from "next/image";
const page = async ({ params }) => {
  const { friendId } = await params;

  const friend = friendData.find((fr) => fr.id == friendId);

  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;

  return (
    <div className="bg-base-200 py-10 flex justify-center gap-6">
      <div>
        <div>
          {/* left top card section */}
          <div className="card bg-base-100 max-w-60 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={picture}
                alt="Shoes"
                className="rounded-full h-20 w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p
                className={`text-white px-3 py-1 rounded-2xl ${status == "overdue" ? "bg-red-400" : status === "on-track" ? "bg-black" : "bg-amber-400"}`}
              >
                {status}
              </p>
              <p className="bg-green-200 p-1 rounded-2xl px-3">{tags[0]}</p>
              <p className="text-black/50">{`"${bio}"`}</p>
              <p>Preferred:{email}</p>
            </div>
          </div>
        </div>
        {/* left lower 3 buttons section */}
        <div>
          <button className="btn w-full bg-white">
            <BellDot size={16} />
            Snooze 2 Weeks
          </button>
        </div>
        <div>
          <button className="btn w-full bg-white">
            <Archive size={16} />
            Archive
          </button>
        </div>
        <div>
          <button className="btn w-full bg-white">
            <Trash size={16} />
            Delete
          </button>
        </div>
      </div>
      {/* right section */}
      <div className="flex flex-col">
        {/* right top 3 cards */}
        <div className="flex gap-4 pb-5">
          <div className="bg-white p-4 rounded-xl text-center">
            <p>{days_since_contact}</p>
            <p>Days Since Contact</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <p>{goal}</p>
            <p>Goal(Days)</p>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <p>{next_due_date}</p>
            <p>Next Date</p>
          </div>
        </div>
        {/* right middle card */}
        <div className="flex justify-between bg-white p-4 rounded-xl">
          <div>
            <p>Relationship Goal</p>
            <p>
              Connection every <span>{goal} days</span>
            </p>
          </div>
          <div>
            <button className="btn">Edit</button>
          </div>
        </div>
        {/* right side bottom card */}
        <div className="bg-white mt-5 p-4 rounded-xl">
          <h2>Quick Check-In</h2>
          <div className="pt-2 grid grid-cols-3 gap-3">
            <div className="bg-base-200 p-4 space-y-2 flex flex-col justify-center items-center rounded-xl">
              <Image
                src="/call.png"
                alt="call icon"
                height={20}
                width={20}
              ></Image>
              <p>Call</p>
            </div>
            <div className="bg-base-200 p-4 space-y-2 flex flex-col justify-center items-center  rounded-xl">
              <Image
                src="/text.png"
                alt="call icon"
                height={20}
                width={20}
              ></Image>
              <p>Text</p>
            </div>
            <div className="bg-base-200 p-4 space-y-2 flex flex-col justify-center items-center  rounded-xl">
              <Image
                src="/video.png"
                alt="call icon"
                height={20}
                width={20}
              ></Image>
              <p>Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
