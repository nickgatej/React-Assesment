import React, { useState } from "react";
import { getGistURL } from "../API_config/api_config";
import { Card, Button, Tag, Divider } from "antd";
import File from "./File";
import Forks from "./Forks";

function Cards(props) {
  const unidata = props.gistData;
  const files = props.gistData.files; // files from json

  const fileArray = []; // fileArray will contain all the programming languages used
  for (let file in files) {
    let language = files[file].language;
    if (fileArray.indexOf(language) === -1) {
      fileArray.push(language);
    }
  }

  // the number of files of a user is the number of keys in files
  // "files": {
  //   "hello_world.rb": {
  //     "filename": "hello_world.rb",
  //     "type": "application/x-ruby",
  //     "language": "Ruby",
  //     "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
  //     "size": 175
  //   }
  // },

  const noOfFiles = Object.keys(files).length;

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const moreOpen = async (value) => {
    if (value !== "") {
      try {
        const URL = getGistURL(value);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setShow(true);
      } catch (e) {
        console.log(e);
        setShow(false);
      }
    }
  };

  return (
    <div className="site-card-wrapper">
      <Card
        title={unidata.description || "No Description"}
        bordered={false}
        extra={
          <Button type="primary" onClick={() => moreOpen(`/${unidata.id}`)}>
            More
          </Button>
        }
      >
        <p className="numberFiles">
          {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
        </p>

        <div>
          {fileArray.map((language, index) => {
            return (
              <Tag color="geekblue" key={index}>
                {language}
              </Tag>
            );
          })}
        </div>

        <File filelist={files} />

        {show && data !== [] ? <Forks forks={data} /> : null}
      </Card>
      <Divider dashed />
    </div>
  );
}

export default Cards;
