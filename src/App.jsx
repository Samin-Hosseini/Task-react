import { useState } from "react";
import Button from "./Button";
import DisplayText from "./DisplayText"; 
import  axios  from "axios";
import DisplayData from "./DisplayData";

function App() {
  const [text, setText] = useState("سلام کاربر شماره یک");
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchData = async () => {
    setLoading(true); 
    setError(null); 
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data); 
    } catch (err) {
      setError("خطا در دریافت داده‌ها: " + err.message); 
    } finally {
      setLoading(false); 
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
      <DisplayText text={text} className="mb-4"/>
      
   
      <Button text="تغییر متن" setText={setText} />
      <Button text="گرفتن اطلاعات" setText={fetchData} />

            {loading && <p>در حال بارگذاری...</p>}

            {error && <p className="text-red-500">{error}</p>}

            {data && <DisplayData data={data} />}
      
    </div>
  );
}

export default App;
