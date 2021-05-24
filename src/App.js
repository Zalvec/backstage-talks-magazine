import { useEffect } from 'react'
import './scss/style.scss'
import data from './data'
import { v4 as uuid } from 'uuid'

export default function App() {

  //change backgroundcolor when scroll-snap is active
  useEffect( () => {
    const main = document.getElementById('main')
    const body = document.body

    main.addEventListener('scroll', (e) => {
      const scrollPos = e.target.scrollTop
      const windowHeight = window.innerHeight

      switch(scrollPos){
        case 0:
          body.classList = 'fp-issue5'
          break
        case windowHeight:
          body.classList = 'fp-issue4'
          break
        case 2*windowHeight:
          body.classList = 'fp-issue3'
          break
        case 3*windowHeight:
          body.classList = 'fp-issue2'
          break
        case 4*windowHeight:
          body.classList = 'fp-issue1'
          break
        default:
          break
      }
    }) 
  })

  //change color when scroll-snap is inactive
  useEffect( () => {
    const body = document.body

    window.addEventListener('scroll', (e) => {
      const scrollPos = e.target.scrollingElement.scrollTop
      const windowHeight = window.innerHeight

      if (scrollPos < 0.6*windowHeight) body.classList = 'fp-issue5'
      else if (scrollPos < 1.6*windowHeight) body.classList = 'fp-issue4'
      else if (scrollPos < 2.6*windowHeight) body.classList = 'fp-issue3'
      else if (scrollPos < 3.6*windowHeight) body.classList = 'fp-issue2'
      else body.classList = 'fp-issue1'
    })
  })

  return (
    <>
      <header>
        <img src={data.header} alt={data.headerDescription} />
      </header>

      <main id="main">
        {data.magazines.map( issue => 
          <div 
            className="wrapper" 
            id={`issue` + issue.issueNumber}
            key={uuid()} 
          >
            <div className="issue">
              <div className="cover">
                <img src={issue.image} alt={issue.imageDescription} />
                { issue.issuesRemaining > 0 ? (
                  <>
                    <p className="largeText">Issue #{issue.issueNumber}</p>
                    <p className="buy smallText">
                      <a href={issue.buyLink} target="_blank" rel="noreferrer">BUY HERE</a>
                    </p>
                    <p className="smallText">
                      or in <a href={data.selectedStores} target="_blank" rel="noreferrer">selected stores</a>.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="largeText">Issue #{issue.issueNumber} is sold out.</p>
                    <p className="smallText">
                      If you are lucky, you may get the last pieces in <a href={data.selectedStores} target="_blank" rel="noreferrer">selected stores</a>.
                    </p>
                  </>
                )}
                
              </div>  
            </div>
          </div>
        )}
      </main>
                 
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