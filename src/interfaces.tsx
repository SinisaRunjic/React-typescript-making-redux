// interfaces are used to see what kind of data will be passed tru function and as parameters in functions
export interface IState {
    episodes: string[];
    favourites: string[]
}

export interface IAction {
    type: string,
    payload: any
}

export interface IEpisode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}


