'use client'

import data from "@/assets/data/menu";
import { useContext, useEffect, useState } from "react";
import ChildrenMapper from "./ChildrenMapper";
import MenuContext from "./context";
import transformMenu from "./helper";
import Button from "@/components/Button";
import clsx from "@/utils/clsx";
import { LayoutContext } from "@/context/layout";

const Sidebar = () => {
    const [menu, setMenu] = useState([]);

    const tracker = (type, codes) => {
        const dig = (root, index) => {
            return root.map((branch) => {
                if (branch.code === codes[index]) {
                    const alterNode =
                        type === "active"
                            ? { ...branch, active: true, open: true }
                            : {
                                ...branch,
                                open: index === codes.length - 1 ? !branch.open : branch.open,
                            };
                    if (branch.children && branch.children.length > 0) {
                        return { ...alterNode, children: dig(branch.children, index + 1) };
                    }
                    return alterNode;
                }
                return branch;
            });
        };
        return setMenu((prev) =>
            type === "active" ? dig(transformMenu(data), 0) : dig(prev, 0)
        );
    };

    const finder = (obj, value) => {
        var foundCodes = [];
        var found = false;

        const search = (children) => {
            if (found) return;
            children.forEach((item) => {
                foundCodes.push(item.code);
                if (item.link === value) {
                    found = true;
                    return;
                }
                if (item.children && item.children.length > 0 && !found) {
                    search(item.children);
                    if (found) return;
                }
                foundCodes.pop();
            });
        };
        // console.log("foundCodes", foundCodes);
        search(obj);
        return foundCodes;
    };

    useEffect(() => {
        // console.log("🚀 ~ useEffect ~ transformMenu(data):", transformMenu(data))

        setMenu(transformMenu(data));
        tracker("active", finder(transformMenu(data), "/employee-management"));
    }, []);

    const { layoutState, setLayoutState } = useContext(LayoutContext)
    const { isSidebarOpen } = layoutState

    return (
        <MenuContext.Provider value={{ menu, setMenu, tracker }}>
            <aside className={clsx(`grid grid-cols-1 grid-rows-[100px_1fr_40px] overflow-y-auto transition-all duration-300 ease-in-out row-start-1 row-end-3 col-start-1 col-end-2 z-30`, isSidebarOpen ? 'translate-x-0' : '-translate-x-[300px]')}>
                <div className="p-2 bg-secondary-60 rounded-b-xl rounded-tr-xl flex justify-between z-30">
                    <h5 className="text-h5">Hello, User</h5>
                </div>
                <div className="relative w-full">
                    <nav className={`absolute bg-secondary p-4 rounded-b-xl pt-8 -top-2 left-0 right-0 bottom-0 w-full z-20`}>
                        <ChildrenMapper root={menu} />
                    </nav>
                </div>
                <div className="relative w-full">
                    <div className="absolute bg-primary pt-2 rounded-br-xl -top-2 left-0 right-0 bottom-0 w-full z-10">
                        <Button style="link" className="text-white">
                            Keluar
                        </Button>
                    </div>
                </div>

            </aside>
            {isSidebarOpen && <div onClick={() => setLayoutState('isSidebarOpen', false)} className="fixed inset-0 bg-neutral-50/50 z-20" />}
        </MenuContext.Provider>

    );
};

export default Sidebar