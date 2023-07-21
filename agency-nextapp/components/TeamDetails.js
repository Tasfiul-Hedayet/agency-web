import React from "react";
import styles from "@/styles/teamdetails.module.css";
import Image from "next/image";
import Link from "next/link";

function TeamDetails({title, avatar}) {
  const img = "";
  return (
    <>
      {/* page design starting */}
      <div className={styles.page}>
          {/* <Image
            className={styles.img}
            src="/srk.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
          /> */}
          <Image
            className={styles.img}
            // src="/srk.jpg"
            src = {avatar}
            width={150}
            height={150}
            alt="Picture of Team member"
          />
        {/* <h1>{"Tech Expert's"}</h1> */}
        <h1>{title}</h1>
        <Link className={styles.link} href="/service">Service</Link>
      </div>
    </>
  );
}

export default TeamDetails;
