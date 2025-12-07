import { Coffee, Heart, Moon, Plus, Sparkles, Sun, Wine } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const basePlan = {
  name: "Forfait L'Inattendu",
  prices: {
    weekday: {
      day: "100€",
      night: "140€",
    },
    weekend: {
      day: "120€",
      night: "180€",
    },
  },
  icon: Heart,
  included: [
    "Peignoir",
    "Chaussons confortables",
    "Jacuzzi privatif",
    "Télévision",
    "Éclairage d'ambiance",
  ],
  extras: ["Snacks & boissons"],
};

const supplements = [
  {
    name: "Petit-déjeuner",
    price: "15€",
    icon: Coffee,
    description: "Petit-déjeuner complet servi dans votre suite",
  },
  {
    name: "Pack décoration romantique simple",
    price: "35€",
    icon: Heart,
    description: "Pétales de roses, bougies parfumées",
  },
  {
    name: "Pack décoration romantique premium",
    price: "70€",
    icon: Sparkles,
    description:
      "Ballons, guirlandes lumineuses, rose en peluche, arc de ballons personnalisé",
  },
  {
    name: "Bouteille de champagne",
    price: "35€",
    icon: Wine,
    description: "Bouteille de champagne de qualité",
  },
];

export function Pricing() {
  const [selectedPeriod, setSelectedPeriod] = useState<"weekday" | "weekend">(
    "weekday"
  );
  const [selectedTime, setSelectedTime] = useState<"day" | "night">("day");

  return (
    <section
      id="tarifs"
      className="py-24 px-6 bg-gradient-to-br from-rose-950 via-black to-red-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Heart
              className="text-pink-500 animate-pulse"
              fill="currentColor"
              size={40}
            />
          </div>
          <h2 className="text-white mb-4">Nos Tarifs</h2>
          <p className="text-pink-200 max-w-2xl mx-auto mb-8">
            Choisissez votre période et moment de la journée
          </p>

          {/* Period and Time Selectors */}
          <div className="flex flex-col items-center gap-4">
            {/* Period Selector */}
            <div className="inline-flex bg-black/50 rounded-full p-2 border border-pink-500/30">
              <button
                onClick={() => setSelectedPeriod("weekday")}
                className={`px-8 py-3 rounded-full transition-all ${
                  selectedPeriod === "weekday"
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                    : "text-pink-300 hover:text-white"
                }`}
              >
                Semaine (Lun-Jeu)
              </button>
              <button
                onClick={() => setSelectedPeriod("weekend")}
                className={`px-8 py-3 rounded-full transition-all ${
                  selectedPeriod === "weekend"
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                    : "text-pink-300 hover:text-white"
                }`}
              >
                Week-end (Ven-Dim)
              </button>
            </div>

            {/* Time Selector */}
            <div className="inline-flex bg-black/50 rounded-full p-2 border border-pink-500/30">
              <button
                onClick={() => setSelectedTime("day")}
                className={`px-8 py-3 rounded-full transition-all flex items-center gap-2 ${
                  selectedTime === "day"
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                    : "text-pink-300 hover:text-white"
                }`}
              >
                <Sun size={18} />
                Journée
              </button>
              <button
                onClick={() => setSelectedTime("night")}
                className={`px-8 py-3 rounded-full transition-all flex items-center gap-2 ${
                  selectedTime === "night"
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                    : "text-pink-300 hover:text-white"
                }`}
              >
                <Moon size={18} />
                Nuit
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mb-12">
          {/* Main Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border-2 border-pink-500 shadow-2xl shadow-pink-500/50"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-4">
                <Heart
                  className="text-pink-400"
                  fill="currentColor"
                  size={40}
                />
                <div>
                  <h3 className="text-white mb-2">{basePlan.name}</h3>
                </div>
              </div>

              <div className="mb-4">
                <motion.div
                  key={`${selectedPeriod}-${selectedTime}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-block"
                >
                  <span className="text-white mr-2">Tarif :</span>
                  <span className="text-pink-400 text-xl font-semibold">
                    {basePlan.prices[selectedPeriod][selectedTime]}
                  </span>
                </motion.div>
              </div>

              <div className="mb-4">
                <h4 className="text-white mb-4">Inclus dans le forfait</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {basePlan.included.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-pink-100"
                    >
                      <Heart
                        className="text-pink-500 flex-shrink-0 mt-1"
                        fill="currentColor"
                        size={16}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3 text-pink-200">
                  <Plus
                    className="text-pink-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span>En supplément : </span>
                    <span>{basePlan.extras.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full shadow-lg shadow-pink-500/50 whitespace-nowrap"
                >
                  Réserver maintenant
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supplements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-white text-center mb-8">
            Suppléments Décoration
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supplements.map((supplement, index) => {
            const IconComponent = supplement.icon;
            const isLastAndAlone =
              index === supplements.length - 1 && supplements.length % 3 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-pink-900/30 ${
                  isLastAndAlone ? "md:col-start-2" : ""
                }`}
                style={isLastAndAlone ? { maxWidth: "100%" } : {}}
              >
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-3">
                    <IconComponent
                      className="text-pink-500"
                      fill="currentColor"
                      size={40}
                    />
                  </div>
                  <h4 className="text-white mb-2">{supplement.name}</h4>
                  <p className="text-pink-300 mb-3">{supplement.price}</p>
                  <p className="text-pink-200">{supplement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-pink-300">
            * Les suppléments sont à ajouter au tarif de base lors de la
            réservation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
