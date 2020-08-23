import React from 'react';
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';

/* use react hook layz to import component or functional component*/
const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const App = (): JSX.Element => {
  // access to store and dispatch
  const { state, dispatch } = React.useContext(Store);
  // hook that fires every time on render
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL = 'https://rickandmortyapi.com/api/episode/'
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON.results
    })
  }
  const toogleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    if (episodeInFav) {
      const favEpisodeWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
      return (
        dispatch({
          type: 'REMOVE_FAV',
          payload: favEpisodeWithoutEpisode
        }))
    }
    return (dispatch({
      type: 'ADD_FAV',
      payload: episode
    }))

  }
  const onC = () => {
    console.log('object');
  }
  const props = {
    episodes: state.episodes,
    toogleFavAction,
    favourites: state.favourites
  }


  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty season 1 episodes</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>
          Favourite(s): {state.favourites.length}
        </div>
      </header>
      <React.Suspense fallback={<div>LOADING....</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
      <button onClick={onC}> Click me</button>
    </React.Fragment>
  )
}

export default App;