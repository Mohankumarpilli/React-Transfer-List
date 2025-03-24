const ListComponent = ({ data, side, handleChange}) => {
  return (
    <>
      {data.map((ele, index) => {
        const id = `${side}-${index}`
        return <li key={index} className="flex gap-10">
            <input type="checkbox" id={id} checked={ele.status} onChange={() => handleChange(id)}/>
            <label htmlFor={id}>{ele.value}</label>
        </li>;
      })}
    </>
  );
};

export default ListComponent;
