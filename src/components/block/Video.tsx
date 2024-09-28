import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Video = () => {
    const videoURL = useSelector((state:any) => state.tmpName);
    const dispatch = useDispatch();
    const videoRef:any = useRef();

    useEffect(() => {
        return () => {
            if (videoURL) {
                URL.revokeObjectURL(videoURL);
            }
        };
    }, [videoURL]);

    return (
        <div>
            {
                videoURL 
                ? 
                    <video controls className="video" id="video" ref={videoRef}>
                        <source src={videoURL} type="video/mp4" />
                    </video>
                :
                <div className='video-placeholder'></div>
            }
        </div>
    );
}