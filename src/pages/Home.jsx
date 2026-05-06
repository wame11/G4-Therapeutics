import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import PipelinePreview from '@/components/home/PipelinePreview';
import GlobalBridgeSection from '@/components/home/GlobalBridgeSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <PipelinePreview />
      <GlobalBridgeSection />
      <CTASection />
    </>
  );
}