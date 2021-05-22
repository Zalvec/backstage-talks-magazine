import './scss/style.scss'
import data from './data'
import { v4 as uuid } from 'uuid'

console.log()
function App() {
  return (
    <>
      <header>
        {data.header}
      </header>

      <main>
        {data.magazines.map( issue => 
          <div className="cover">
            <img src={issue.image} alt={issue.imageDescription} />
            { issue.issuesRemaining > 0 ? (
              <>
                <p>Issue #{issue.issueNumber}</p>
                <p>
                  <a href={issue.buyLink}>BUY HERE</a>
                </p>
                <p>
                  or in <a href={data.selectedStores}>selected stores</a>.
                </p>
              </>
            ) : (
              <>
                <p>Issue #{issue.issueNumber} is sold out.</p>
                <p>
                  If you are lucky, you may get the last pieces in <a href={data.selectedStores}>selected stores</a>.
                </p>
              </>
            )}
            
          </div>  
        )}
      </main>
      
      <footer>
        <p className="description">
          {data.description.text}
          <span className="copyright">
            &copy; {data.description.copyright}
            <a href={data.description.publisherLink} target="_blank" rel="noreferrer">
              {data.description.publisher}
            </a>
            <a href={data.privacyPolicy} target="_blank" rel="noreferrer">
              Privacy policy
            </a>
          </span>
        </p>
        <div className="info">
          <p className="contact">
            <a href={`mailto:` + data.email}>{data.email}</a>
          </p>
          <ul>
            {data.magazines.map( issue => 
              <li key={uuid()}>
                <a href={`issue` + issue.issueNumber}>
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
