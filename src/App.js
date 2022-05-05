import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import Tmdb from './Tmdb';
import './App.css'
import FeaturedMovies from './components/FeaturedMovies';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState (false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)


      let originals = list.filter(items => items.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      setFeaturedData(chosen)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  },[])
  return (
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData &&
        <FeaturedMovies item={featuredData} />
      }

      <section className='lists'>

        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>
      <footer>
        Feito com Amor ❤️ por 
        <br />
        Direitos de imagens para NetFlix
        <br/>
        Dados Pegos do site TMDB
      </footer>
    </div>
  );
}

