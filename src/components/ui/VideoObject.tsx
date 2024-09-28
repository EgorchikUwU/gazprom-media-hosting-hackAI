interface ITimeCode {
    start: number;
    end: number;
}

interface IVideoObject {
    timeCodes: ITimeCode[];
    tagName: string;
}

export const VideoObject = ({ tagName, timeCodes }:IVideoObject) => {
    return (
        <div className="video-object">
            <h2 className="tag-name">{ tagName }</h2>
            <p className="tag-timecodes-count">{ timeCodes.length }</p>
        </div>
    );
}