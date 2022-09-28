import { Input } from "antd";
import { AudioOutlined } from '@ant-design/icons';

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
  // to do
  const onSearch = async (username) => {
    
  };

  return (
      <Search
        placeholder="Enter username"
        allowClear
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
  );
}

export default SearchBar;
