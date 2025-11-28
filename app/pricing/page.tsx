"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import styles from "./pricing.module.scss";

const categories = [
  "Web & Mobile App Development",
  "Graphics & Game Development",
  "Machine Learning",
  "Digital Marketing",
  // "PCB Design",
];

const servicesByCategory: { [key: string]: string[] } = {
  "Web & Mobile App Development": [
    "Frontend Development",
    "Backend Development",
    "Fullstack Development",
    "Mobile App (React Native)",
  ],
  "Graphics & Game Development": [
    "3D Graphics Programming",
    "Game Engine Development",
    "Motion Graphics",
  ],
  "Machine Learning": [
    "Generative Model Development",
    "LLM-powered Application",
  ],
  "Digital Marketing": [
    "Ad Campaigns",
    "Content Creation",
    "Conversion Optimization",
  ],
  "PCB Design": ["Schematic Design", "Board Layout"],
};

const basePrices: { [key: string]: number } = {
  "Frontend Development": 1500,
  "Backend Development": 2000,
  "Fullstack Development": 3500,
  "Mobile App (React Native)": 3000,
  "3D Graphics Programming": 4000,
  "Game Engine Development": 5000,
  "Motion Graphics": 2500,
  "Generative Model Development": 6000,
  "LLM-powered Application": 5000,
  "Ad Campaigns": 1000,
  "Content Creation": 1500,
  "Conversion Optimization": 2000,
  "Schematic Design": 1000,
  "Board Layout": 1500,
};

const serviceOptions: { [key: string]: { name: string; price: number }[] } = {
  "Frontend Development": [
    { name: "Responsive Design", price: 500 },
    { name: "Animations", price: 500 },
    { name: "CMS Integration", price: 1000 },
  ],
  "Backend Development": [
    { name: "User Authentication", price: 1000 },
    { name: "Database Design & Setup", price: 1000 },
    { name: "Payment Gateway Integration", price: 1500 },
  ],
  "Fullstack Development": [
    { name: "Responsive Design", price: 500 },
    { name: "Animations", price: 500 },
    { name: "CMS Integration", price: 1000 },
    { name: "User Authentication", price: 1000 },
    { name: "Database Design & Setup", price: 1000 },
    { name: "Payment Gateway Integration", price: 1500 },
  ],
  "Mobile App (React Native)": [
    { name: "Push Notifications", price: 500 },
    { name: "Offline Support", price: 1000 },
    { name: "In-app Purchases", price: 1500 },
  ],
  "3D Graphics Programming": [
    { name: "Advanced Lighting", price: 1000 },
    { name: "Physics Simulation", price: 1500 },
    { name: "VR/AR Support", price: 2000 },
  ],
  "Game Engine Development": [
    { name: "Asset Pipeline", price: 2000 },
    { name: "Multiplayer Networking", price: 5000 },
  ],
  "Motion Graphics": [
    { name: "3D Elements", price: 1000 },
    { name: "Sound Design", price: 500 },
  ],
  "Generative Model Development": [
    { name: "Model Deployment", price: 2000 },
    { name: "API for the model", price: 1500 },
  ],
  "LLM-powered Application": [
    { name: "Fine-tuning a model", price: 3000 },
    { name: "Retrieval-Augmented Generation (RAG)", price: 4000 },
    { name: "Agent-based system", price: 6000 },
  ],
  "Ad Campaigns": [
    { name: "A/B Testing", price: 500 },
  ],
  "Content Creation": [
    { name: "Social Media Content", price: 500 },
    { name: "Video Content", price: 1000 },
  ],
  "Conversion Optimization": [
    { name: "Landing Page Design", price: 1000 },
    { name: "Heatmap & User Recording Analysis", price: 500 },
  ],
  "Schematic Design": [
    { name: "Simulation & Analysis", price: 1000 },
  ],
  "Board Layout": [
    { name: "High-Speed Design", price: 1500 },
    { name: "Design for Manufacturing (DFM) check", price: 500 },
  ],
};


export default function Pricing() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const selectCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setService("");
    setSelectedOptions([]);
    setStep(2);
  };

  const selectService = (selectedService: string) => {
    setService(selectedService);
    setSelectedOptions([]);
    setStep(3);
  };

  const handleOptionToggle = (optionName: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionName)
        ? prev.filter((o) => o !== optionName)
        : [...prev, optionName]
    );
  };

  const back = () => {
    setStep(step - 1);
  };

  const startOver = () => {
    setStep(1);
    setCategory("");
    setService("");
    setSelectedOptions([]);
    setPriceRange(null);
  };

  const calculatePrice = () => {
    if (service) {
      let total = basePrices[service];
      selectedOptions.forEach(optionName => {
        const option = serviceOptions[service]?.find(o => o.name === optionName);
        if (option) {
          total += option.price;
        }
      });
      const lowerBound = total * 0.8;
      const upperBound = total * 1.2;
      setPriceRange([Math.round(lowerBound), Math.round(upperBound)]);
      setStep(4);
    }
  };

  return (
    <div>
      <Header blackLinks={true} />
      <div className={styles.container}>
        <h1>Pricing Calculator</h1>
        <p>Get an estimate for your project.</p>

        {step > 1 && step < 4 && (
          <button className={styles.backButton} onClick={back}>
            Back
          </button>
        )}

        {step === 1 && (
          <div className={styles.step}>
            <h2>Step 1: Select a Project Category</h2>
            <div className={styles.options}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => selectCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.step}>
            <h2>Step 2: Select a Service for {category}</h2>
            <div className={styles.options}>
              {servicesByCategory[category].map((serv) => (
                <button key={serv} onClick={() => selectService(serv)}>
                  {serv}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.step}>
            <h2>Step 3: Select Add-ons</h2>
            <div className={styles.checklist}>
              {serviceOptions[service]?.map((option) => (
                <div key={option.name} className={styles.checkItem}>
                  <input
                    type="checkbox"
                    id={option.name}
                    checked={selectedOptions.includes(option.name)}
                    onChange={() => handleOptionToggle(option.name)}
                  />
                  <label htmlFor={option.name}>{option.name} (+${option.price})</label>
                </div>
              ))}
            </div>
            <button className={styles.calculateButton} onClick={calculatePrice}>
              Calculate Price
            </button>
          </div>
        )}

        {step === 4 && (
          <div className={styles.step}>
            <h2>Estimated Price</h2>
            <div className={styles.summary}>
              <p>
                <strong>Category:</strong> {category}
              </p>
              <p>
                <strong>Service:</strong> {service}
              </p>
              {selectedOptions.length > 0 && (
                <p>
                  <strong>Add-ons:</strong> {selectedOptions.join(", ")}
                </p>
              )}
              {priceRange && (
                <div className={styles.price}>
                  <h3>
                    ${priceRange[0]} - ${priceRange[1]}
                  </h3>
                  <p>
                    <em>
                      This is a rough estimate. The final price may vary based
                      on the specific requirements of your project.
                    </em>
                  </p>
                </div>
              )}
            </div>
            <button className={styles.startOverButton} onClick={startOver}>
              Start Over
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
