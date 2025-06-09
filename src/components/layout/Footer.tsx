import React from "react";

export default function Footer() {
  return (
    // <footer className="bg-d py-6 mt-10">
    //   <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
    //     <p>© {new Date().getFullYear()} Catering Co. All rights reserved.</p>
    //     <div className="mt-2 space-x-4">
    //       <a href="#" className="hover:text-green-600">
    //         Facebook
    //       </a>
    //       <a href="#" className="hover:text-green-600">
    //         Instagram
    //       </a>
    //       <a href="#" className="hover:text-green-600">
    //         Email Us
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/src/assets/Footer-Logo.png"
              alt="Whisked Roots"
              className="h-15 w-auto mb-2 text-center"
            />
            <h3 className="text-xl font-bold">Whisked Roots</h3>
            <p className="text-amber-200">
              Exceptional food for exceptional events
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-amber-200 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-200 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-200 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-200 transition duration-300"
            >
              Pinterest
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-amber-200">
          <p>
            &copy; {new Date().getFullYear()} Gourmet Catering Co. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
