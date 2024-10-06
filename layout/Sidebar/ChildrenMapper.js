'use client'

import { useContext } from "react";
import MenuContext from "./context";

const ChildrenMapper = ({ root, codes = [], level = 0 }) => {
    const { tracker } = useContext(MenuContext);

    return root.map((node, index) => {
        if (node.children && node.children.length > 0) {
            return (
                <div
                    key={node?.id ? node?.id : index}
                    className="nav-group"
                    style={{
                        marginLeft: level === 0 ? 0 : 32,
                    }}
                // onMouseEnter={() => tracker("open", [...codes, node.code])}
                // onMouseLeave={() => tracker("open", [...codes, node.code])}
                >
                    <div
                        className={`nav-node ${node.open ? "nav-node--isopen" : ""}`}
                        // style={{ color: node.active === true ? "red" : "black" }}
                        onClick={() => tracker("open", [...codes, node.code])}
                    >
                        <span>{node.label}</span>
                        <span>{node.open === true ? "-" : "+"}</span>
                    </div>
                    {node.open && node.children.length > 0 && (
                        <ChildrenMapper
                            codes={[...codes, node.code]}
                            root={node.children}
                            level={level + 1}
                        />
                    )}
                </div>
            );
        }

        return (
            <div
                key={node?.id ? node?.id : index}
                className={`nav-node ${node.active ? "nav-node--isactive" : ""}`}
                style={{
                    marginLeft: level === 0 ? 0 : 32,
                }}
                onClick={() => tracker("active", [...codes, node.code])}
            >
                {/* {node.label + " " + node.link} */}
                {node.label}

            </div>
        );
    });
};

export default ChildrenMapper