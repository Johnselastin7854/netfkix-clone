import React from 'react';
import requests from './requests';
import Navbar from './componenets/Navbar';
import Banner from './componenets/Banner';
import Row from "./componenets/UI/Row";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Banner */}
      <Banner/>

      {/* Rows */}
    <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} largeRow={true}/>
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
