import { VideoObject } from "../ui/VideoObject";

const tags = [
    {
        tagName: '#кот',
        timeCodes: [
            {
                start: 1,
                end: 10,
            },
            {
                start: 31,
                end: 60,
            },
            {
                start: 31,
                end: 60,
            },
        ]
    },
    {
        tagName: '#собака',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#тарелка',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#шкаф',
        timeCodes: [
            {
                start: 1,
                end: 10,
            },
        ]
    },
    {
        tagName: '#стул',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#стол',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#кровать',
        timeCodes: [
            {
                start: 1,
                end: 10,
            },
            {
                start: 31,
                end: 60,
            },
        ]
    },
    {
        tagName: '#ноутбук',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#бутылка',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#монитор',
        timeCodes: [
            {
                start: 1,
                end: 10,
            },
            {
                start: 31,
                end: 60,
            },
        ]
    },
    {
        tagName: '#наушники',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
    {
        tagName: '#мышка',
        timeCodes: [
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
            {
                start: 11,
                end: 31,
            },
            {
                start: 60,
                end: 80,
            },
        ]
    },
]

export const VideoObjects = () => {
    return (
        <div className="objects-container">
            <h2 className="objects-title">Поиск по объектам</h2>
            {
                tags.map((tag) => (
                    <VideoObject 
                        tagName={tag.tagName}
                        timeCodes={tag.timeCodes}
                        key={tag.tagName}
                    />
                ))
            }
        </div>
    );
}