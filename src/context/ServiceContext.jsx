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
        "User experience (UX) and user interface (UI) design are essential components of any successful digital product or service. Our UX/UI design services are focused on creating intuitive and visually appealing experiences that delight users and drive engagement. From wireframing and prototyping to user testing and optimization, we take a holistic approach to design, ensuring that every interaction is seamless and intuitive. Whether you're building a website, mobile app, or digital platform, we're here to help you create a user experience that stands out from the competition.",
    },
    {
      title: "Photography",
      icon: "TbCamera",
      delay: 1000,
      svgPath: "../../../public/images/photograph.svg",
      description:
        "They say a picture is worth a thousand words, and nowhere is this more true than in the world of branding and marketing. Our photography services are designed to help you tell your brand's story through stunning visual imagery. Whether you need product photos, lifestyle shots, or corporate portraits, our team of experienced photographers has the expertise and creativity to bring your vision to life. From concept development to final delivery, we're dedicated to capturing the essence of your brand and creating images that resonate with your audience.",
    },
    {
      title: "Management",
      icon: "TbChartDots2",
      delay: 1200,
      svgPath: "../../../public/images/management.svg",
      description:
        "Effective management is the backbone of any successful business. Our management services are designed to help you streamline your operations, optimize efficiency, and drive growth. Whether you need assistance with project management, resource allocation, or organizational development, our team of experienced professionals is here to help. We work closely with you to understand your unique needs and challenges, developing tailored solutions that empower you to achieve your business goals.",
    },
    {
      title: "Social Media",
      icon: "TbMessageCircle2",
      delay: 1400,
      svgPath: "../../../public/images/media.svg",
      description:
        "In today's digital age, social media has become a powerful tool for connecting with customers, building brand awareness, and driving sales. Our social media services are designed to help you harness the full potential of social media platforms to grow your business. From content creation and curation to community management and influencer partnerships, we'll work with you to develop a customized social media strategy that aligns with your brand's goals and objectives. With our expertise and creative approach, we'll help you stand out in the crowded social media landscape and engage your target audience effectively.",
    },
    {
      title: "Data Science",
      icon: "TbAtom",
      delay: 1600,
      svgPath: "../../../public/images/data.svg",
      description:
        "In an increasingly data-driven world, harnessing the power of data is essential for driving business success. Our data science services are designed to help you extract actionable insights from your data, enabling you to make informed decisions and drive strategic growth. Whether you need assistance with data analysis, predictive modeling, or machine learning, our team of experienced data scientists has the expertise and knowledge to help. From identifying patterns and trends to optimizing processes and workflows, we'll work with you to unlock the full potential of your data and drive tangible results for your business.",
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
