import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AdvocatePage() {
  const params = useParams();
  const username = params.username;

  const [advocate, setAdvocate] = useState();

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response = await axios.get(
      `http://localhost:8000/advocates/${username}`
    );
    setAdvocate(response.data);
  };

  return (
    <>
      {advocate && (
        <div className="advocate__preview__wrapper">
            <img
              className="advocate__preview__image"
              src={advocate.profile_pic}
            />
          <strong> {advocate.name} </strong>
          <br />
          <a href={advocate.twitter}> @{advocate.username} </a>
          <small>{advocate.bio}</small>
        </div>
      )}
    </>
  );
}
