import BuildCustom from "@/components/BuildCustomize";
import NewArrivals from "@/components/NewArrivals";
import Trending from "@/components/Trending";
import Hover from "@/components/WelcomeText";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import CollectionForm from "@/app/login/CollectionForm"
import { User } from "./User";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    
    <div className="max-w-1440 m-auto">
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <h1>Client Call</h1>
      <User/>

      <Hover/>
      <div className="font-bold md:text-lg text-md bg-blue-new flex item-center text-white w-60 p-1 pl-2 ml-3 mt-3">
        <h1>New Arrivals</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 h-1/2 p-3">
        <NewArrivals/>
      </div>
      <div className="p-3">
        <BuildCustom/>
      </div>
      <Trending/>
    </div>
  );
}
