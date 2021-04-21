import axios from 'axios'
import ReddititError from './Error'

const api = `https://meme-api.herokuapp.com/gimme`

export const getRandomPost = async (subreddit: string): Promise<RedditResponse> => {
    if (!subreddit) throw new ReddititError('Subreddit not provided')
    if (typeof subreddit !== 'string') throw new ReddititError('The arguement \'subreddit\' must be a string')
    try {
        return (await axios.get(`${api}/${subreddit}`)).data
    } catch(err) {
        return err.response.data
    }
}

type RedditResponse = IRedditPost | IErr

interface IRedditPost {
    postLink: string
    subreddit: string
    title: string
    url: string
    nsfw: boolean
    spoiler: boolean
    author: string
    ups: number
    preview: string[]
}

interface IErr {
    code: number,
    error: string
}