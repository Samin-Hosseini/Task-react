const Button = (props) => {
  const handleClick = () => {
    props.setText("متن جدید بعد از کلیک");
  };

  return (
    <button
      className="px-5 py-2 border border-gray-600 rounded-lg text-black hover:bg-gray-300 hover:text-black"
      onClick={handleClick} 
    >
      {props.text}
    </button>
  );
};

export default Button;

