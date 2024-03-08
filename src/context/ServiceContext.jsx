import React, { createContext, useState, useContext, useEffect } from "react";

const ServiceContext = createContext();

export const useService = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(() => {
    const storedService = localStorage.getItem("selectedService");
    return storedService ? JSON.parse(storedService) : null;
  });

  const services = [
    {
      title: "Digital Branding",
      icon: "TbBrandCraft",
      delay: 0,
      svgPath: "../../../public/images/digital-branding.svg",
      description:
        "In today's digital landscape, establishing a strong brand presence is paramount. Our digital branding services are tailored to elevate your brand's online identity, crafting compelling narratives and visuals that resonate with your target audience. Through meticulous attention to detail and strategic positioning, we ensure that your brand stands out amidst the digital noise, leaving a lasting impression on potential customers.",
    },
    {
      title: "Creative Solutions",
      icon: "TbBulb",
      delay: 200,
      svgPath: "../../../public/images/creative-solutions.svg",
      description:
        "Innovation lies at the heart of our creative solutions. We believe in pushing boundaries and thinking outside the box to deliver impactful results for your brand. Our team of creative minds thrives on generating fresh ideas and translating them into captivating content that captivates and engages your audience. Whether it's designing eye-catching visuals or conceptualizing unique campaigns, we're here to bring your brand's vision to life.",
    },
    {
      title: "Marketing Solutions",
      icon: "TbSpeakerphone",
      delay: 400,
      svgPath: "../../../public/images/marketing.svg",
      description:
        "In a competitive digital landscape, effective marketing is key to staying ahead of the curve. Our marketing solutions are designed to help your business reach its full potential, leveraging data-driven strategies and cutting-edge techniques to drive growth and engagement. From targeted advertising campaigns to comprehensive marketing strategies, we work tirelessly to ensure that your brand stands out and resonates with your target audience.",
    },
    {
      title: "Business Analytics",
      icon: "TbDeviceAnalytics",
      delay: 600,
      svgPath: "../../../public/images/business.svg",
      description:
        "Unlock the power of data with our advanced business analytics services. We believe that data holds the key to unlocking valuable insights and driving informed decision-making. Our team of analysts specializes in extracting actionable intelligence from complex datasets, providing you with the insights you need to optimize performance and drive business growth. With our comprehensive analytics solutions, you'll gain a deeper understanding of your customers, competitors, and market trends, empowering you to make smarter, more strategic decisions.",
    },
    {
      title: "UX & UI Design",
      icon: "TbBrandFigma",
      delay: 800,
      svgPath: "../../../public/images/ui-ux.svg",
      description:
        "In today's digital landscape, establishing a strong brand presence is paramount. Our digital branding services are tailored to elevate your brand's online identity, crafting compelling narratives and visuals that resonate with your target audience. Through meticulous attention to detail and strategic positioning, we ensure that your brand stands out amidst the digital noise, leaving a lasting impression on potential customers.",
    },
    {
      title: "Photography",
      icon: "TbCamera",
      delay: 1000,
      svgPath: "../../../public/images/photograph.svg",
      description:
        "In today's digital landscape, establishing a strong brand presence is paramount. Our digital branding services are tailored to elevate your brand's online identity, crafting compelling narratives and visuals that resonate with your target audience. Through meticulous attention to detail and strategic positioning, we ensure that your brand stands out amidst the digital noise, leaving a lasting impression on potential customers.",
    },
    {
      title: "Management",
      icon: "TbChartDots2",
      delay: 1200,
      svgPath: "../../../public/images/management.svg",
      description:
        "In today's digital landscape, establishing a strong brand presence is paramount. Our digital branding services are tailored to elevate your brand's online identity, crafting compelling narratives and visuals that resonate with your target audience. Through meticulous attention to detail and strategic positioning, we ensure that your brand stands out amidst the digital noise, leaving a lasting impression on potential customers.",
    },
    {
      title: "Social Media",
      icon: "TbMessageCircle2",
      delay: 1400,
      svgPath: "../../../public/images/media.svg",
      description:
        "In today's digital landscape, establishing a strong brand presence is paramount. Our digital branding services are tailored to elevate your brand's online identity, crafting compelling narratives and visuals that resonate with your target audience. Through meticulous attention to detail and strategic positioning, we ensure that your brand stands out amidst the digital noise, leaving a lasting impression on potential customers.",
    },
    {
      title: "Data Science",
      icon: "TbAtom",
      delay: 1600,
      svgPath: "../../../public/images/data.svg",
      description:
        "In today's digital landscape, establishing a strong brand presence is paramount. Our digital branding services are tailored to elevate your brand's online identity, crafting compelling narratives and visuals that resonate with your target audience. Through meticulous attention to detail and strategic positioning, we ensure that your brand stands out amidst the digital noise, leaving a lasting impression on potential customers.",
    },
  ];
  useEffect(() => {
    // Store the selected service in localStorage whenever it changes
    localStorage.setItem("selectedService", JSON.stringify(selectedService));
  }, [selectedService]);

  return (
    <ServiceContext.Provider
      value={{ services, selectedService, setSelectedService }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
