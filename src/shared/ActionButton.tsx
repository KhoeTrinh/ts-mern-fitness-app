import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    SSP: (value: SelectedPage) => void;
};

const ActionButton = ({ children, SSP }: Props) => {
    return (
        <AnchorLink
            className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
            onClick={() => SSP(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;
