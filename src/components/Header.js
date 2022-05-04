import './Header.css'

export default () => {
    return (
        <header>
            <div className='header--logo'>
                <h1><a style={{color:'red'}}>TellesFlix</a></h1>
            </div>
            <div>
                <h1><a>Usuario</a></h1>
            </div>
        </header>
    )
}