import ReactPlayer from "react-player";

const Player = () => {
    return (
        <ReactPlayer
            controls
            width='100%'
            height='100%'
            url={`https://cashe.libria.fun/videos/media/ts/9706/1/720/085cc688e09081dac27879ea3c411b77.m3u8`}
        />
    )
}
export default Player