const Main = ({ children }) => {
    return (
        <main className="overflow-y-auto col-start-1 col-end-3 row-start-1 row-end-3">
            {children}
        </main>
    );
};
export default Main;