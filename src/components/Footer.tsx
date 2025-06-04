import React from "react";

export default function Footer() {
  return (
    <footer className="bg-d py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Catering Co. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-green-600">
            Facebook
          </a>
          <a href="#" className="hover:text-green-600">
            Instagram
          </a>
          <a href="#" className="hover:text-green-600">
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
}
