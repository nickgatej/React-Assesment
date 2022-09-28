function File(props) {
  const files = props.filelist;
  return (
    <div className="fileBox">
      <p>Files:</p>
      <ul>
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              {/* file.raw_url */}
              <a href={file.raw_url} target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default File;
