//Documentation - https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
//For Login/SignUp
export const authEndpoint = "https://accounts.spotify.com/authorize";
//For Redirection to Home Page
const redirectUri = "http://localhost:3000/"

const clientId="7010661ba83943b3ac5f794f68d3316b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    },[])
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("&20")}&response_type=token&show_dialog=true`;
