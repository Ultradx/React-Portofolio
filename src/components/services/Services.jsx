import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Simple Content Structure That Everyone Understand</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Clean Design Patterns</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Interactive And Dynamic Layouts</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Working With Figma Designing Tool</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Working With Marvel Designing Tool</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Responsive Websites Built</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Optimal User Experience</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Working With The Latest Frameworks And Packeges</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Frontend And Backend Development</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Build Websites From Scratch And Deploy To The Server</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Third-party APIs</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>DApps</h3>
          </div>

          <ul className="service__list">
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Creating Dapps That Interact With Ethereum Blockchain</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Working With Third Web SDK</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Create And Deploy Smart Contracts</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Interact With Smart Contracts Both Ether.js Or Web3.js</p>
            </li>
            <li>
              <div className="service__list-icon-container">
                <BiCheck className="service__list-icon" />
              </div>
              <p>Deploy Your Application In RPC Nodes - Moralis And Alchemy</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}
