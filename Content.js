let youTube = [
    "https://www.youtube.com/watch?v=0AwA5A1wE0o&list=PLTZFtAb3t_ipPY09SVx7WI-p5BpEuQkJB&ab_channel=BigTimeRush-Topic",
    "https://www.youtube.com/watch?v=v-87vtFhCqI&list=PLTZFtAb3t_ipPY09SVx7WI-p5BpEuQkJB&index=3&ab_channel=BigTimeRush-Topic",
    "https://www.youtube.com/watch?v=PV5gMmBn_Hw&list=PLTZFtAb3t_ipPY09SVx7WI-p5BpEuQkJB&index=9&ab_channel=BigTimeRush-Topic",
    "https://www.youtube.com/watch?v=q10ndK7M_qY&list=PLTZFtAb3t_ipPY09SVx7WI-p5BpEuQkJB&index=27&ab_channel=BigTimeRush-Topic",
    "https://www.youtube.com/watch?v=5f31C9N8uA0&list=PLTZFtAb3t_ipPY09SVx7WI-p5BpEuQkJB&index=29&ab_channel=BigTimeRush-Topic",
    "https://www.youtube.com/watch?v=SQ0zrFYlh4g&ab_channel=BigTimeRush"
];

function randomSong () {
    song = Math.floor(Math.random() * youTube.length);
    return youTube[song];
};

const link = document.querySelectorAll('a');
for(const links of link) links.setAttribute('href', randomSong());