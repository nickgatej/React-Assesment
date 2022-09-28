import { useState } from "react";
import { Input } from "antd";
import { Alert } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { getAllGistsURL, getGistURL } from "../API_config/api_config";
import Results from "./Results";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

function SearchBar() {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const onSearch = async (username) => {
    const usersname = username.trim() // removing spaces
    setUsername(usersname);
    if (usersname && usersname !== "") {
      try {
        const URL = getAllGistsURL(usersname);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setError(false);
      } catch (e) {
        setError(true);
      }
    } else if (usersname === "") {
      setError(true);
    }
  };

  return (
    <>
      <Search
        placeholder="Enter username"
        allowClear
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />

      {username !== "" && data && !error ? (<Results data={data} username={username} />) : null}
     
      {username && data.length === 0 ? (
        <Alert
          message="Error"
          description="No data found"
          type="error"
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}

      {username === '' ? (
        <Alert
          message="Error"
          description="Empty Username!"
          type="error"
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}
    </>
  );
}

export default SearchBar;
