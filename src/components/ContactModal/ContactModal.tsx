import React, { useState } from "react";
import { ClipboardCheck, Clipboard } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "isaaconyes80@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-sm w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Me</h2>

        <form
          action="https://formsubmit.co/isaaconyes80@gmail.com"
          method="POST"
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-2 rounded-lg border h-24 resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          {/* Optional redirect to a thank you page */}
          <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">{email}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            {copied ? (
              <>
                <ClipboardCheck size={16} /> Copied!
              </>
            ) : (
              <>
                <Clipboard size={16} /> Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
