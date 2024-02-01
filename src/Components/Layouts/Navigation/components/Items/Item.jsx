import { Link as ScrollLink } from 'react-scroll';

const Item = ({ address, title, close }) => {

    return (
        <li className={`padd:w-fit w-full cursor-pointer hover:text-caribbean_100 transition duration-500 flex justify-center items-center px-4`}>
            <ScrollLink
                to={address}
                spy={true}
                smooth="true"
                offset={address === "about" ? 0 : 0}
                onClick={close}
                duration={1000}
                className={`w-full text-center p-4 text-bold padd:text-xl text-2xl`}
            >
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </ScrollLink>
        </li>
    );
}

export default Item;