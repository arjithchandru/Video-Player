import React, {useState,useEffect,Component} from 'react';
import ReactPlayer from 'react-player'
//https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=PLjp0AEEJ0-fHZDWhxhKo0wG08bMUcRy3l&key=AIzaSyAmZ1_OjIG8whtOJn4TH-tKGCpUxGTVfqQ HTTP/1.1

function VideoPlayer(props) {

  const videoName = props.match.params.videoname
  const [videos,setVideos] = useState([])

    useEffect(() =>{
   fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLyfE3pnEkrBMiCPLNDhft9hmeXK1wtkGF&key=AIzaSyAmZ1_OjIG8whtOJn4TH-tKGCpUxGTVfqQ')
      .then(res=>res.json())
      .then( data=>{
        const  result = data.items.map(item =>{
          return{title:item.snippet.title,vid:item.contentDetails.videoId}
        })
      setVideos(result)
      uid(result[0].vid)
      utit(result[0].title)
      })
    },[])

const [vid,uid] = useState("")
const [title,utit] = useState("")
const [counter,setCounter] = useState(0)

  const renderVideo = ()=>{
    return(
      <>
      <h1>{title}</h1>
      <div className="video-container">

      //  <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0"> </iframe>
      <ReactPlayer
                className='react-player'
                url={'https://www.youtube.com/watch?v=${vid}'}
                width='100%'
                height='100%'
                controls = {true}
              />
      </div>
</>
    )
  }
  return (
      <>
      {videos.length > 0 ?
        <div>
              {renderVideo()}
              <ul class="collection">
                  {
                    videos.map((item,index) => {
                      return <li key={item.vid} className={counter==index ? "collection-item myitem":"collection-item"} onClick={()=>{
                        uid(item.vid)
                        utit(item.title)
                        setCounter(index)
                      }}> {item.title}</li>
                    })
                  }
              </ul>
        </div> : <h1>loading</h1>
      }
      </>
  );
}

export default VideoPlayer;
