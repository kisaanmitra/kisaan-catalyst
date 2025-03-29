
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { VolumeUp, Send, Mic, MicOff } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "नमस्ते! मैं आपका कृषि सहायक हूँ। आप मुझसे फसल, मौसम, या सरकारी योजनाओं के बारे में पूछ सकते हैं।",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample predefined responses
  const responses = {
    "बीज कब बोयें": "चावल के बीज बोने का सही समय जून-जुलाई के महीने में मानसून की शुरुआत के साथ होता है।",
    "कीट नियंत्रण": "रसायनिक कीटनाशकों के बजाय जैविक कीटनाशकों का उपयोग करें। नीम का तेल या लहसुन का स्प्रे प्राकृतिक कीट नियंत्रण के लिए अच्छा है।",
    "फसल बीमा": "प्रधान मंत्री फसल बीमा योजना के तहत आप अपनी फसल का बीमा करवा सकते हैं। अधिक जानकारी के लिए अपने नजदीकी कृषि कार्यालय से संपर्क करें।",
    "मिट्टी परीक्षण": "मिट्टी परीक्षण के लिए अपने क्षेत्र के कृषि विज्ञान केंद्र से संपर्क करें। वे आपको मिट्टी का नमूना एकत्र करने और उसे परीक्षण के लिए भेजने में मदद करेंगे।",
    "सब्सिडी": "खाद और बीज पर सब्सिडी प्राप्त करने के लिए आपको किसान क्रेडिट कार्ड और आधार कार्ड की जरूरत होगी। अपने ग्राम प्रधान या कृषि अधिकारी से संपर्क करें।"
  };

  // Mock function to simulate voice recognition
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording for 3 seconds then receiving a message
      setTimeout(() => {
        const randomQuestion = Object.keys(responses)[Math.floor(Math.random() * Object.keys(responses).length)];
        setInput(randomQuestion);
        setIsRecording(false);
      }, 3000);
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Generate bot response
    setTimeout(() => {
      let botResponse = "मुझे यह समझ नहीं आया। कृपया दूसरे तरीके से पूछें।";
      
      // Check for predefined responses
      Object.entries(responses).forEach(([key, value]) => {
        if (input.toLowerCase().includes(key.toLowerCase())) {
          botResponse = value;
        }
      });
      
      const botMessage: Message = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInput('');
  };

  const readMessage = (text: string) => {
    // This would connect to a text-to-speech API
    alert(`Speaking: ${text}`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col h-[400px]">
      <div className="bg-primary p-3 text-white">
        <h3 className="font-medium flex items-center">
          <VolumeUp size={18} className="mr-2" />
          AI किसान सहायक (Farmer Assistant)
        </h3>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`rounded-lg px-4 py-2 max-w-[75%] font-noto ${
                message.isBot 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                  : 'bg-primary text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
                {message.isBot && (
                  <button 
                    onClick={() => readMessage(message.text)}
                    className="text-xs opacity-70 hover:opacity-100"
                    aria-label="Read message aloud"
                  >
                    <VolumeUp size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleRecording}
            className={isRecording ? 'bg-red-100 text-red-600 border-red-300' : ''}
          >
            {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
          </Button>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="आप यहां टाइप कर सकते हैं या माइक आइकन पर क्लिक करके बोल सकते हैं..."
            className="min-h-10 font-noto"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage}>
            <Send size={18} />
          </Button>
        </div>
        <p className="text-gray-500 text-xs mt-2 text-center">हिंदी या English में अपना सवाल पूछें</p>
      </div>
    </div>
  );
};

export default ChatbotWidget;
