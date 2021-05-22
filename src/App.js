import './scss/style.scss'
import data from './data'
import { v4 as uuid } from 'uuid'

console.log()
function App() {
  return (
    <>
      <header>
        <img src={data.header} alt={data.headerDescription} />
      </header>

      <main>
        {data.magazines.map( issue => 
        <div className="wrapper">
          <div className="issue">
            <div className="cover" id={`issue` + issue.issueNumber}>
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
          <ul class="menu">
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

export default App;
