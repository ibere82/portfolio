import React from 'react';
import Head from 'next/head'
import Card from '../../components/molecules/Card'
import jobs from '../../data/jobs.json'

export default function portfolio() {

  return (
    <>
      <Head>
        <title>Iberê's portfolio</title>
        <meta name="Page with Iberê's portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr'
        }}>

        {jobs.map(({ title, page, description }, index) => {
          return (
            <Card
              key={index}
              title={title}
              description={description}
              page={page}
            />
          )
        })}
      </main>
    </>
  )
};
