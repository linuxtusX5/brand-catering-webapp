import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import Register from "./Register";
import React, { useState, useEffect } from "react";

interface AuthModalProps {
  // isOpen: boolean;
  // onClose: () => void;
  // initialMode?: "login" | "register";

  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
  setIsLoggedIn: (value: boolean) => void;
  setUser: (user: { name: string; email: string }) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode,
}) => {
  const [mode, setMode] = useState<"login" | "register">(
    initialMode || "login"
  );

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode || "login");
    }
  }, [isOpen, initialMode]);
  const switchMode = (newMode: "login" | "register") => {
    setMode(newMode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {mode === "login" ? (
            // Login Form
            <LoginForm
              onClose={onClose}
              // showPassword={showPassword}
              // setShowPassword={setShowPassword}
              // isLoading={isLoading}
              // setIsLoading={setIsLoading}
            />
          ) : (
            // Register Form
            <Register onClose={onClose} />
          )}

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                onClick={() =>
                  switchMode(mode === "login" ? "register" : "login")
                }
                className="ml-1 text-amber-600 hover:text-amber-700 font-medium"
              >
                {mode === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
