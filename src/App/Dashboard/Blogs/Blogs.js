import React,{useEffect,useState} from "react";
import axios from "axios";

function Blogs() {
  const [searchWord, setSearchWord] = useState({
    word: "",
  });

  async function getDoctors(info) {
    await axios
      .get(`http://localhost:4000/api/v1/blogs/search/${info}`)
      .then((response) => {
        console.log("Blogs found");
        console.log(response.data);
        // let arrayData = Array.from(response.data);
        // setDoctors(arrayData);
      })
      .catch(async () => {
        console.log("no blogs found");
      });
  }

  useEffect(() => {
    getDoctors(searchWord.word);
  }, [searchWord]);

  function handle(e) {
    const newinfo = { ...searchWord };
    newinfo[e.target.id] = e.target.value;
    setSearchWord(newinfo);
    console.log(newinfo);
    // getDoctors(newinfo)
  }
  return (
    <div>
      <div className="searchBg">
        <h2>Search for Blogs</h2>
        <input
          type="text"
          placeholder="       Search here"
          id="word"
          onChange={(e) => handle(e)}
          value={searchWord.word}
          className="searchBar"
        />
      </div>
    </div>
  );
}

export default Blogs;
