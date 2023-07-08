import React from "react"

function Meme() {
    const [memes, setMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(dataset => setMemes(dataset.data.memes))
    }, [])
    return (
        <>
            {memes.length? <img src={memes[1].url}/> : <></>}
        </>
    )
}

export default Meme