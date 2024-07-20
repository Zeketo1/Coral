import { BiSearch } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import logo from "../..";

const NavBar = () => {
    const menu = [
        "Jewelry & Accessories",
        "Clothing & Shoes",
        "Home & Living",
        "Wedding & Party",
        "Toys & Entertainment",
        "Art & Collectibles",
        "Craft Supplies & Tools",
    ];

    return (
        <>
            <div className="px-4 bg-[#f4f4f5] sticky top-0 right-0">
                <div className="flex justify-between items-center py-3">
                    <BiSearch className="text-[25px]" />
                    <img
                        src={logo}
                        alt="logo"
                        className="h-[40px] translate-x-20"
                    />
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex justify-between items-center gap-2">
                            <IoPersonSharp className="text-[20px]" />
                            <span>Account</span>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <FaShoppingBag className="text-[20px]" />
                            <span>Shopping</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4 border-t-2">
                    {menu.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavBar;
