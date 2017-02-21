var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"]; 

function printLyrics(lyricsArray) {
    var regularLyrics = lyricsArray.join(" ");
    console.log(regularLyrics);
}

function printLyricsBackwards(lyricsArray) {
    var reversedLyrics = lyricsArray.reverse(" ");
    console.log(reversedLyrics.join(" "));
    lyricsArray.reverse();
}

function printEveryOther(lyricsArray) {
    var skipOne = " ";
    for (i = 0; i < lyrics.length; i++) {
        if (i % 2 == 0) {
            skipOne += lyrics[i] + " ";
        }
    }
    console.log(skipOne);
}


printLyrics(lyrics);
printLyricsBackwards(lyrics);
printEveryOther(lyrics);