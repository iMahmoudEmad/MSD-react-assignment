import { useState } from 'react'
import Song from './Song/Song'

const Songs = () => {
    const [ songs, setSongs ] = useState([ {
        "id": "5b8e47deb3984c68ed8192e3",
        "title": "Easter Oratorio (in Am)",
        "artist": "Johann Sebastian Bach",
        "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/586a75fa-99df-4ce0-af71-55f6a474c404.jpg",
        "level": 6,
        "search": "johann sebastian bach easter oratorio (in am)"
    },
    {
        "id": "5b8f736fb3984c13548374af",
        "title": "Fysyoni (in Bm)",
        "artist": "Traditional",
        "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/2524751a-c107-40e5-8de8-08e68b9d8ca8.jpg",
        "level": 10,
        "search": "traditional fysyoni (in bm)"
    },
    {
        "id": "5b8e471cb3984c68ed81926d",
        "title": "Gettin' Along",
        "artist": "The unknown",
        "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/90c50bda-6935-49df-b5db-bbb493af4fed.jpg",
        "level": 12,
        "search": "the unknown gettin' along"
    },
    {
        "id": "5b8e447eb3984c68ed8190bf",
        "title": "Fysouni (in Bm)",
        "artist": "Traditional",
        "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/4c08e106-c82e-4c61-ae7c-18068023297c.jpg",
        "level": 3,
        "search": "traditional fysouni (in bm)"
    } ])

    return (
        <div>
            {songs.map((song) => (
                <Song song={ song } key={ song.id } inFavorite="true" />
            )) }
        </div>
    )
}

export default Songs
