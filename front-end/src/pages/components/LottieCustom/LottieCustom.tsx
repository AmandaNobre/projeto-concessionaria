import Lottie from 'react-lottie';

type Iprops = {
    name: string
}

const LottieCustom = ({ name }: Iprops) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require(`./animations/${name}.json`),
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Lottie
            options={defaultOptions}
            height={400}
            width={400}
        />
    );
}

export { LottieCustom }