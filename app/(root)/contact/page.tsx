import React from "react";
import Main from "../../../components/pages/contact/main";
import Advertising from "../../../components/pages/contact/advertising";
import Header from "../../../components/common/header";
import Form from "../../../components/common/form";

export default function page() {
  return (
    <>
      <div>
        <div className="absolute top-0  z-50 w-full">
          <Header />
        </div>
        <Advertising />
        <Form />
      </div>
    </>
  );
}
