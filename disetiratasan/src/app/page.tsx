import NewArrivals from "@/components/NewArrivals";
import Hover from "@/components/WelcomeText";

export default function Home() {
  return (
    <div className="max-w-1440 m-auto">
      <Hover/>
      <div className="font-bold md:text-lg text-md bg-blue-new flex item-center text-white w-60 p-1 pl-2 ml-3 mt-3">
        <h1>New Arrivals</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 h-1/2 p-3">
        <NewArrivals/>
      </div>
      
    </div>
  );
}
