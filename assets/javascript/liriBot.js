let dotEnv = require('dotenv').config()
let keys = require('./keys')
let moment = require('moment')
let axios = require('axios')
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Process commands
let command = process.argv[2]
let argument = process.argv[3]

switch(command) {
    case "concert-this":
        processConcertThis()
        break;
    case "spotify-this-song":
        processSpotify()
        break;
    case "movie-this":
        processMovieThis()
        break;
    default:
        console.log("Unsupported Command")
        break;
}

function processConcertThis() {
    if(!argument) {
        argument = "Casting Crowns"
    }
    let queryUrl = "https://rest.bandsintown.com/artists/" + argument + "/events?app_id=codingbootcamp"
    axios.get(queryUrl).then(
        function(response) {
            response.data.forEach(function(element) {
                console.log("***********************************************")
                console.log("* Name: " + element.name)
                console.log("* Venue: " + element.venue.name + " " + element.venue.city)
                let date = moment(element.datetime).format('MM-DD-YYYY');
                console.log("* Date of (MM/DD/YYYY): " + date)
                console.log("***********************************************")
            })
        }
    )
}

function processMovieThis() {
    if(!argument) {
        argument = "Mr. Nobody"
    }
    let queryUrl = "http://www.omdbapi.com/?t=" + argument + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
            console.log("***********************************************")
            console.log("* Title: " + response.data.Title)
            console.log("* Year: "  + response.data.Year)
            console.log("* IMDB Rating: "  + response.data.imdbRating)
            response.data.Ratings.forEach(function(rating) {
                if(rating.Source === "Rotten Tomatoes") {
                    console.log("* Rotten Tomatoes Rating: "  + rating.Value)
                }
            })
            console.log("* Country: " + response.data.Country)
            console.log("* Language: " + response.data.Language)
            console.log("* Plot: " + response.data.Plot)
            console.log("* Actors: " + response.data.Actors)
            console.log("***********************************************")
        }
    )
}

function processSpotify() {
    if(!argument) {
        argument = "The Sign"
    }
    spotify.search({ type: 'track', query: argument }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        data.tracks.items.forEach(function(element) {
            let artistList = ""
            element.artists.forEach(function(artist) {
                artistList = artistList + artist.name + ", "
            })
            console.log("***********************************************")
            console.log("* Artist(s): " + artistList)
            console.log("* Name:" + element.name)
            console.log("* Preview: " + element.href)
            console.log("* Album: " + element.album.name)
            console.log("***********************************************")
        })
    });
}