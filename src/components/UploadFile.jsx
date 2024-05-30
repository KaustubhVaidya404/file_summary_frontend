
import axios from "axios";
import React, { useState } from "react";
import "../styles/uploadfile.css";


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
        <div className="root">
            <h1 className="heading1">Upload File</h1>
            <input type="file" onChange={handleFileChange} className="fileinput"/>
            <button onClick={handleUpload} className="uploadbutton">Upload</button>
            {   processedData ? (
                <table>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Count</th>
                            <th>Avg. DPD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {processedData.map((data) => {
                            return (
                                <tr key={data.state}>
                                    <td>{data.state}</td>
                                    <td>{data.count}</td>
                                    <td>{data.avg_dpd}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> 
            ) : (
                <p>No data to display</p>
            )
            }
        </div>
    );


}
