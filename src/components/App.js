import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect( () => {
        onSearchSubmit('dog');
    }, []);

    const onSearchSubmit = async keyword => {
        const resopnse = await youtube.get('/search', {params: { q: keyword }});
        setVideos(resopnse.data.items);
        setSelectedVideo(resopnse.data.items[0]);
    }

    return (
        <div className="ui container">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            <div className="ui grid" >
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;