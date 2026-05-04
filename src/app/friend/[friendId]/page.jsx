import FriendsDetailsClient from "@/components/FriendsDetailsClient";
import friendData from "@/data/friendsData.json";
const page = async ({ params }) => {
  const { friendId } = await params;

  const friend = friendData.find((fr) => fr.id == friendId);

  return <FriendsDetailsClient friend={friend}></FriendsDetailsClient>;
};

export default page;
