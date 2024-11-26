import React, { useState } from "react";
import { Button, Upload, message } from "antd";
import axios from "axios";

const UploadPackage: React.FC = () => {
  const [uploadMethod, setUploadMethod] = useState<
    "uploadZip" | "uploadGithub"
  >("uploadZip");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");

  // Function to handle file upload
  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    return false; // Prevents automatic upload
  };

  // Function to convert file to base64 and send POST request
  const handleUpload = async () => {
    if (selectedFile && uploadMethod === "uploadZip") {
      const base64String = await convertFileToBase64(selectedFile);
      console.log("this is my 64 encoded string", base64String);
      // Send the base64 string to your API
      axios
        .post("http://localhost:3000/package", {
          Content: base64String,
          Name: selectedFile.name,
          JSProgram: "console.log('Hello, World!');",
          debloat: false,
        })
        .then((response) => {
          message.success("File uploaded successfully!");
          console.log(response.data);
        })
        .catch((error) => {
          message.error("Failed to upload file.");
          console.error(error);
        });
    } else if (uploadMethod === "uploadGithub") {
      message.warning("GitHub URL upload is not implemented yet.");
    } else {
      message.warning("Please select a file to upload.");
    }
  };

  // Function to convert file to base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1]; // Remove the prefix (data:application/zip;base64,)
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <select
        className="dropdown"
        onChange={(e) =>
          setUploadMethod(e.target.value as "uploadZip" | "uploadGithub")
        }
      >
        <option value="uploadZip">Upload Zip File</option>
        <option value="uploadGithub">Upload by GitHub URL</option>
      </select>
      <input
        className="name-input"
        placeholder="Enter Package Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {uploadMethod === "uploadZip" ? (
        <div className="drag-drop-area">
          <Upload.Dragger
            multiple={false}
            beforeUpload={handleFileChange} // Prevents auto-upload and allows manual handling
            accept=".zip"
          >
            <Button>Upload File</Button>
          </Upload.Dragger>
        </div>
      ) : (
        <input
          type="text"
          placeholder="Enter GitHub URL"
          className="input-box"
        />
      )}
      <button className="action-buttons" onClick={handleUpload}>
        Upload Package
      </button>
    </>
  );
};

export default UploadPackage;
