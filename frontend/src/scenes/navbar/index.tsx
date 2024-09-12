import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    SP: SelectedPage;
    SSP: (value: SelectedPage) => void;
};

const Navbar = ({ SP, SSP }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img
                            src={Logo}
                            alt='Logo'
                        />
                        {isAboveMediumScreen ? (
                            <div className={`${flexBetween} w-full`}>
                                <div
                                    className={`${flexBetween} gap-8 text-sm`}
                                >
                                    <Link
                                        page='Home'
                                        SP={SP}
                                        SSP={SSP}
                                    />
                                    <Link
                                        page='Benefits'
                                        SP={SP}
                                        SSP={SSP}
                                    />
                                    <Link
                                        page='Our Classes'
                                        SP={SP}
                                        SSP={SSP}
                                    />
                                    <Link
                                        page='Contact Us'
                                        SP={SP}
                                        SSP={SSP}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton SSP={SSP}>
                                        Become a member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className='rounded-full bg-secondary-500 p-2'
                                onClick={() =>
                                    setIsMenuToggled(!isMenuToggled)
                                }
                            >
                                <Bars3Icon className='h-6 w-6 text-white' />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
