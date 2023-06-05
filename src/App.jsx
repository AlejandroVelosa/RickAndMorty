import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import getRandomNumber from './utils/getRandomNumber';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import FormSearch from './components/FormSearch';
import IsLoading from './components/IsLoading';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const randomId = getRandomNumber(126);
  const [idLocation, setIdLocation] = useState(randomId);
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
  const [location, getApiLocation, hasError, loading] = useFetch(url);

  useEffect(() => {
    getApiLocation();
  }, [idLocation]);

  return (
    <>
      <section className='app ' >
        <header className='app_img'>
        </header>
        <nav className='imput'>
          <h2 className='imput_title'>rick and morty</h2>
          <div>
            <FormSearch setIdLocation={setIdLocation} />
          </div>
        </nav>
        <main className='app_main '>
          {hasError ? (
            < ErrorComponent />
          ) : loading ? (
            <IsLoading />
          ) : (
            <>
              <div className='location_info'>
                <LocationInfo location={location} />
              </div>
              <div className='resident_container'>
                {location?.residents.map((url) => (
                  <ResidentCard url={url} key={url} />
                ))}
              </div>
            </>
          )}
        </main>
      </section>
      <footer>
        <header>
          <h3>A l e V D e s i g n</h3>
          <p>Contact Me </p>
          <i className='bx bxs-hand-down'></i>
        </header>

        <div className='work_footer'>
          <a href="https://github.com/AlejandroVelosa" target="_blank">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/jairo-alejandro-velosa-bola%C3%B1os-879986270/" target="_blank">
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

