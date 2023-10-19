
const Shipping = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 px-8 md:px-24 my-9">
            <div className="flex gap-5 justify-center items-center p-4">
                <div>
                    <img className="w-[50px]" src="http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/ico-cosmetics.png"></img>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">NATURALLY DRIVED</h3>
                    <p className="text-sm text-gray-500">Natural & organic beauty products</p>
                </div>
            </div>
            <div className="flex gap-5 justify-center items-center p-4">
                <div>
                    <img className="w-[50px]" src="http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/ico-ship.png"></img>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">FREE SHIPPING</h3>
                    <p className="text-sm text-gray-500">Natural & organic beauty products</p>
                </div>
            </div>
            <div className="flex gap-5 justify-center items-center p-4">
                <div>
                    <img className="w-[50px]" src="http://demo.snstheme.com/wp/dbea/wp-content/uploads/2022/05/ico-money.png"></img>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">SECURE PAYMENTS</h3>
                    <p className="text-sm text-gray-500">Natural & organic beauty products</p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;