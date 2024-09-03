onload = () =>{
        document.body.classList.remove("container");
    };
    
    document.addEventListener("DOMContentLoaded", function() {
        const lyrics = [
            { id: "placeholder", start: 0, end: 14 },
            { id: "line1", start: 15, end: 20 },
            { id: "line2", start: 21, end: 26 },
            { id: "line3", start: 27, end: 32 },
            { id: "line4", start: 33, end: 38 },
            { id: "line5", start: 39, end: 44 },
            { id: "line6", start: 45, end: 50 },
            { id: "line7", start: 51, end: 56 },
            { id: "line8", start: 57, end: 62 },
            { id: "line9", start: 63, end: 68 },
            { id: "line10", start: 69, end: 74 },
            { id: "line11", start: 75, end: 84 },
            { id: "line12", start: 85, end: 90 },
            { id: "line13", start: 91, end: 95 },
            { id: "line14", start: 96, end: 101 },
            { id: "line15", start: 102, end: 106 },
        ];
    
        let currentTime = 0;
    
        function updateLyrics() {
            lyrics.forEach(lyric => {
                const lineElement = document.getElementById(lyric.id);
    
                if (currentTime >= lyric.start && currentTime <= lyric.end) {
                    lineElement.classList.remove("hide");
                    lineElement.classList.add("typing");
                } else {
                    lineElement.classList.remove("typing");
                    lineElement.classList.add("hide");
                }
            });
    
            currentTime++;
        }
    
        setInterval(updateLyrics, 1000);
    });
    