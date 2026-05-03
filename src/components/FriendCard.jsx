const FriendCard = ({ friend }) => {
  return (
    <div>
      <div className="card bg-base-100 max-w-60 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-full h-20 w-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          <p className="text-black/50">{friend.days_since_contact}d ago</p>
          <p className="bg-green-200 p-1 rounded-2xl px-3">{friend.tags[1]}</p>
          <p
            className={`text-white px-3 py-1 rounded-2xl ${friend.status == "overdue" ? "bg-red-400" : friend.status === "on-track" ? "bg-black" : "bg-amber-400"}`}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
