import TeamDetails from '@/components/TeamDetails'
import React from 'react'
import styles from "@/styles/team.module.css";

function team() {

  const avatar = '/srk.jpg';
  const description = 'Gregorio Y. Zara';
  const title = 'Tech Expert'
  const title1 = 'SEO Expert'

  return (
    <div className={styles.page}>
    <TeamDetails title={title}  avatar={avatar} />
    <TeamDetails title={title1}  avatar={avatar} />
    <TeamDetails title={title1}  avatar={avatar} />
    <TeamDetails title={title1}  avatar={avatar} />
    <TeamDetails title={title1}  avatar={avatar} />
    <TeamDetails title={title1}  avatar={avatar} />
    </div>
  )
}

export default team