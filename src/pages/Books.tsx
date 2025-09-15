import React, { useState } from 'react';
import { Layout } from "../components/Layout";
import { Book, Download, ShoppingCart, Star, Clock, FileText, CheckCircle, Headphones, RotateCcw } from "lucide-react";
import { FlipText } from "../components/ui/flip-text";
import { Link } from "react-router-dom";
import { useCountUp } from "../hooks/useCountUp";
import { ConversionBanner } from "../components/ConversionPopups";
import dialysisFirstFront from "../assets/books/dialysis-champions-first-edition-front.jpg";
import dialysisFirstBack from "../assets/books/dialysis-champions-first-edition-back.jpg";
import dialysisSecondFront from "../assets/books/dialysis-champions-second-edition-front.jpg";
import dialysisSecondBack from "../assets/books/dialysis-champions-second-edition-back.jpg";

const Books = () => {
  const CountUpStat = ({ value, decimal = false }: { value: number; decimal?: boolean }) => {
    const ref = useCountUp(value, 1500);
    return <span ref={ref}>0</span>;
  };
  const [showBackCover, setShowBackCover] = useState<{[key: number]: boolean}>({});

  const toggleCover = (bookId: number) => {
    setShowBackCover(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  const books = [
    {
      id: 1,
      title: "Dialysis Champions of the New-Era Thru the Knowledge Power of Evidence-Based Practice Research",
      subtitle: "First Edition", 
      author: "Rosemarie Zuleta MSN, BSN, CNN",
      price: { physical: 79.99, digital: 49.99, audio: null },
      rating: 4.9,
      reviews: 847,
      pages: 380,
      isbn: "978-0-12345-678-9",
      description: "This educational textbook caters to healthcare professionals, undergraduates, and postgraduates specializing in nephrology. Authored by a seasoned Certified Nephrology Nurse, it offers a comprehensive address of all clinical aspects, supervision, training, and other vital elements relevant to understanding and knowledge of nephrology, including students, professionals, and patients alike. It also shares from the author's extensive experience across diverse disciplines within the community.",
      frontCover: dialysisFirstFront,
      backCover: dialysisFirstBack,
      preview: "Rosemarie Zuleta began her career in nursing at the Chinatown Dialysis Center in the U.S. in 2008. Throughout her career since then, Zuleta has related between acute dialysis and renal ward nursing...",
      features: [
        "Comprehensive clinical aspects of nephrology",
        "Evidence-based practice research", 
        "Training protocols for healthcare professionals",
        "Patient care strategies and communication",
        "Quality assurance and supervision guidelines",
        "Real-world case studies and applications"
      ],
      shipping: "2-3 business days",
      format: "Hardcover, 380 pages",
      bestseller: true
    },
    {
      id: 2,
      title: "Dialysis Champions of the New-Era Thru the Knowledge Power of Evidence-Based Practice Research",
      subtitle: "Second Edition",
      author: "Rosemarie Zuleta MSN, BSN, CNN", 
      price: { physical: 89.99, digital: 59.99, audio: 39.99 },
      rating: 5.0,
      reviews: 1234,
      pages: 450,
      isbn: "978-0-12345-679-6",
      description: "Dialysis Champions of the New Era offers a comprehensive and evidence-based approach to understanding the complexities of kidney disease and dialysis. Written by Rosemarie Zuleta, MSN, BSN, CNN, this book explores the root causes of kidney failure, the vital role of evidence-based practice in improving patient care, and the innovative treatments available today. With a focus on both the clinical and emotional aspects of dialysis, it serves as an essential resource for healthcare professionals, patients, and families navigating this life-changing condition.",
      frontCover: dialysisSecondFront,
      backCover: dialysisSecondBack,
      preview: "Through clear, accessible language, Zuleta provides valuable insights into the latest medical advancements, effective management strategies, and the importance of holistic care...",
      features: [
        "Updated evidence-based practice protocols",
        "Latest medical advancements in dialysis",
        "Holistic patient care approaches", 
        "Emotional support strategies for patients and families",
        "Innovative treatment methodologies",
        "Comprehensive management strategies",
        "Clinical and emotional aspects integration"
      ],
      shipping: "2-3 business days",
      format: "Hardcover, 450 pages", 
      hasAudio: true,
      bestseller: true,
      newEdition: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-medical text-center">
          <div className="max-w-3xl mx-auto">
            <FlipText
              word="Medical Education Library"
              className="fluid-h1 font-bold text-white mb-6"
              delayMultiple={0.06}
            />
            <p className="fluid-subtitle text-white/90 mb-8 px-4">
              Comprehensive medical textbooks and resources written by leading healthcare professionals. 
              Available in both physical and digital formats for immediate access.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                <span>Instant Digital Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Catalog */}
      <section className="py-20">
        <div className="container-medical">
          <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">Dialysis Champions Book Series</h2>
          <p className="fluid-subtitle text-muted-foreground max-w-3xl mx-auto px-4">
            Evidence-based nephrology education by Rosemarie Zuleta MSN, BSN, CNN - 
            <span className="text-primary font-semibold"> Over 15,000 copies sold worldwide</span>
          </p>
          </div>

          {/* Conversion Banner */}
          <ConversionBanner />

          <div className="space-y-16">
            {books.map((book, index) => (
              <div key={book.id} className="card-medical">
                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Book Covers - Show both front and back */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Front Cover */}
                      <div className="space-y-2">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg group">
                          <img 
                            src={book.frontCover} 
                            alt={`${book.title} front cover`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-xs text-center text-muted-foreground font-medium">Front Cover</p>
                      </div>
                      
                      {/* Back Cover */}
                      <div className="space-y-2">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg group">
                          <img 
                            src={book.backCover} 
                            alt={`${book.title} back cover`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-xs text-center text-muted-foreground font-medium">Back Cover</p>
                      </div>
                    </div>
                    
                    {/* Edition Badges */}
                    <div className="flex gap-2 justify-center">
                      {book.newEdition && (
                        <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          NEW EDITION
                        </div>
                      )}
                      {book.bestseller && (
                        <div className="bg-warning text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ BESTSELLER
                        </div>
                      )}
                    </div>
                    
                    {/* Book Stats */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 justify-center">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="font-medium">{book.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>Ships in {book.shipping}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-medium">
                          <CountUpStat value={book.rating} decimal={true} /> 
                          (<CountUpStat value={book.reviews} /> reviews)
                        </span>
                      </div>
                      {book.hasAudio && (
                        <div className="flex items-center gap-2 justify-center text-accent font-medium">
                          <Headphones className="h-4 w-4" />
                          <span>Audio Edition Available</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{book.title}</h3>
                      <h4 className="text-lg font-semibold text-accent mb-2">{book.subtitle}</h4>
                      <p className="text-primary font-medium mb-1">by {book.author}</p>
                      <p className="text-sm text-muted-foreground">ISBN: {book.isbn}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{book.description}</p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {book.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Preview</h4>
                      <p className="text-sm text-muted-foreground italic">{book.preview}</p>
                      <Link to="/contact" className="text-primary text-sm font-medium mt-2 hover:underline">
                        Read full preview →
                      </Link>
                    </div>

                    {/* Purchase Options */}
                    <div className="border-t border-card-border pt-6">
                      <div className={`grid ${book.hasAudio ? 'md:grid-cols-3' : 'sm:grid-cols-2'} gap-6`}>
                        {/* Physical Copy */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">Physical Copy</span>
                            <span className="text-2xl font-bold text-primary">${book.price.physical}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{book.format}</p>
                          <Link to="/cart" className="w-full btn-medical inline-flex items-center justify-center">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Order Hard Copy
                          </Link>
                        </div>

                        {/* Digital Copy */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">Digital Copy</span>
                            <span className="text-2xl font-bold text-accent">${book.price.digital}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Instant PDF download</p>
                          <Link to="/checkout" className="w-full btn-accent inline-flex items-center justify-center">
                            <Download className="h-4 w-4 mr-2" />
                            Download Soft Copy
                          </Link>
                        </div>

                        {/* Audio Copy (Second Edition Only) */}
                        {book.hasAudio && book.price.audio && (
                          <div className="space-y-3 relative">
                            <div className="absolute -top-2 -right-2 bg-warning text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                              LIMITED TIME
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-foreground">Audio Edition</span>
                              <div className="text-right">
                                <span className="text-sm text-muted-foreground line-through block">$59.99</span>
                                <span className="text-2xl font-bold text-success">${book.price.audio}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">Professional narration</p>
                            <Link to="/checkout" className="w-full bg-gradient-to-r from-success to-accent text-white font-medium py-2 px-4 rounded-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center">
                              <Headphones className="h-4 w-4 mr-2" />
                              Get Audiobook - 33% OFF
                            </Link>
                            <p className="text-xs text-success text-center font-medium">
                              ⚡ World-class narration experience
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Books;