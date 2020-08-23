import React from 'react';
import { IEpisode } from './interfaces'

const EpisodesList = (props: any): Array<JSX.Element> => {
    const { episodes, toogleFavAction, favourites } = props;
    return (
        episodes.map((episode: IEpisode) => (
            <section className="episode-box" key={episode.id}>
                <p>Name of episode: {episode.name}</p>
                <p>Air date of episode: {episode.air_date}</p>
                <section>
                    <button type="button" onClick={() => toogleFavAction(episode)}>{favourites.includes(episode) ? 'Unfav' : 'Fav'}</button>
                </section>
            </section>
        ))
    )
}

export default EpisodesList;