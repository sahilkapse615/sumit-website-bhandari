import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { Services } from './components/Services';
import { SavingsCalculator } from './components/SavingsCalculator';
import { WhyChoose } from './components/WhyChoose';
import { TechnologySection } from './components/TechnologySection';
import { Subsidy } from './components/Subsidy';
import { RecentProjects } from './components/RecentProjects';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { VideoModal } from './components/VideoModal';
import { DetailModal } from './components/DetailModal';
import { ServiceItem, TechItem, ProjectItem } from './data/solarData';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [subsidyModalOpen, setSubsidyModalOpen] = useState(false);

  const [prefilledBill, setPrefilledBill] = useState(4500);
  const [prefilledType, setPrefilledType] = useState('Residential Solar');

  const handleOpenQuoteWithDetails = (type = 'Residential Solar', bill = 4500) => {
    setPrefilledType(type);
    setPrefilledBill(bill);
    setQuoteModalOpen(true);
  };

  const handleCalculatorConsultation = ({
    bill,
    property,
  }: {
    bill: number;
    property: string;
    location: string;
  }) => {
    setPrefilledBill(bill);
    setPrefilledType(`${property} Solar`);
    setQuoteModalOpen(true);
  };

  const closeDetailModal = () => {
    setSelectedService(null);
    setSelectedTech(null);
    setSelectedProject(null);
    setAboutModalOpen(false);
    setSubsidyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#F8B814] selection:text-black">
      {/* 1. Header Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteWithDetails('Residential Solar', 4500)} />

      {/* 2. Hero Section: Save Today Power a Brighter Tomorrow */}
      <Hero
        onOpenSiteSurvey={() => handleOpenQuoteWithDetails('Residential Solar', 4500)}
        onOpenVideoModal={() => setVideoModalOpen(true)}
      />

      {/* 3. Five Key Value Badges Strip */}
      <ValueStrip />

      {/* 4. Complete Solar Solutions Under One Roof */}
      <Services
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* 5. Calculate Your Solar Savings */}
      <SavingsCalculator
        onOpenConsultation={handleCalculatorConsultation}
      />

      {/* 6. Why Choose R. S. Bhandari? */}
      <WhyChoose
        onOpenAboutModal={() => setAboutModalOpen(true)}
      />

      {/* 7. Our Technology: High-Performance Solar Products */}
      <TechnologySection
        onSelectTech={(tech) => setSelectedTech(tech)}
        onOpenAllProducts={() => setAboutModalOpen(true)}
      />

      {/* 8. Government Subsidy Support */}
      <Subsidy
        onOpenSubsidyModal={() => setSubsidyModalOpen(true)}
      />

      {/* 9. Our Recent Projects: Real Installations. Real Impact. */}
      <RecentProjects
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenAllProjects={() => setAboutModalOpen(true)}
      />

      {/* 10. Our Customers Trust Us (3 Testimonials) */}
      <TestimonialsSection />

      {/* 11. Frequently Asked Questions, Free Consultation & Contact Info */}
      <FaqAndContact
        onSuccessSubmit={() => {}}
      />

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialType={prefilledType}
        initialBill={prefilledBill}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenQuote={() => handleOpenQuoteWithDetails('Residential Solar', 4500)}
      />

      <DetailModal
        isOpen={
          Boolean(selectedService) ||
          Boolean(selectedTech) ||
          Boolean(selectedProject) ||
          aboutModalOpen ||
          subsidyModalOpen
        }
        onClose={closeDetailModal}
        service={selectedService}
        tech={selectedTech}
        project={selectedProject}
        about={aboutModalOpen}
        subsidy={subsidyModalOpen}
        onOpenQuote={() => {
          closeDetailModal();
          handleOpenQuoteWithDetails('Residential Solar', 4500);
        }}
      />
    </div>
  );
}
