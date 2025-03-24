import ListComponent from "./ListComponent";

const UlComponent = ({data, side, handleChange}) => {
  return (
    <div className="flex flex-col gap-4 border-1 border-gray-400 p-4 w-full">
      <ul className="flex flex-col gap-4">
        <ListComponent data = {data} side = {side} handleChange= {handleChange}/>
      </ul>
    </div>
  );
};

export default UlComponent;