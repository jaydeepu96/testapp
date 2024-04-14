import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
      console.log("response", response);
      setUserData(response.data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6" style={{ paddingTop: "10px" }}>
          {userData && (
            <Card style={{ width: "100%", height: "200px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <Card.Img
                    variant="left"
                    src={userData.picture.large}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title>{`${userData.name.first} ${userData.name.last}`}</Card.Title>
                    <Card.Text>
                      <p>{userData.gender}</p>
                      <p>{userData.phone}</p>
                      <p>{userData.email}</p>
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
