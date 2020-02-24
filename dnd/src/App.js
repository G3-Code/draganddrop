import React from "react";
import { useDropzone } from "react-dropzone";

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  // const Container = styled.div`
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   padding: 20px;
  //   border-width: 2px;
  //   border-radius: 2px;
  //   border-color: ${props => getColor(props)};
  //   border-style: dashed;
  //   background-color: #fafafa;
  //   color: #bdbdbd;
  //   outline: none;
  //   transition: border 0.24s ease-in-out;
  // `;

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' Drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
function App() {
  return (
    <div>
      <Basic />
    </div>
  );
}

export default App;
