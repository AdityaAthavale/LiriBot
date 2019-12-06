# LiriBot
Liribot homework
I developed this application in order to do following: 
A) search the Bands in Town Artist Events API (` `) for an artist
B) search a song on spotify.
C) search information about your favorite movie.

Purpose of this code is to demonstrate my capability to use different node modules and parse responses.

Code uses dotEnv,keys, moment and axios package to hit multiple API along with node-spotify-api to get song details.
Once data is received we will parse it and make it readable to user.

How to use:
Application can be used via command line.
1) Switch to LiriBot/assets/javascript directory using command line (or Terminal on mac)
2) To get information about your favourite movie : type 'node liri.js movie-this '<movie name here>'' and press enter. 
        We will fallback to "Mr. Nobody" if you do not provide any movie name.
3) To search a song on spotify : type 'node liri.js spotify-this-song '<song name here>'' and press enter.
        We will fallback to "The Sign" if you do not provice any song name.
4) To find concerts of your favourite band: type 'node liri.js concert-this <artist/band name here>`' and press enter.
        We will fallback to "Casting Crowns" if you do not provice any band name.
