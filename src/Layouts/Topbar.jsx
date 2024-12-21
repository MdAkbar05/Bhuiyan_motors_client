import { FaPhoneAlt, FaUndoAlt, FaTags } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="text-textColor py-1 text-xs">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section - Contact Support */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaPhoneAlt className="text-yellow-400 mr-1" />
            <span>Support: +1 234 567 890</span>
          </div>
          <div className="hidden md:flex items-center">
            <FaUndoAlt className="text-yellow-400 mr-1" />
            <span>Free Returns on All Orders</span>
          </div>
        </div>

        {/* Right Section - Offers */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaTags className="text-yellow-400 mr-1" />
            <span>20% Off on Selected Items</span>
          </div>
          <div className="hidden md:flex items-center">
            <FaTags className="text-yellow-400 mr-1" />
            <span>Free Shipping Over $50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
