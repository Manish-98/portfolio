import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-12 flex justify-center mb-2 border-t border-gray-700 pt-4">
            <div
                className="bg-black text-green-400 font-mono text-sm px-6 py-3 rounded-lg
                   max-w-6xl w-full shadow-lg border border-gray-800 flex items-center"
            >
                <span>&gt; Thank you for visiting!<span className="ml-1 animate-blink">█</span></span>
            </div>
        </footer>
    );
}
