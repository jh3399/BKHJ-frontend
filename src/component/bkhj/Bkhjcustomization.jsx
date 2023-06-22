import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Bkhjcustomization.css";
import Customization from "../Customization";

const Bkhjcustomization = () => {
        const [derivedValues, setDerivedValues] = useState(null);
        const [showModal, setShowModal] = useState(false);
        const currentUser = AuthService.getCurrentUser();
      
        useEffect(() => {
          if (currentUser) {
            axios
              .get(`http://localhost:5000/api/customization?id=${currentUser.id}`)
              .then((response) => {
                setDerivedValues(response.data);
              })
              .catch((error) => {
                console.error("Error:", error.response.data);
              });
          }
        }, [currentUser]);
      
        const handleModalOpen = () => {
          setShowModal(true);
        };
      
        const handleModalClose = () => {
          setShowModal(false);
        };

  return (
    <>
    <section className="credit-section">
      <div className="credit-wrapper">
        <div className="user-info">
          {currentUser && <p>{currentUser.username}</p>}
        </div>
        {/* 버튼창 start*/}
        <div className="bkhj-top-menu">
          <button
            onClick={() => (window.location.href = "/credit")}
            className="button-credit"
          >
            신용대출
          </button>
          <button
            onClick={() => (window.location.href = "/diagnosis")}
            className="button-diagnosis"
          >
            금리진단
          </button>
          <div className="estate-button">알아보기</div>
          <div className="loans-button">QnA</div>
        </div>
        {/* 버튼창 end */}
        {/* 시작하기창 start*/}
        <div className="credit-start">
        <Customization/>
        </div>
      </div>
      {/* 시작하기창 end*/}
    </section>
  </>
  )
}

export default Bkhjcustomization;