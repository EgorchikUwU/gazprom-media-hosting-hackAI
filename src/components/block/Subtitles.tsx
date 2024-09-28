import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const subtitles = [
  { title: 'Кот мяукает', start: 0, end: 11 },
  { title: 'Собака лает', start: 11, end: 32 },
  { title: 'Тарелка упала и разбилась', start: 32, end: 43 },
];

export const Subtitles = () => {
  const [subtitlesIndex, setSubtitlesIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const video = document.getElementById('#video');
    if (!video) return; 

    const updateCurrentTime = () => {
      setCurrentTime(video.currentTime);
      dispatch({ type: 'SET_CURRENT_TIME', payload: video.currentTime });
    };

    video.addEventListener('timeupdate', updateCurrentTime);

    return () => {
      video.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, []);

  useEffect(() => {
    if (subtitlesIndex < subtitles.length - 1 && currentTime >= subtitles[subtitlesIndex].end) {
      setSubtitlesIndex(subtitlesIndex + 1);
    }
  }, [currentTime, subtitlesIndex]);

  return (
      <div className='subtitles'>
        <p>{subtitles[subtitlesIndex]?.title}</p>
      </div>
  );
};
