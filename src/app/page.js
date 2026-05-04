import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import friendsData from "@/data/friendsData.json";

export default function Home() {
  return (
   <div className="bg-base-200">
    <Banner></Banner>
      <div className="w-10/12 mx-auto py-10">
        <h2 className=" font-bold mb-1">Your Friends</h2>
        <div className="grid grid-cols-4 gap-4 ">
        {
          friendsData.map(friend=> <FriendCard key={friend.id} friend={friend}></FriendCard>)
        }
        </div>
      </div>
   
   </div>
  );
}


