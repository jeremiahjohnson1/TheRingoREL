import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Login from './Login';

const SubmittedData = () => {
  const [data, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/form-data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/form-data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <>
          <nav className='bg-amber-200'>
            <ul>
              <li>
                <Link to="/">
                  <p>HOME</p>
                </Link>
              </li>
            </ul>
          </nav>
          <h2>Submitted Data</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Middle Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>SSN</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Driver's License</th>
                <th>Passport Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.middleName}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.ssn}</td>
                  <td>{item.dob}</td>
                  <td>{item.gender}</td>
                  <td>
                    <img
                      src={`http://localhost:3001/${item.driversLicense}`}
                      alt="Driver's License"
                      width="100"
                    />
                  </td>
                  <td>
                    <img
                      src={`http://localhost:3001/${item.passportPhoto}`}
                      alt="Passport Photo"
                      width="100"
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SubmittedData;
