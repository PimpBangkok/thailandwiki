import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface KnowledgeBase {
  [key: string]: {
    response: string;
    suggestions?: string[];
  };
}

const knowledgeBase: KnowledgeBase = {
  'best time to visit thailand': {
    response: "The best time to visit Thailand is November-February during the cool, dry season.\n\nWeather is perfect (75-85F), low humidity, and minimal rain. This is peak season, so expect higher prices and more tourists.\n\nMarch-May is hot (up to 100F), and May-October is rainy season (but great for budget travelers!)\n\nWould you like recommendations for a specific month?",
    suggestions: ['November travel', 'December travel', 'Budget season', 'Avoid crowds']
  },
  'first-time visitor - where should i go': {
    response: "Welcome to Thailand planning! For first-timers, I recommend:\n\nBangkok (3-4 days) - Temples, street food, markets, nightlife\nPhuket or Krabi (4-5 days) - Beaches, island hopping, water activities\nChiang Mai (2-3 days) - Culture, temples, nature, elephants\n\nThis gives you cities, beaches, and culture! Total: 10-12 days\n\nWhat interests you most?",
    suggestions: ['Bangkok itinerary', 'Beach destinations', 'Cultural experiences', '2-week itinerary']
  },
  "what's the budget for 2 weeks": {
    response: "Budget for 2 weeks in Thailand (per person):\n\nBudget Traveler: $800-1,200\n- Hostels/budget hotels\n- Street food & local restaurants\n- Public transport\n- Free/cheap activities\n\nMid-Range: $1,500-2,500\n- 3-star hotels\n- Mix of local & tourist restaurants\n- Some tours & activities\n- Occasional taxi/grab\n\nLuxury: $3,500+\n- 5-star resorts\n- Fine dining\n- Private tours\n- Spa & premium experiences\n\nWhich style fits you?",
    suggestions: ['Budget tips', 'Mid-range hotels', 'Luxury resorts', 'Save money']
  },
  'best beaches in thailand': {
    response: "Thailand has incredible beaches! Here are top picks:\n\nPHUKET:\n- Kata Beach - Great swimming, family-friendly\n- Patong Beach - Nightlife & water sports\n- Nai Harn - Most beautiful, peaceful\n\nKRABI:\n- Railay Beach - Stunning limestone cliffs\n- Ao Nang - Good base, lots of activities\n\nKOH SAMUI:\n- Chaweng Beach - Popular, developed\n- Lamai Beach - Quieter alternative\n\nHIDDEN GEMS:\n- Koh Lipe - Maldives of Thailand\n- Koh Lanta - Laid-back, long beaches\n\nWhat's your beach vibe?",
    suggestions: ['Family-friendly beaches', 'Party beaches', 'Quiet & peaceful', 'Island hopping']
  },
  'bangkok vs phuket vs chiang mai': {
    response: "Each city offers something unique!\n\nBANGKOK - Best for:\n- Street food & markets\n- Temples & culture\n- Nightlife & shopping\n- First-time visitors\n\nPHUKET - Best for:\n- Beach activities\n- Island hopping\n- Water sports\n- Beach clubs & parties\n\nCHIANG MAI - Best for:\n- Nature & mountains\n- Temple exploration\n- Authentic culture\n- Digital nomads\n\nPro tip: Most people visit Bangkok + beaches. Add Chiang Mai if you have 2+ weeks!\n\nHow long is your trip?",
    suggestions: ['Bangkok itinerary', 'Beach destinations', 'Chiang Mai activities', 'Multi-city trip']
  },
  'do i need a visa': {
    response: "Visa requirements for Thailand:\n\nVISA-FREE (30-45 days):\nMost countries including USA, UK, EU, Australia, Canada get 30-45 days visa-free on arrival.\n\nTOURIST VISA (60 days):\nApply at Thai embassy before travel, can extend 30 days in Thailand.\n\nVISA ON ARRIVAL (15 days):\nSome countries get 15-day visa on arrival (fee applies).\n\nCheck your passport:\n- Valid for 6+ months\n- At least 2 blank pages\n\nWhat's your nationality?",
    suggestions: ['Visa extension', 'Long-term visa', 'Travel insurance', 'Entry requirements']
  },
  'is thailand safe for tourists': {
    response: "Yes, Thailand is very safe for tourists!\n\nSAFE:\n- Low violent crime\n- Tourist-friendly\n- Good infrastructure\n- English widely spoken in tourist areas\n\nWATCH OUT FOR:\n- Petty theft (pickpockets)\n- Scams (tuk-tuk overcharging, gem scams)\n- Traffic (roads can be chaotic)\n- Drink spiking in party areas\n\nSAFETY TIPS:\n- Use hotel safe\n- Be aware in crowded places\n- Agree on taxi prices first\n- Respect local customs\n- Get travel insurance\n\nNeed tips for solo travelers or specific concerns?",
    suggestions: ['Solo travel safety', 'Common scams', 'Health tips', 'Emergency contacts']
  },
  'best thai food to try': {
    response: "Must-try Thai dishes! Get ready for flavor!\n\nCLASSICS:\n- Pad Thai - Stir-fried noodles\n- Tom Yum - Spicy & sour soup\n- Green Curry - Creamy coconut curry\n- Massaman Curry - Mild, sweet curry\n\nSTREET FOOD:\n- Som Tam - Papaya salad (spicy!)\n- Moo Ping - Grilled pork skewers\n- Pad Krapow - Basil stir-fry\n- Khao Man Gai - Chicken rice\n\nDESSERTS:\n- Mango Sticky Rice\n- Thai Iced Tea\n- Coconut Ice Cream\n\nPro tip: Say \"mai phet\" for not spicy, or \"phet nit noi\" for a little spicy!\n\nAny dietary restrictions?",
    suggestions: ['Vegetarian options', 'Street food safety', 'Food tours', 'Bangkok food guide']
  },
  'november travel': {
    response: "November is PERFECT for Thailand!\n\nWEATHER:\n- Cool & dry (75-85F)\n- Little to no rain\n- Low humidity\n- Perfect beach weather\n\nEVENTS:\n- Loy Krathong Festival (mid-November) - Floating lanterns!\n- Start of high season\n\nPRICING:\n- Early high season = better deals than Dec-Jan\n- Book flights early for best prices\n\nBEST DESTINATIONS:\n- All regions are great\n- Beaches are perfect\n- Bangkok is comfortable\n\nReady to plan your November trip?",
    suggestions: ['November festivals', 'Book hotels', 'Flight tips', 'November itinerary']
  },
  'december travel': {
    response: "December is peak season - amazing but busy!\n\nWEATHER:\n- Best weather of the year\n- Dry, sunny, perfect temps\n- Ideal for all activities\n\nEVENTS:\n- Christmas celebrations in cities\n- New Year's parties everywhere\n- Full moon parties\n\nCONSIDERATIONS:\n- Highest prices (20-40% more)\n- Book 2-3 months ahead\n- Crowded tourist spots\n- Amazing atmosphere!\n\nPRO TIP: Book now if traveling Dec 20-Jan 5. Prices surge!\n\nNeed help finding hotels?",
    suggestions: ['December hotels', 'New Year parties', 'Christmas in Bangkok', 'Budget December']
  },
  'budget season': {
    response: "Save money with low-season travel!\n\nRAINY SEASON (May-October):\n- 30-50% cheaper hotels\n- Fewer tourists\n- Short rain showers (not all day!)\n- Green & beautiful\n\nBEST LOW-SEASON MONTHS:\n- May - Hot but manageable\n- September - Less rain\n- October - Shoulder season\n\nTIPS:\n- Islands: Rain varies by coast\n- Bangkok: Indoor activities abound\n- Book last minute for deals\n- Some places close (esp. small islands)\n\nYou can save $500-1000 on a 2-week trip!\n\nInterested in specific months?",
    suggestions: ['May weather', 'September travel', 'Rainy season tips', 'Budget hotels']
  },
  'i\'m planning a bachelor party': {
    response: "Epic bachelor party incoming!\n\nTOP DESTINATIONS:\n\n#1 PHUKET (Most Popular):\n- Patong nightlife\n- Beach clubs\n- Island hopping\n- Water sports\n- Bangla Road parties\n\n#2 BANGKOK:\n- Rooftop bars\n- Clubs (RCA, Thonglor)\n- River cruises\n- Entertainment districts\n\n#3 PATTAYA:\n- Beach town vibe\n- Walking Street\n- Activities & nightlife\n\nPopular combo: Bangkok (2 nights) + Phuket (3-4 nights)\n\nHow many people in your group?",
    suggestions: ['Phuket nightlife', 'Bangkok party spots', 'Group activities', 'Bachelor packages']
  },
  'family-friendly beaches': {
    response: "Best family beaches in Thailand!\n\nTOP PICKS:\n\nKAO LAK:\n- Calm waters\n- Long, quiet beaches\n- Family resorts\n- Less crowded\n\nPHUKET:\n- Kata Beach - Shallow, safe\n- Kamala Beach - Peaceful\n- Good facilities\n\nHUA HIN:\n- Close to Bangkok (3 hrs)\n- Safe swimming\n- Family activities\n- Budget-friendly\n\nKOH SAMUI:\n- Chaweng - Developed, shallow\n- Family resorts\n- Calm bays\n\nWHAT MAKES THEM GREAT:\n- Shallow water\n- Lifeguards\n- Clean beaches\n- Nearby restaurants\n- Kid activities\n\nHow old are your kids?",
    suggestions: ['Kid-friendly resorts', 'Family activities', 'Safe swimming', 'Hua Hin guide']
  }
};

export function ChatWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialSuggestions = [
    'Best time to visit Thailand?',
    'First-time visitor - where should I go?',
    "What's the budget for 2 weeks?",
    'Best beaches in Thailand?',
    'Bangkok vs Phuket vs Chiang Mai?',
    'Do I need a visa?',
    'Is Thailand safe for tourists?',
    'Best Thai food to try?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('thailandChatMessages');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages);
      setMessages(parsed.map((m: Message) => ({ ...m, timestamp: new Date(m.timestamp) })));
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('thailandChatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const findResponse = (userMessage: string): { response: string; suggestions?: string[] } | null => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    const keywords = {
      'beach': 'best beaches in thailand',
      'visa': 'do i need a visa',
      'safe': 'is thailand safe for tourists',
      'food': 'best thai food to try',
      'time': 'best time to visit thailand',
      'budget': "what's the budget for 2 weeks",
      'first': 'first-time visitor - where should i go',
      'bangkok': 'bangkok vs phuket vs chiang mai',
      'phuket': 'bangkok vs phuket vs chiang mai',
      'chiang mai': 'bangkok vs phuket vs chiang mai',
      'november': 'november travel',
      'december': 'december travel',
      'cheap': 'budget season',
      'bachelor': 'i\'m planning a bachelor party',
      'family': 'family-friendly beaches',
      'kids': 'family-friendly beaches',
    };

    for (const [keyword, key] of Object.entries(keywords)) {
      if (lowerMessage.includes(keyword)) {
        return knowledgeBase[key];
      }
    }

    return null;
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = findResponse(text);

      const botResponse: Message = responseData
        ? {
            text: responseData.response,
            isUser: false,
            timestamp: new Date(),
            suggestions: responseData.suggestions,
          }
        : {
            text: "That's a great question! While I'm a demo assistant with pre-programmed responses, I'd love to help!\n\nTry asking about:\n- Best time to visit\n- Destinations & beaches\n- Budget & costs\n- Visas & safety\n- Food recommendations\n\nOr explore our comprehensive guides throughout the site, or contact our team for personalized assistance!",
            isUser: false,
            timestamp: new Date(),
            suggestions: ['Best time to visit Thailand?', 'Best beaches in Thailand?', 'Budget tips'],
          };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(message);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('thailandChatMessages');
  };

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-[9998] md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div className="fixed bottom-5 right-5 z-[9999]">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            data-chat-button
            className="group relative w-[60px] h-[60px] bg-gradient-to-br from-[#d7007f] to-[#d7007f] hover:from-[#d7007f] hover:to-[#d7007f] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
            aria-label="Open chat widget"
          >
            <MessageCircle className="w-7 h-7" />

            <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Need Travel Help?
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </button>
        ) : (
          <div
            className="fixed md:absolute bottom-0 right-0 md:bottom-auto md:right-auto w-full h-full md:w-[400px] md:h-[600px] bg-white md:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-widget-title"
          >
            <div className="bg-gradient-to-r from-[#d7007f] via-[#d7007f] to-[#d7007f] text-white p-4 flex items-center justify-between shadow-lg">
              <div className="flex-1">
                <h3 id="chat-widget-title" className="font-semibold text-lg">ThailandWiki Travel Assistant</h3>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs text-pink-100">Online now</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors text-xs"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close chat widget"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.length === 0 ? (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="bg-white rounded-2xl rounded-tl-none p-5 shadow-md border border-gray-100">
                    <p className="text-gray-900 mb-4 font-medium">
                      Hi! I'm here to help with your Thailand travel planning.
                    </p>
                    <p className="text-gray-800 mb-3 text-sm">I can answer questions about:</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 text-[#d7007f]">-</span>
                        <span>Destinations & activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#d7007f]">-</span>
                        <span>Hotels & accommodation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#d7007f]">-</span>
                        <span>Transportation & visas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#d7007f]">-</span>
                        <span>Itinerary planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#d7007f]">-</span>
                        <span>Food & restaurants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#d7007f]">-</span>
                        <span>Budget & costs</span>
                      </li>
                    </ul>
                    <p className="text-gray-900 mt-4 font-medium text-sm">
                      What would you like to know?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider px-1">
                      Popular Questions
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {initialSuggestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="w-full text-left bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 border border-gray-200 hover:border-[#d7007f] rounded-xl p-3 text-sm text-gray-700 hover:text-[#d7007f] transition-all shadow-sm hover:shadow-md group"
                        >
                          <span className="group-hover:translate-x-1 inline-block transition-transform">
                            {question}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-4 shadow-md ${
                            msg.isUser
                              ? 'bg-gradient-to-r from-[#d7007f] to-[#d7007f] text-white rounded-br-none'
                              : 'bg-white text-gray-900 rounded-tl-none border border-gray-100'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                          <p
                            className={`text-xs mt-2 ${
                              msg.isUser ? 'text-pink-100' : 'text-gray-500'
                            }`}
                          >
                            {msg.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>

                      {msg.suggestions && msg.suggestions.length > 0 && (
                        <div className="flex justify-start mt-3 ml-2">
                          <div className="max-w-[85%] space-y-2">
                            <p className="text-xs text-gray-500 font-medium px-1">Quick replies:</p>
                            <div className="flex flex-wrap gap-2">
                              {msg.suggestions.map((suggestion, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSuggestedQuestion(suggestion)}
                                  className="px-3 py-1.5 bg-white hover:bg-pink-50 border border-gray-300 hover:border-[#d7007f] rounded-full text-xs text-gray-700 hover:text-[#d7007f] transition-all shadow-sm hover:shadow"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start animate-in fade-in duration-300">
                      <div className="bg-white text-gray-900 rounded-2xl rounded-tl-none p-4 shadow-md border border-gray-100">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 bg-[#d7007f] rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-[#d7007f] rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-[#d7007f] rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200 shadow-lg">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question here..."
                  aria-label="Type your question"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d7007f] focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-11 h-11 bg-gradient-to-r from-[#d7007f] to-[#d7007f] hover:from-[#d7007f] hover:to-[#d7007f] disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:scale-105 disabled:hover:scale-100"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
