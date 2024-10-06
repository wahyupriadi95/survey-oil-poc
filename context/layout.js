'use client'

import { createContext, useCallback, useMemo, useState } from "react";

const initialState = {
    isSidebarOpen: false
}

export const LayoutContext = createContext(null)

const LayoutProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    const setLayoutState = useCallback((name, value) => {
        if (!name) return null
        return setState(prevState => ({
            ...prevState,
            [name]: value ?? initialState[name]
        }))
    }, [])

    return (
        <LayoutContext.Provider value={useMemo(() => ({ layoutState: state, setLayoutState }), [state, setLayoutState])}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider