
import axios from "axios";
import React, { useState } from "react";

export default function UploadFile() {

    const [file, setFile] = useState(null);
    const [processedData, setProcessedData] = useState(null);


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {

        if (!file) {
           alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
            setProcessedData(response.data);
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {processedData && (
                <div>
                    <h2>Processed Data</h2>
                    <pre>{JSON.stringify(processedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );


}
