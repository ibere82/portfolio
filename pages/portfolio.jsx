import React from 'react'
import Card from '../components/molecules/Card'

const jobs = [
  {
    title: "Calculator",
    src: "calculator",
    description: "Calculator developed using API to convert string Math",
    externalURL: "http://calculator.ibere.co",
    category: "deployed",
  },
  {
    title: "Alurakut",
    src: "alurakut",
    description: "Desenvolvida durante imersão react da alura",
    externalURL: "https://alurakut.ibere.co",
    category: "deployed",
  },
  {
    title: "Number In full",
    src: "pt-br-number-in-full",
    description: "Converts a number to a brasilian portuguese word number",
    externalURL: "https://www.npmjs.com/package/pt-br-number-in-full",
    category: "NPM package",
  },
  {
    title: "Oauth with Next using passport and next-connect",
    src: "oauth-with-next",
    description: "POC Oauth with Next using passport and next-connect",
    externalURL: "",
    category: "pocs",
  },

]

export default function portfolio() {


  return (
    <main>

      {jobs.map(({ title, src, description }, index) => {
        return (
          <div key={index}>

            <Card
              title={title}
              description={description}
              src={src}
             
              />

          </div>
        )
      })}
    </main>)
};
