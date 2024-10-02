const menuModel = {
    id: null,
    label: "",
    code: "",
    active: false,
    open: false,
    link: "",
    children: []
};


const transformMenu = (dataMenu) => {
    if (!dataMenu) return [];

    const recursive = (root) => {
        return root.map((branch) => {
            const node = {
                ...menuModel,
                id: branch?.id,
                label: branch?.label ?? branch?.name,
                code: branch?.code,
                link: branch?.url
            };

            if (branch?.menus && branch?.menus.length === 1) {
                const single = branch?.menus[0];
                return {
                    ...node,
                    id: single?.id,
                    label: single?.label ?? single?.name,
                    code: single?.code,
                    link: single?.url
                };
            }

            if (branch?.menus && branch?.menus.length > 1) {
                return {
                    ...node,
                    link: "/" + node?.code,
                    children: recursive(branch?.menus)
                };
            }

            return node;
        });
    };

    return recursive(dataMenu);
};

export default transformMenu