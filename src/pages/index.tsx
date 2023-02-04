import {IndexScreen} from '~/client/screens/index-screen/index-screen';

IndexScreen.getInitialProps = async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return {stars: json.stargazers_count};
};

export default IndexScreen;
