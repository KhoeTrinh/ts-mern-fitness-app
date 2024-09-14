import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfPage: boolean;
    SP: SelectedPage;
    SSP: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, SP, SSP }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const navbarBackground = isTopOfPage
        ? ''
        : 'bg-primary-100 drop-shadow';

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
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

            {!isAboveMediumScreen && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button
                            onClick={() =>
                                setIsMenuToggled(!isMenuToggled)
                            }
                        >
                            <XMarkIcon className='h-6 w-6 text-gray-400' />
                        </button>
                    </div>

                    <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;
