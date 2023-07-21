import styles from "@/styles/service.module.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function ServiceDetails() {
  return (
    <>
      <div className={styles.page}>
        {/* page design starting */}
          <Image
            className={styles.img}
            src="/web.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          {/* <Image
            className={styles.img}
            // src="/srk.jpg"
            src = {avatar}
            width={150}
            height={150}
            alt="Picture of Team member"
          /> */}
          <h1>{"Web Service"}</h1>
          {/* <h1>{title}</h1> */}
          <p>{"A Web service is a method of communication between two electronic devices over a network. It is a software function provided at a network address over the Web with the service always-on as in the concept of utility computing. Many organizations use multiple software systems for management."}</p>
          <Link className={styles.link} href="/team">
            Home
          </Link>
        </div>
    </>
  );
}

export default ServiceDetails;
