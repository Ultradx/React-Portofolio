import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portofolio1.jpg'
import IMG2 from '../../assets/portofolio2.jpg'
import IMG3 from '../../assets/portofolio3.jpg'
import IMG4 from '../../assets/portofolio4.jpg'
import IMG5 from '../../assets/portofolio5.jpg'
import IMG6 from '../../assets/portofolio6.jpg'
import IMG7 from '../../assets/portofolio7.jpg'
import IMG8 from '../../assets/portofolio8.jpg'
import IMG9 from '../../assets/portofolio9.jpg'
import IMG10 from '../../assets/portofolio10.jpg'

import { useState } from 'react'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Netflix With React Firebase Redux React-Router And Stripe Payment',
    github: 'https://github.com/Ultradx/netflix-react-firebase-redux-stripe',
    demo: 'https://netflix-react-3c797.firebaseapp.com/',
  },
  {
    id: 2,
    image: IMG8,
    title:
      'NFT Drop Primary Marketplace Rinkeby Network | thirdweb SDK / Sanity.io',
    github: 'https://github.com/Ultradx/nft-drop-marketplace',
    demo: 'https://nft-drop-marketplace-v2.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Hulu 2.0 With Next.js Tailwind And API Call',
    github: 'https://github.com/Ultradx/hulu-2',
    demo: 'https://hulu-2-l845rwxcz-ultradx.vercel.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Gmail With Goodle Auth Router Redux Firebase',
    github: 'https://github.com/Ultradx/gmail-react-router-redux-firebase',
    demo: 'https://clone-ef33b.web.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Uniswap Transfer Ether in Ropsten Network With MetaMask Sign',
    github: 'https://github.com/Ultradx/uniswap-metamask-sanity-alchemyapi',
    demo:
      'https://uniswap-metamask-sanity-alchemyapi-enr4rkar8-ultradx.vercel.app/',
  },
  {
    id: 6,
    image: IMG6,
    title:
      'Metaverse Chat With Moralis And Metamask Auth Ropsten (You need Metamask Extension To Run This App)',
    github: 'https://github.com/Ultradx/metaverse-chat-moralis-metamask',
    demo: 'https://metaverse-chat-moralis-metamask-v2.vercel.app/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Crypto Punk Collection With ThirdWeb SDK',
    github: 'https://github.com/Ultradx/metaverse-chat-moralis-metamask',
    demo: 'https://cryptopunk-collection-kn3lub7jx-ultradx.vercel.app/',
  },
  {
    id: 8,
    image: IMG2,
    title: 'Linkedin With React Redux Firebase',
    github: 'https://github.com/Ultradx/linkedin-react-redux-firebase',
    demo: 'https://linkedin-react-redux-fir-a3beb.firebaseapp.com/',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Citizen Registry With Nodejs-Mongodb-Express-Api And Docker',
    github:
      'https://github.com/Ultradx/Citizen-Registry-Nodejs-Mongodb-Express-api',
    demo: '#',
  },
  {
    id: 10,
    image: IMG10,
    title: 'JavaFX-EWallet-Encryption-AES-SHA-RSA',
    github: 'https://github.com/Ultradx/JavaFX-EWallet-Encryption-AES-SHA-RSA',
    demo: '#',
  },
]

export default function Portfolio() {
  const [visible, setVisible] = useState(6)

  const showMoreData = () => {
    setVisible(data.length)
  }

  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.slice(0, visible).map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {demo != '#' ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
            </article>
          )
        })}
      </div>
      {visible != Object.keys(data).length && (
        <div className="load_more_div">
          <button
            className="load_more_btn btn btn-primary"
            onClick={showMoreData}
          >
            Load More..
          </button>
        </div>
      )}
    </section>
  )
}
