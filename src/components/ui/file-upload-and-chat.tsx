import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, Paperclip, Send, X, FileText, Image, Video, Music, Archive, Bot, User, Mic } from 'lucide-react';

interface UploadedFile {
  id: number;
  name: string;
  size: number;
  type: string;
  file: File;
}

interface Message {
  id: number;
  type: 'ai' | 'user' | 'system';
  content: string;
  files?: UploadedFile[];
  timestamp: Date;
}

const FileUploadChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI Health Consultant. I can help guide you with symptoms, product recommendations, and general health questions. Feel free to upload files and start chatting!',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return <Image className="w-4 h-4" />;
    if (['mp4', 'avi', 'mkv', 'mov', 'webm'].includes(ext)) return <Video className="w-4 h-4" />;
    if (['mp3', 'wav', 'flac', 'ogg', 'aac'].includes(ext)) return <Music className="w-4 h-4" />;
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return <Archive className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Add system message about file upload
    const fileNames = newFiles.map(f => f.name).join(', ');
    const systemMessage: Message = {
      id: Date.now(),
      type: 'system',
      content: `📎 Added ${newFiles.length} file(s): ${fileNames}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const generateAIResponse = (userMessage: string, files: UploadedFile[]) => {
    const responses = [
      `I can see you've shared "${userMessage}". ${files.length > 0 ? `Along with ${files.length} file(s), ` : ''}Based on your query, I recommend consulting with a healthcare professional for personalized advice. How can I help you further?`,
      `Thanks for your message! ${files.length > 0 ? `I notice you've uploaded ${files.length} file(s). ` : ''}For specific medical concerns, please consult your healthcare provider. What would you like to know?`,
      `Got it! ${files.length > 0 ? `I see you've attached ${files.map(f => f.name).join(', ')}. ` : ''}Remember, I provide general health information only. What's your next question?`,
      `Understood! ${files.length > 0 ? `Those files look relevant - ${files.length} in total. ` : ''}For medical advice specific to your situation, please see a healthcare professional. How else can I assist?`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = () => {
    if (inputValue.trim() || uploadedFiles.length > 0) {
      const newMessage: Message = {
        id: Date.now(),
        type: 'user',
        content: inputValue.trim(),
        files: [...uploadedFiles],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      
      const messageContent = inputValue.trim();
      const attachedFiles = [...uploadedFiles];
      
      setInputValue('');
      setUploadedFiles([]);
      setIsTyping(true);
      
      // Simulate AI response with typing delay
      setTimeout(() => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          type: 'ai',
          content: generateAIResponse(messageContent, attachedFiles),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full">
      {/* File Upload Section */}
      {uploadedFiles.length > 0 || isDragOver ? (
        <div className="card-medical mb-6">
          <div
            className={`relative border-2 border-dashed rounded-xl p-4 text-center transition-all duration-200 ${
              isDragOver 
                ? 'bg-primary/10 border-primary' 
                : 'bg-muted border-border'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => handleFileSelect(e.target.files)}
              multiple
              className="hidden"
            />
            <div className="flex items-center justify-center gap-3">
              <Upload className="w-6 h-6 text-muted-foreground" />
              <div>
                <h3 className="text-md font-semibold text-foreground">
                  {isDragOver ? 'Drop files here!' : 'Upload Medical Files'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Drag files here or{' '}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:text-primary-hover underline font-medium"
                  >
                    browse
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Files Ready to Send */}
          {uploadedFiles.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-foreground">
                  Files ready to send ({uploadedFiles.length})
                </h4>
                <button
                  onClick={() => setUploadedFiles([])}
                  className="text-xs px-3 py-1 rounded-full text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {uploadedFiles.map(file => (
                  <div key={file.id} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/30">
                    {getFileIcon(file.name)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-foreground">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                    </div>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="p-1 rounded-full hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}

      {/* Chat Interface */}
      <div className="card-medical h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Siri-like animated icon */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-accent to-primary-hover flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
                <Bot className="h-5 w-5 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite] skew-x-12"></div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground">AI Health Consultant</h3>
              <div className="flex items-center gap-1 text-sm text-success">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : message.type === 'system' ? 'justify-center' : 'justify-start'}`}>
              {message.type !== 'system' && message.type === 'ai' && (
                <div className="w-8 h-8 rounded-full mr-3 flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`max-w-[80%] ${
                message.type === 'user' ? 'bg-primary text-primary-foreground ml-3' :
                message.type === 'ai' ? 'bg-muted text-foreground' :
                'bg-accent/20 text-accent-foreground text-xs'
              } px-4 py-3 rounded-2xl ${message.type === 'user' ? 'rounded-br-md' : message.type === 'ai' ? 'rounded-bl-md' : 'rounded-lg'}`}>
                {message.content && <p className="text-sm break-words">{message.content}</p>}
                {message.files && message.files.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {message.files.map(file => (
                      <div key={file.id} className="flex items-center gap-2 text-sm opacity-90 bg-black/10 rounded px-2 py-1">
                        {getFileIcon(file.name)}
                        <span className="truncate">{file.name}</span>
                        <span className="text-xs">({formatFileSize(file.size)})</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.type === 'user' && (
                <div className="w-8 h-8 rounded-full ml-3 flex items-center justify-center bg-primary">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full mr-3 flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-muted">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-border p-4">
          <div className="flex gap-3 items-end">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-3 rounded-xl border border-border bg-muted hover:bg-muted/80 text-foreground transition-all duration-200 hover:scale-105"
              title="Attach files"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your symptoms or ask a health question..."
                rows={1}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 max-h-32"
                style={{ minHeight: '48px' }}
              />
              
              {/* Character count */}
              {inputValue.length > 0 && (
                <div className="absolute bottom-1 right-3 text-xs text-muted-foreground">
                  {inputValue.length}
                </div>
              )}
            </div>

            {/* Voice button with tooltip */}
            <div className="relative group">
              <button
                className="p-3 rounded-xl border border-border bg-muted hover:bg-muted/80 text-foreground transition-all duration-200 hover:scale-105 cursor-not-allowed opacity-60"
                title="Voice input"
                disabled
              >
                <Mic className="w-5 h-5" />
              </button>
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Coming Soon
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
              </div>
            </div>
            
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() && uploadedFiles.length === 0}
              className="p-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
              title="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {/* Quick Actions */}
          {uploadedFiles.length === 0 && inputValue.length === 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setInputValue('Can you help me analyze this medical file?')}
                className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                Analyze medical file
              </button>
              <button
                onClick={() => setInputValue('What symptoms should I be concerned about?')}
                className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                Symptom guidance
              </button>
              <button
                onClick={() => setInputValue('Hello! How can you help me today?')}
                className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                Get started
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploadChat;