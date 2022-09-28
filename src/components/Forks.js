import React from "react";
import { Avatar } from "antd"
import { Image } from "antd"

function Forks(props) {
  const forks = props.forks.forks || [];
  console.log(forks, "a");

  return (
    <div className="forksBox">
      <p>Forks:</p>
      {forks && forks.length !== 0 ? (
        forks.map((fork, i) => (
          <ul key={i}>
            <li>
              <a
                href={`https://gist.github.com/${fork.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <Avatar
                  src={<Image src={fork.user.avatar_url} />}
                  style={{ margin: 5 }}
                />
                {fork.user.login}
              </a>
            </li>
          </ul>
        ))
      ) : (
        <p>No forks yet.</p>
      )}
    </div>
  );
}

export default Forks;
