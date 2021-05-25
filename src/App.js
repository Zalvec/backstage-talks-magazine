import { useEffect } from 'react'
import './scss/style.scss'
import data from './data'
import { v4 as uuid } from 'uuid'

export default function App() {

  //Adding and removing 'active' class
  function removeActiveClass() {
    document.querySelectorAll(".menuItem").forEach( (menuItem) => {
      menuItem.classList.remove('active')
    })
  }

  function addActiveClass(num) {
    document.getElementById('menuItem' + num).classList.add('active')
  }

  function setActiveClass(num) {
    removeActiveClass()
    addActiveClass(num)
  }

  //Change body background-color
  function setBodyBackgroundColor(num) {
    const body = document.body
    body.classList = 'fp-issue' + num
  }

  //If statement when scrolling to implement the right background-color and 'active' class
  function scrollPosIfStatement(scrollPos) {
    const windowHeight = window.innerHeight

    if (scrollPos < 0.5*windowHeight) {
      const num = 5
      setBodyBackgroundColor(num)
      setActiveClass(num)
    }
    else if (scrollPos < 1.5*windowHeight) {
      const num = 4
      setBodyBackgroundColor(num)
      setActiveClass(num)
    }
    else if (scrollPos < 2.5*windowHeight) {
      const num = 3
      setBodyBackgroundColor(num)
      setActiveClass(num)
    }
    else if (scrollPos < 3.5*windowHeight) {
      const num = 2
      setBodyBackgroundColor(num)
      setActiveClass(num)
    }
    else {
      const num = 1
      setBodyBackgroundColor(num)
      setActiveClass(num)
    }
  }

  //Change background-color when scroll-snap is active
  useEffect( () => {
    const main = document.getElementById('main')

    main.addEventListener('scroll', (e) => {
      const scrollPos = e.target.scrollTop
      scrollPosIfStatement(scrollPos)
    }) 
  })

  //Change background-color when scroll-snap is inactive
  useEffect( () => {
    window.addEventListener('scroll', (e) => {
      const scrollPos = e.target.scrollingElement.scrollTop
      scrollPosIfStatement(scrollPos)
    })
  })

  return (
    <>
      <header>
        <img src={data.header} alt={data.headerDescription} />
      </header>

      <main id="main">
        {data.magazines.map( ({issueNumber, image, imageDescription, issuesRemaining, buyLink}) => 
          <div 
            className="wrapper" 
            id={`issue` + issueNumber}
            key={uuid()} 
          >
            <div className="issue">
              <div className="cover">
                <img src={image} alt={imageDescription} />
                { issuesRemaining > 0 ? (
                  <>
                    <p className="largeText">Issue #{issueNumber}</p>
                    <p className="buy smallText">
                      <a href={buyLink} target="_blank" rel="noreferrer">BUY HERE</a>
                    </p>
                    <p className="smallText">
                      or in <a href={data.selectedStores} target="_blank" rel="noreferrer">selected stores</a>.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="largeText">Issue #{issueNumber} is sold out.</p>
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
            {data.magazines.map( ({issueNumber}) => 
              <li key={uuid()} className={'menuItem'} id={`menuItem` + issueNumber} >
                <a href={`#issue` + issueNumber}>
                  {`Issue #` + issueNumber}
                </a>
              </li>
            )}
          </ul>
        </div>
      </footer>
    </>
  );
}