import { Item } from "../types/Item";
const Card = ({ item }: { item: Item }) => {
  return (
    <div className="p-4 relative space-y-3 bg-white shadow-md bg-clip-border border rounded-xl w-full md:w-96">
      <div className="flex justify-between items-center">
        <h5 className="block font-sans text-xl antialiased font-verdana font-bold leading-snug tracking-normal text-blue-gray-900">
          {item.name}
        </h5>
        <span className="text-gray-900 text-xs  font-verdana">
          {item.animal}
        </span>
      </div>
      <div className="h-4 bg-gradient-to-r from-white to-black rounded-md"></div>
      <div className="text-left text-sm font-verdana text-gray-600">
        Founder: <span className="font-semibold text-sm text-black">{item.founder}</span>
      </div>
    </div>
  );
};

export default Card;
