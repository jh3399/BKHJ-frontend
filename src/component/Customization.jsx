import React, { useState, useEffect } from 'react';
import AuthService from '../services/auth.service';
import axios from "axios";

const Customization = () => {
  const [derivedValues, setDerivedValues] = useState(null);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://localhost:5000/api/customization?id=${currentUser.id}`)
        .then(response => {
          setDerivedValues(response.data);
        })
        .catch(error => {
          console.error('Error:', error.response.data);
        });
    }
  }, [currentUser]);

  return (
    <div>
      {currentUser && (
        <p>
        </p>
      )}
      {derivedValues ? (
        <div>
          <h1>맞춤상품추천</h1>
          <p>Predictions seq: {derivedValues.predictions.join(', ')}</p>
          <p>Predictions Result: {derivedValues.result}</p>
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default Customization;