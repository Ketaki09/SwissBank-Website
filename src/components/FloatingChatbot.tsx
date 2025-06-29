
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Minimize2, Maximize2, Send, Mic, Image, FileText, Bot } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  messageType?: 'text' | 'voice' | 'image' | 'document';
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your SwissBank AI assistant powered by Claude Sonnet. I can help you with banking questions, analyze documents, process voice messages, and more. How can I assist you today?',
      timestamp: new Date(),
      messageType: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string, type: 'text' | 'voice' | 'image' | 'document' = 'text') => {
    if (!content.trim() && type === 'text') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
      messageType: type
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsProcessing(true);

    // Simulate Claude Sonnet processing
    setTimeout(() => {
      const botResponse = generateBotResponse(content, type);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
        messageType: 'text'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string, inputType: string): string => {
    // Simulate intelligent responses based on banking context
    const responses = {
      greeting: "Thank you for contacting SwissBank. I'm here to provide you with personalized banking assistance using advanced AI reasoning capabilities.",
      
      services: "Our comprehensive services include Wealth Management, Corporate Banking, Private Banking, and Digital Security. Each service is tailored to meet your specific financial goals with Swiss precision.",
      
      private: "Our Private Banking services are designed for high-net-worth individuals, offering exclusive investment opportunities, estate planning, tax optimization, and dedicated relationship managers.",
      
      security: "Security is our top priority. We employ advanced encryption, biometric authentication, 24/7 monitoring, and comprehensive fraud protection to safeguard your assets and data.",
      
      investment: "Our investment advisory team provides personalized portfolio management, market analysis, and risk assessment to maximize your wealth potential while aligning with your risk tolerance.",
      
      default: "I understand your inquiry and am processing it with contextual reasoning. Based on Swiss banking best practices and your specific needs, I recommend scheduling a consultation with our specialist team for personalized guidance."
    };

    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('greet')) {
      return responses.greeting;
    } else if (input.includes('service') || input.includes('offer')) {
      return responses.services;
    } else if (input.includes('private') || input.includes('wealth')) {
      return responses.private;
    } else if (input.includes('security') || input.includes('safe')) {
      return responses.security;
    } else if (input.includes('invest') || input.includes('portfolio')) {
      return responses.investment;
    } else {
      return responses.default;
    }
  };

  const handleVoiceInput = () => {
    // Simulate voice input processing
    toast.success("Voice recording started. Speak your message...");
    
    setTimeout(() => {
      const simulatedVoiceText = "I'm interested in your private banking services and would like to know more about investment opportunities.";
      handleSendMessage(simulatedVoiceText, 'voice');
      toast.success("Voice message processed successfully!");
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = file.type.includes('image') ? 'image' : 'document';
    const fileName = file.name;
    
    toast.success(`${fileType === 'image' ? 'Image' : 'Document'} uploaded: ${fileName}`);
    
    handleSendMessage(`Uploaded ${fileType}: ${fileName}`, fileType);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 bg-gray-900 border-gray-700 shadow-2xl transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[500px]'
      }`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-yellow-400 text-black">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">SwissBank AI Assistant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-yellow-500"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-yellow-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(100%-64px)]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-800 text-white border border-gray-700'
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-black/70' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white border border-gray-700 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleVoiceInput}
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <Image className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about banking services..."
                  className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(inputText);
                    }
                  }}
                />
                <Button
                  onClick={() => handleSendMessage(inputText)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black"
                  disabled={isProcessing}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default FloatingChatbot;
