import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    SP: SelectedPage;
    SSP: (value: SelectedPage) => void;
};

const Link = ({ page, SP, SSP }: Props) => {
    const lowerCasePage = page
        .toLowerCase()
        .replace(/ /g, '') as SelectedPage;

    return (
        <AnchorLink
            className={`
                ${SP === lowerCasePage ? 'text-primary-500' : ''} 
                transition duration-500 hover:text-primary-300
                    `}
            href={`#${lowerCasePage}`}
            onClick={() => SSP(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;
