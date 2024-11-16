const DisplayText = (props) => {
  return (
    <div className={"mt-6"}> 
      {props.text && <p className="text-lg font-medium text-black">{props.text}</p>}
    </div>
  );
};

export default DisplayText;

