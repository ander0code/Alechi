onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
    const lyrics = [
        { id: "placeholder", start: 0, end: 15 },
        { id: "line1", start: 15, end: 19 },
        { id: "line2", start: 21, end: 24 },
        { id: "line3", start: 25, end: 27},
        { id: "line4", start: 29, end: 29.5},
        { id: "line5", start: 30, end: 36 },
        { id: "line6", start: 38, end: 39.5 },
        { id: "line7", start: 40, end: 44 },
        { id: "line8", start: 46, end: 49 },
        { id: "line9", start: 52, end: 55 },
        { id: "line10", start: 56, end: 58.5 },
        { id: "line11", start: 59, end: 61.5 },
        { id: "line12", start: 62, end: 67.5 },
        { id: "line13", start: 68, end: 70.5 },
        { id: "line14", start: 71, end: 74.4 },
        { id: "line15", start: 75, end: 76.5 },
        { id: "line16", start: 78, end: 81 },
        { id: "line17", start: 82, end: 83.5},
        { id: "line18", start: 84, end: 86.5 },
        { id: "line19", start: 88, end: 90.5 },
        { id: "line20", start: 91, end: 94.5 },
        { id: "line21", start: 95, end: 98.5 },
        { id: "line22", start: 99, end: 102 },
        { id: "line23", start: 116, end: 120.5 },
        { id: "line24", start: 121.5, end: 123.5 },
        { id: "line25", start: 124, end: 128.5 },
        { id: "line26", start: 129, end: 132.5 },
        { id: "line27", start: 133, end: 137 },
        { id: "line28", start: 138, end: 141.5 },
        { id: "line29", start: 142, end: 147.5 },
        { id: "line30", start: 148, end: 150.5 },
        { id: "line31", start: 151, end: 154.5 },
        { id: "line32", start: 155, end: 160.5 },
        { id: "line33", start: 161, end: 166.5 },
        { id: "line34", start: 167, end: 170.5 },
        { id: "line35", start: 171, end: 173.5},
        { id: "line36", start: 174, end: 177.5 },
        { id: "line37", start: 178, end: 180.5 },
        { id: "line38", start: 181, end: 183.5 },
        { id: "line39", start: 184, end: 186.5 },
        { id: "line40", start: 187, end: 190.5 },
        { id: "line41", start: 191, end: 194.5 },
        { id: "line42", start: 195, end: 200 },
        { id: "line43", start: 224, end: 226.5 },
        { id: "line44", start: 227, end: 230.5 },
        { id: "line45", start: 231, end: 233.5 },
        { id: "line46", start: 234, end: 236.5},
        { id: "line47", start: 237, end: 239.5 },
        { id: "line48", start: 240, end: 241.5 },
        { id: "line49", start: 242, end: 243.5 },
        { id: "line50", start: 244, end: 246.5 },
        { id: "line51", start: 247, end: 249.5 },
        { id: "line52", start: 250, end: 253.5 },
        { id: "line53", start: 254, end: 256.5 },
        { id: "line54", start: 257, end: 259.5 },
        { id: "line55", start: 260, end: 263.5 },
        { id: "line56", start: 264, end: 266.5 },
        { id: "line57", start: 267, end: 269.5 },
        { id: "line58", start: 270, end: 273.5 },
        { id: "line59", start: 274, end: 277.5 },
        { id: "line60", start: 278, end: 400 },
    ];

    
        let currentTime = 0;
    
        function updateLyrics() {
            lyrics.forEach(lyric => {
                const lineElement = document.getElementById(lyric.id);
    
                if (currentTime >= lyric.start && currentTime <= lyric.end) {
                    if (!lineElement.classList.contains("show")) {
                        lineElement.classList.remove("hide");
                        void lineElement.offsetWidth; // Trigger reflow
                        lineElement.classList.add("show");
                    }
                } else if (lineElement.classList.contains("show")) {
                    lineElement.classList.remove("show");
                    lineElement.classList.add("hide");
                }
            });
    
            currentTime++;
        }
    
        setInterval(updateLyrics, 1000);
    });