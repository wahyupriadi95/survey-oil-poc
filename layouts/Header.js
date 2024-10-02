const Header = () => {
    return (
        <header className="col-span-2 bg-primary text-white p-4 sticky top-0 z-10">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Pertamina Patra Niaga</h1>
                <button className="md:hidden">
                    Close
                </button>
            </div>
        </header>
    );
};

export default Header;