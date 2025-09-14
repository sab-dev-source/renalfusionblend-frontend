import { Layout } from "../components/Layout";
import { Send, Bot, User, AlertTriangle, Shield, Clock } from "lucide-react";
import { FlipText } from "../components/ui/flip-text";
import FileUploadChat from "../components/ui/file-upload-and-chat";
import { useState } from "react";
import { Link } from "react-router-dom";

const AIAssistant = () => {
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
          <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-orange-800 dark:text-orange-200 mb-2">Important Medical Disclaimer</p>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• This AI assistant provides general health information only</li>
                  <li>• Not a substitute for professional medical advice, diagnosis, or treatment</li>
                  <li>• For emergencies, call 911 immediately</li>
                  <li>• Always consult your healthcare provider for medical concerns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Chat Interface */}
            <div className="lg:col-span-2">
              <FileUploadChat />
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
                  <Link to="/products" className="w-full text-left p-3 rounded-lg border border-card-border hover:bg-muted transition-colors block">
                    <div className="font-medium text-sm">Product Recommendations</div>
                    <div className="text-xs text-muted-foreground">Find suitable products</div>
                  </Link>
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