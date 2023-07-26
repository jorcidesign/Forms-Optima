import React from "react";
import Logo from "../components/Logo";
import CustomConsultationForm from "../components/info";

const ConsultantPage = () => {
  return (
    <div className="container justify-content-center text-center mt-5">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="col-12">
          <CustomConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default ConsultantPage;
