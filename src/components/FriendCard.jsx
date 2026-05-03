import Link from "next/link";

const FriendCard = ({ friend }) => {
  return (
    <div>
      <Link href={`/friend/${friend.id}`}>
        <div className="card bg-base-100 max-w-60 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src={friend.picture}
              alt="Shoes"
              className="rounded-full h-20 w-20"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{friend.name}</h2>
            <p className="text-black/50">{friend.days_since_contact}d ago</p>
            <p className="bg-green-200 p-1 rounded-2xl px-3">
              {friend.tags[0]}
            </p>
            <p
              className={`text-white px-3 py-1 rounded-2xl ${friend.status == "overdue" ? "bg-red-400" : friend.status === "on-track" ? "bg-black" : "bg-amber-400"}`}
            >
              {friend.status}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
