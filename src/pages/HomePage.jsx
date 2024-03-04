import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [advocates, setAdvocates] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  let getData = async (query = "") => {
    let response = await axios.get(`http://localhost:8000/advocates?query=${query}`);
    setAdvocates(response.data);
    //setTotal(response.data.total)
    //setPagination(response.data.pagination)
  };

  let seacrhData = (fieldValue) => {
    fieldValue.preventDefault()
    let query = fieldValue.target.query.value
    getData(query)

  }

  return (
    <div className="main--container">
      <h1>Search {total} developer advocates</h1>
      {pagination.results_found ? <p>{pagination.results_found} Developer advocates found</p>: null}
      <div>
        <form onSubmit={seacrhData} id="search_form">
            <input type="text" name="query" placeholder="Search advocates..."/>
            <input type="submit" value="Search" className="btm_item_primary"/>
        </form>
      </div>
      <br/>
      <div className="advocate__lists">
        {advocates.map((advocate, index) => (
          <div className="advocate__preview__wrapper" key={index}>
            <div className="advocate__preview_header">
              <Link to={`/advocates/${advocate.username}`}>
                <img
                  className="advocate__preview__image"
                  src={advocate.profile_pic}
                />
              </Link>
              <div>
                <strong> {advocate.name} </strong>
                <br />
                <a href={advocate.twitter} target="_blank"> @{advocate.username} </a>
              </div>
            </div>
            <small className="bio__preview">{advocate.bio}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
