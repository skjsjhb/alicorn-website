import { Navbar, NavbarBrand } from "@heroui/navbar";

export default function() {
    return <Navbar>
        <NavbarBrand>
            <p className="font-bold text-xl ml-2">
                <span className="text-primary">Al</span>icorn
            </p>
        </NavbarBrand>
    </Navbar>;
}
