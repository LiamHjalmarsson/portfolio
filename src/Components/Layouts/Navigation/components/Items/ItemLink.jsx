import { Link as ScrollLink } from 'react-scroll';

const ItemLink = ({ address, title, close }) => {

    return (
        <li className={`lg:w-fit w-full cursor-pointer text-whiteish hover:text-caribbean_300 transition duration-500 flex justify-center items-center px-4`}>
            <ScrollLink
                to={address}
                spy={true}
                smooth="true"
                offset={address === "home" || address === "contact" ? 0 : -200}
                onClick={close} 
                duration={500}
                className={`w-full text-center p-4 text-bold text-2xl`}
            >
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </ScrollLink>
        </li>
    );
}

export default ItemLink;