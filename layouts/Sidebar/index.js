'use client'

import data from "@/assets/data/menu";
import { useEffect, useState } from "react";
import ChildrenMapper from "./ChildrenMapper";
import MenuContext from "./context";
import transformMenu from "./helper";

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

    return (
        <MenuContext.Provider value={{ menu, setMenu, tracker }}>
            <aside className={`bg-secondary overflow-y-auto transition-all duration-300 ease-in-out w-64`}>
                <nav className={`p-4`}>
                    <ChildrenMapper root={menu} />
                </nav>
            </aside>
        </MenuContext.Provider>

    );
};

export default Sidebar