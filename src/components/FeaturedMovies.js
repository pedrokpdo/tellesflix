import React from 'react'
import './FeatureMovies.css'

export default ({ item }) => {

    console.log(item);

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className='featured' style={{
            background: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average}pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--popularidade'>{item.popularity}Popularidades</div>
                    </div>
                    <div className='featured--description'>{item.overview}Popularidades</div>
                    <div className='featured--buttons'>
                        <a className='featured--watchbutton' href='/' >assistir</a>
                        <a className='featured--mylistbutton' href='/' >+ minha lista</a>
                    </div>
                </div>
            </div>
        </section>
    )
}