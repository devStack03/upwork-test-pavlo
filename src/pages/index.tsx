import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import { Item } from "../types/Item";
import { API_URL } from "../utils/constants";
import Spinner from "../components/Spinner";

export default function Home() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["fetchData"],
    queryFn: (): Promise<Item[]> => fetch(API_URL).then((res) => res.json()),
  });

  if (isPending) {
    return (
      <div className="w-screen h-40 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
