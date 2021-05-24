import { useState, useEffect } from 'react'
import './scss/style.scss'
import data from './data'
import { v4 as uuid } from 'uuid'
import {SectionsContainer, Section} from 'react-fullpage';

export default function App() {

  //fullpage
  let options = {
    activeClass: 'active',
    anchors: ['issue5', 'issue4', 'issue3', 'issue2', 'issue1'],
    arrowNavigation: true,
    delay: 1000,
    navigation: false,
    scrollBar: window.innerWidth >= 992 && window.innerHeight >= 650 ? false : true,
    autoScrolling: true,
    verticalAlign: true,
  }

  return (
    <>
      <header>
        <img src={data.header} alt={data.headerDescription} />
      </header>

      <SectionsContainer {...options}>
        {data.magazines.map( issue => 
          <Section 
            className="wrapper" 
            key={uuid()} 
          >
            <div className="issue">
              <div className="cover">
                <img src={issue.image} alt={issue.imageDescription} />
                { issue.issuesRemaining > 0 ? (
                  <>
                    <p className="largeText">Issue #{issue.issueNumber}</p>
                    <p className="buy smallText">
                      <a href={issue.buyLink}>BUY HERE</a>
                    </p>
                    <p className="smallText">
                      or in <a href={data.selectedStores}>selected stores</a>.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="largeText">Issue #{issue.issueNumber} is sold out.</p>
                    <p className="smallText">
                      If you are lucky, you may get the last pieces in <a href={data.selectedStores}>selected stores</a>.
                    </p>
                  </>
                )}
                
              </div>  
            </div>
          </Section>
        )}
      </SectionsContainer>
                 
      <footer>
        <div className="description largeText">
          <p className="footerText">{data.description.text}</p>
          <p className="copyright">&copy; {data.description.copyright}
            <span>
              <a href={data.description.publisherLink} target="_blank" rel="noreferrer">
                {data.description.publisher}
              </a>
            </span>
          </p>
          <p className="privacyPolicy">
            <a href={data.privacyPolicy} target="_blank" rel="noreferrer">
              Privacy policy
            </a>
          </p>
        </div>

        <div className="info">
          <p className="contact largeText">
            <a href={`mailto:` + data.email}>{data.email}</a>
          </p>
          <ul className="menu">
            {data.magazines.map( issue => 
              <li key={uuid()}>
                <a href={`#issue` + issue.issueNumber}>
                  {`Issue #` + issue.issueNumber}
                </a>
              </li>
            )}
          </ul>
        </div>
      </footer>
    </>
  );
}