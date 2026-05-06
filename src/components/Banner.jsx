import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <div className="py-10 bg-base-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="py-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <div className="pb-5">
          <button className="btn btn-neutral">
            <Plus size={20} />
            Add a Friend
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 w-10/12 mx-auto gap-4">
        <div className="bg-white text-center p-5 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold">10</h2>
          <p>Total Friends</p>
        </div>
        <div className="bg-white text-center p-5 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold">3</h2>
          <p>On Track</p>
        </div>
        <div className="bg-white text-center p-5 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold">6</h2>
          <p>Need Attention</p>
        </div>
        <div className="bg-white text-center p-5 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
