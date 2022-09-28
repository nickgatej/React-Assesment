import React from "react";
import { Alert } from "antd";
import Cards from "./Cards";

function Results(props) {
  // console.log(props);
  const userdata = props.data;
  return (
    <>
      {props.username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            message={`${props.username}'s Gists`}
            description={`${userdata.length} Gists found`}
            type="success"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <ul className="paddingData">
            {userdata.map((gist) => {
              return <Cards key={gist.id} gistData={gist} />;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};

export default Results;