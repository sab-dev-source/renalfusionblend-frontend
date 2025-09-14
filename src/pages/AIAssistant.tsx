import { Layout } from "../components/Layout";
import { Send, Bot, User, AlertTriangle, Shield, Clock } from "lucide-react";
import { FlipText } from "../components/ui/flip-text";
import { useState } from "react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI Health Assistant. I can help guide you with symptoms, product recommendations, and general health questions. Please remember that I\'m not a substitute for professional medical advice.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    // Simulate AI response
    const botResponse = {
      type: 'bot',
      content: 'Thank you for your question. Based on what you\'ve described, I recommend consulting with a healthcare professional for personalized advice. In the meantime, here are some general suggestions...',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <FlipText
              word="AI Health Assistant"
              className="text-5xl font-bold text-white mb-6"
              delayMultiple={0.08}
            />
            <p className="text-xl text-white/90 mb-8">
              Get personalized health guidance and product recommendations from our advanced AI assistant.
            </p>
          </div>
        </div>
      </section>

      <div className="py-8 bg-gradient-subtle">
        <div className="container-medical max-w-4xl">
          {/* Medical Disclaimer */}
          <div className="medical-disclaimer mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-warning-foreground mb-2">Important Medical Disclaimer</p>
                <ul className="text-sm text-warning-foreground/90 space-y-1">
                  <li>• This AI assistant provides general health information only</li>
                  <li>• Not a substitute for professional medical advice, diagnosis, or treatment</li>
                  <li>• For emergencies, call 911 immediately</li>
                  <li>• Always consult your healthcare provider for medical concerns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="card-medical h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-card-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Health Assistant</h3>
                      <div className="flex items-center gap-1 text-sm text-success">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Available 24/7</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-accent text-accent-foreground'
                        }`}>
                          {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-card-border">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Describe your symptoms or ask a health question..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 input-medical"
                    />
                    <button 
                      onClick={handleSendMessage}
                      className="btn-medical px-4"
                      disabled={!inputMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Resources */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card-medical">
                <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted transition-colors">
                    <div className="font-medium text-sm">Symptom Checker</div>
                    <div className="text-xs text-muted-foreground">Get guidance on symptoms</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted transition-colors">
                    <div className="font-medium text-sm">Product Recommendations</div>
                    <div className="text-xs text-muted-foreground">Find suitable products</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted transition-colors">
                    <div className="font-medium text-sm">Book Consultation</div>
                    <div className="text-xs text-muted-foreground">Connect with professionals</div>
                  </button>
                </div>
              </div>

              {/* Trust Features */}
              <div className="card-medical">
                <h3 className="font-semibold text-foreground mb-4">Why Trust Our AI?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Medical-Grade Training</div>
                      <div className="text-xs text-muted-foreground">Trained on peer-reviewed medical literature</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Privacy Protected</div>
                      <div className="text-xs text-muted-foreground">Your conversations are secure and private</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Professional Oversight</div>
                      <div className="text-xs text-muted-foreground">Reviewed by healthcare professionals</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-destructive font-medium mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm">Emergency?</span>
                </div>
                <p className="text-xs text-destructive/90">
                  If you're experiencing a medical emergency, stop using this chat and call 911 immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIAssistant;