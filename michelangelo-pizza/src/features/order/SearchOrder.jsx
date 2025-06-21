import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate =useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    if(!query.trim()) return
    
    navigate(`/order/${query.trim()}`)
    setQuery("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
export default SearchOrder;