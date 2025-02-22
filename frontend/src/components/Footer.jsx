import React from "react";
import SocialIcons from "../pages/SocialIcons";
const Footer = () => {
    return(

      <footer className="border-t">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="text-blue-600 text-4xl font-bold mb-2 font-micro5">
              PASSKEY
            </div>
            <p className="text-sm text-gray-600">
              © 2025{" "}
              <span className="text-2xl text-blue-600 font-bold font-micro5">
                PASSKEY.
              </span>{" "}
              All rights reserved.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-3 gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms & Condition
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Security
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-medium mb-2">Need Help?</p>
            <p className="text-gray-600">Contact us:</p>
            <p className="text-gray-600">support@passkey.com</p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <SocialIcons.Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <SocialIcons.Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <SocialIcons.YouTube />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <SocialIcons.Threads />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer