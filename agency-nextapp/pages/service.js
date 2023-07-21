import ServiceDetails from "@/components/ServiceDetails";
import styles from "@/styles/service.module.css";
import React from "react";

function service() {
  return (
    <>
      <div className={styles.servicePage}>
        <ServiceDetails />
        <ServiceDetails />
        <ServiceDetails />
        <ServiceDetails />
        <ServiceDetails />
        <ServiceDetails />
      </div>
    </>
  );
}

export default service;
