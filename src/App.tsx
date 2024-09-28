import { Header } from "./components/block/Header"
import { SelectVideoWindow } from "./components/block/SelectVideoWindow"
import { Subtitles } from "./components/block/Subtitles";
import { Video } from "./components/block/Video"
import { VideoObjects } from "./components/block/VideoObjects"
import { useSelector } from 'react-redux';

function App() {
  const setFileNameDisplay = useSelector((state:any) => state.setFileNameDisplay);

  return (
    <div>
      <Header />
      <div className="main-content">
        <VideoObjects />
        <div>
          <Video />
          <Subtitles />
        </div>
      </div>
      <div style={{ display: setFileNameDisplay }}>
        <SelectVideoWindow />
      </div>
    </div>
  )
}

export default App
