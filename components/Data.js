import { useContext } from 'react';
import { formatDistance } from 'date-fns';
import { ScrapeContext } from './ScrapeContext';

export default function Data() {
  const { scrapes } = useContext(ScrapeContext);
  console.log(scrapes);
  return (
    <div>
      <h2>your data:</h2>
      <ul>
        { scrapes.twitter.map(scrape => (
          <li key={scrape.date}>
            {scrape.count}
            -
            { formatDistance(new Date(scrape.date), new Date()) }
          </li>
        )) }
      </ul>

    </div>
  )
}
