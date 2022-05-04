import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <h1><a style={{color:'red', marginBottom:'30px'}}>TellesFlix</a></h1>
            </div>
            <div>
               
                <h1> <input></input><a>Search</a></h1>
            </div>
        </header>
    )
}