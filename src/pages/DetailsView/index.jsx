import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailssView.css'; // Import the CSS file

const ItemDetail = () => {
  const { pcName } = useParams();
  const [pcInfo, setPcInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/system_info/${pcName}/`)
      .then((response) => response.json())
      .then((data) => setPcInfo(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [pcName,pcInfo]);

  if (!pcInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-container">
      <div className="detail-table">
        <h2>System Information</h2>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PC Name</td>
              <td>{pcInfo.pc_name}</td>
            </tr>
            <tr>
              <td>CPU Usage</td>
              <td>{pcInfo.cpu_usage}%</td>
            </tr>
            <tr>
              <td>Memory Usage</td>
              <td>{pcInfo.memory_usage}%</td>
            </tr>
            <tr>
              <td>RAM Total</td>
              <td>{pcInfo.ram_total} GB</td>
            </tr>
            <tr>
              <td>RAM Available</td>
              <td>{pcInfo.ram_available} GB</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="detail-table">
        <h2>Installed Apps</h2>
        <table>
          <thead>
            <tr>
              <th>App Name</th>
            </tr>
          </thead>
          <tbody>
            {pcInfo.installed_apps.map((app, index) => (
              <tr key={index}>
                <td>{app}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     <div className="detail-table">
        <h2>Running Processes</h2>
        <table>
            <thead>
            <tr>
                <th>Process Name</th>
                <th>PID</th>
            </tr>
            </thead>
            <tbody>
            {pcInfo.running_processes.map((process, index) => (
                <tr key={index}>
                <td>{process.name}</td>
                <td>{process.pid}</td>
                </tr>
            ))}
            </tbody>
        </table>
     </div>






    </div>
  );
};

export default ItemDetail;
