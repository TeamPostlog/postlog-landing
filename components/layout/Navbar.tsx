import Link from "next/link";
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {navLinks} from "@/data/navLinks";
import {ThemeChanger} from "@/app/Theme-changer";

const Navbar = () => {
    return (
        <nav className="py-4 bg-background/30 backdrop-blur-sm">
            
                    <ThemeChanger/>
        </nav>
    );
}

export default Navbar;