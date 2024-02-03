
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table, Row } from 'reactstrap'
import "../styles/transac.css";
import { useNavigate } from 'react-router-dom';

const ClientTransac = () => {
          const [data, setData] = useState([]);

          useEffect(() => {
                    // Fetch your data here and update the state
                    fetchDataFromAPI();
          }, []);


          const fetchDataFromAPI = async () => {
                    try {
                              const response = await fetch('http://localhost:4000/api/v1/booking/'); // Replace with your API endpoint
                              if (!response.ok) {
                                        throw new Error('Network response was not ok');
                              }
                              const jsonData = await response.json();
                              setData(jsonData.data); // Assuming your data is inside a "data" property in the response
                    } catch (error) {
                              console.error('Error fetching data:', error);
                    }
          };

          return (

                    <div className="scroller total_table ">
                              {/* <SearchDataentry /> */}
                              <div className=" border_table">



                                        <Table responsive className='noWrap table ' bordered >

                                                  <thead>
                                                            <tr p-15>
                                                                      <th>DATE </th>
                                                                      <th>FULL NAME</th>
                                                                      <th>TOUR NAME</th>
                                                                      <th>EMAIL</th>
                                                                      <th>GUEST SIZE</th>
                                                                      <th>PHONE NUMBER</th>
                                                                      <th>BOOKED AT</th>

                                                            </tr>
                                                  </thead>
                                                  <tbody>

                                                            {data.map((item, index) => (
                                                                      <tr key={index}>
                                                                                <td> {formatDate(item.createdAt)}</td>
                                                                                <td>{item.fullName}</td>
                                                                                <td> {item.tourName}</td>
                                                                                <td> {item.userEmail}</td>
                                                                                <td> {item.guestSize}</td>
                                                                                <td> {item.phone}</td>
                                                                                <td> {formatDate(item.bookAt)}</td>


                                                                      </tr>
                                                            ))}

                                                  </tbody>
                                        </Table>

                              </div>
                    </div>



          )

}

function formatDate(dateString) {
          const date = new Date(dateString).getDate()
          const month = new Date(dateString).getMonth()
          const year = new Date(dateString).getFullYear()
          return `${date}/${month}/${year}`;
}

export default ClientTransac