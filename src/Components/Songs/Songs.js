import React from 'react'
import Song from './Song/Song'

const Songs = () => {
    const songs = [
        {
            "id": "5b8e47deb3984c68ed8192e3",
            "title": "Easter Oratorio (in Am)",
            "artist": "Johann Sebastian Bach",
            "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/586a75fa-99df-4ce0-af71-55f6a474c404.jpg",
            "level": 6,
            "search": "johann sebastian bach easter oratorio (in am)"
        },
        {
            "id": "5b8e47deb3984c68ed8192e3",
            "title": "Easter Oratorio (in Am)",
            "artist": "Johann Sebastian Bach",
            "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/586a75fa-99df-4ce0-af71-55f6a474c404.jpg",
            "level": 6,
            "search": "johann sebastian bach easter oratorio (in am)"
        },
        {
            "id": "5b8e47deb3984c68ed8192e3",
            "title": "Easter Oratorio (in Am)",
            "artist": "Johann Sebastian Bach",
            "images": "https://d3mzlbmn9ukddk.cloudfront.net/songs/image/586a75fa-99df-4ce0-af71-55f6a474c404.jpg",
            "level": 6,
            "search": "johann sebastian bach easter oratorio (in am)"
        },
    ]

    return (
        <div>
            {songs.map((song) => (
                <Song song={ song } key={ song.id } />
            )) }
        </div>
    )
}

export default Songs
