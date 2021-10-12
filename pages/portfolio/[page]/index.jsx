import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import jobs from "../../../data/jobs.json"

export default function Index() {
  const [pageInfo, setPageInfo] = useState({ title: '', page: '', description: '', externalURL: '', linkDescription: '', categories: [] })

  const router = useRouter()
  const { page } = router.query

  useEffect(() => {
    const thisJob = jobs.find((job) => job.page == page)
    if (thisJob) {
      setPageInfo(() => thisJob)
    }
  }, [page])

  return (
    <>
      <Head>
        <title>{pageInfo.title}</title>
        <meta name={pageInfo.description} content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{pageInfo.title}</h2>
        <h3>{pageInfo.description}</h3>

        <p><a
          href={pageInfo.externalURL}
          rel="noreferrer"
          target="_blank"
        >Click to view the {pageInfo.linkDescription}</a></p>

        <h3>Categories</h3>
        <ul>
          {pageInfo.categories.length > 0 && pageInfo.categories.map((category, index) => {
            return (
              <li key={index}>
                {category}
              </li>
            )
          })}
        </ul>

      </main>
    </>
  )
};
