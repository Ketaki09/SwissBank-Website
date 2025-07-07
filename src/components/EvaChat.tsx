
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, Mic, Image, FileText, Plus } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  messageType?: 'text' | 'voice' | 'image' | 'document';
}

const EvaChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m Eva, your Swiss Bank AI assistant. I can help with inquiries, account info, and escalate complaints for quick resolution. How may I assist you today?',
      timestamp: new Date(),
      messageType: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
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

    setTimeout(() => {
      const botResponse = generateEvaResponse(content, type);
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

  const generateEvaResponse = (userInput: string, inputType: string): string => {
    const responses = {
      greeting: "Thank you for reaching out to Swiss Bank. I'm Eva, and I'm here to provide you with comprehensive banking assistance. How can I help you manage your financial needs today?",
      
      services: "Swiss Bank offers a complete range of services including Private Banking, Corporate Banking, Asset Management, Trading Services, and Wealth Management. Each service is designed with Swiss precision to meet your specific financial objectives.",
      
      private: "Our Private Banking division provides exclusive services for high-net-worth individuals, including personalized wealth management, estate planning, tax optimization, and access to alternative investments.",
      
      trading: "Our Trading Services offer multi-asset trading platforms with direct market access, prime brokerage services, comprehensive market research, and institutional-grade execution.",
      
      account: "I can help you with account inquiries, balance information, transaction history, and account management. For security reasons, I'll need to verify your identity before accessing specific account details.",
      
      investment: "Our Asset Management team provides institutional-grade investment solutions with access to global markets, ESG solutions, and multi-asset strategies tailored to your risk profile.",
      
      default: "I understand your inquiry and I'm processing it with my advanced reasoning capabilities. As your Swiss Bank AI assistant, I'm here to provide personalized guidance based on over 150 years of banking expertise."
    };

    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('greet')) {
      return responses.greeting;
    } else if (input.includes('service') || input.includes('offer')) {
      return responses.services;
    } else if (input.includes('private') || input.includes('wealth')) {
      return responses.private;
    } else if (input.includes('trading') || input.includes('trade')) {
      return responses.trading;
    } else if (input.includes('account') || input.includes('balance')) {
      return responses.account;
    } else if (input.includes('invest') || input.includes('portfolio')) {
      return responses.investment;
    } else {
      return responses.default;
    }
  };

  const handleVoiceInput = () => {
    toast.success("Voice recording activated. Please speak your message...");
    
    setTimeout(() => {
      const simulatedVoiceText = "I would like to know more about your private banking services and investment opportunities.";
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
    setShowAttachments(false);
  };

  if (!isOpen) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Yellow glow effect behind the circle */}
      <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-lg animate-pulse"></div>
      <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl"></div>
      
      {/* Main button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="relative h-16 w-16 rounded-full bg-white hover:bg-gray-50 border-2 border-yellow-400 hover:border-yellow-300 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center p-1"
      >
        <img 
          src="/lovable-uploads/chat-bot-3d-icon_235528-2179.jpeg" 
          alt="Eva - AI Assistant" 
          className="w-14 h-14 rounded-full object-cover"
        />
      </Button>
    </div>
  );
}

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-96 h-[600px] bg-black border-gray-700 shadow-2xl">
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-black text-white border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/chat-bot-3d-icon_235528-2179.jpeg"
              alt="Eva - AI Assistant" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <span className="font-semibold font-serif">Eva - AI Assistant</span>
              <div className="font-semibold font-serif text-xs text-yellow-400">Swiss Bank</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0 hover:bg-gray-800 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-0 flex flex-col h-[calc(100%-80px)]">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg relative ${
                    message.type === 'user'
                      ? 'bg-gray-800 text-white border border-gray-600'
                      : 'bg-yellow-500 text-black border-2 border-yellow-400 animate-pulse-border'
                  }`}
                >
                  <div className="text-sm">{message.content}</div>
                  <div className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-gray-400' : 'text-black/70'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {isProcessing && (
              <div className="flex justify-start">
                <div className="bg-yellow-500 text-black border-2 border-yellow-400 p-3 rounded-lg animate-pulse-border">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Attachments Menu */}
          {showAttachments && (
            <div className="p-4 bg-black border-t border-gray-700">
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center py-3 h-auto border-gray-600 hover:bg-gray-800 text-white"
                >
                  <Image className="h-4 w-4 mr-2" />
                  <span className="text-xs">Image</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center py-3 h-auto border-gray-600 hover:bg-gray-800 text-white"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  <span className="text-xs">Document</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleVoiceInput}
                  className="flex items-center justify-center py-3 h-auto border-gray-600 hover:bg-gray-800 text-white"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  <span className="text-xs">Voice</span>
                </Button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-black border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAttachments(!showAttachments)}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Plus className="h-4 w-4" />
              </Button>
              {inputText.length === 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleVoiceInput}
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              )}
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message to Eva..."
                className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(inputText);
                  }
                }}
              />
              <Button
                onClick={() => handleSendMessage(inputText)}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black"
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
      </Card>
    </div>
  );
};

export default EvaChat;
