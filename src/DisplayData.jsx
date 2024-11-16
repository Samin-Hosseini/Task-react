function DisplayData({ data }) {
  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg">داده‌های دریافت‌شده:</h2>
      <ul>
        {data.slice(0, 5).map((post) => ( 
          <li key={post.id} className="my-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;
