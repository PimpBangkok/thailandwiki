import { MessageCircle } from 'lucide-react';

export default function HelpWidget() {
  const handleStartChat = () => {
    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
    if (chatButton) {
      chatButton.click();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-lg p-6 shadow-sm">
      <div className="flex justify-center mb-4">
        <div className="bg-[#D91680] text-white p-3 rounded-full">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
        Need Help?
      </h3>
      <p className="text-gray-700 text-sm mb-4 text-center leading-relaxed">
        Chat with our Thailand travel experts!
      </p>
      <button
        onClick={handleStartChat}
        className="w-full bg-[#D91680] text-white px-4 py-2 rounded-lg hover:bg-[#D91680] transition-colors font-medium text-sm flex items-center justify-center gap-2"
      >
        Start Chat
        <MessageCircle className="w-4 h-4" />
      </button>
    </div>
  );
}
