import './Youtube.scss'
import YouTube, { YouTubeProps } from 'react-youtube';



const Youtube = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '740',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <div className='youapp'>
       <YouTube videoId="I9QGnNvrmoY" opts={opts} onReady={onPlayerReady} />;
        
    </div>
  )
}

export default Youtube