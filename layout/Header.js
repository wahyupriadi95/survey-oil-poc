'use client'

import { LayoutContext } from "@/context/layout";
import { useContext } from "react";

const Header = () => {

    const { setLayoutState } = useContext(LayoutContext)

    return (
        <header className="col-start-1 col-end-3 row-start-1 row-end-2 bg-secondary text-white sticky top-0 z-20">
            <div className="flex items-center justify-start">
                <div className="relative h-[48px] overflow-y-hidden overflow-x-clip mr-2">
                    {/* Border layer */}
                    <div className="absolute bottom-0 left-2 right-0 top-0">
                        <div className="absolute inset-0 bg-gradient-to-br rounded-br-lg from-primary-50 to-primary-70 origin-top-left transform -skew-x-12"></div>
                    </div>
                    {/* Main trapezoid */}
                    <div className="relative h-full mr-2">
                        <div className="absolute inset-0 bg-gradient-to-br rounded-br-lg from-tertiary-40 to-tertiary-60 origin-top-left transform -skew-x-12"></div>
                        <div className="relative z-10 p-2 text-white">
                            <button className="md:hidden mr-2" onClick={() => setLayoutState('isSidebarOpen', true)}>
                                Open
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className="text-h6 p-2">Pertamina Patra Niaga</h1>
            </div>
        </header>
    );
};

export default Header;