import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphics from '@/assets/HomePageGraphics.png';
import SponsorRedBull from '@/assets/SponsorsRedBull.png';
import SponsorForbes from '@/assets/SponsorsForbes.png';
import SponsorFortune from '@/assets/SponsorsFortune.png';

type Props = {
    SSP: (value: SelectedPage) => void;
};

const Home = ({ SSP }: Props) => {
    const isMediumScreen = useMediaQuery('(min-width:1060px)');

    return (
        <section
            id='home'
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
        >
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img
                                    src={HomePageText}
                                    alt='home'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Home;
