import emailjs from "@emailjs/browser";
import { Calendar, Heart, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérifier le cooldown de 30 secondes
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 30000) {
      const remainingSeconds = Math.ceil(
        (30000 - (now - lastSubmitTime)) / 1000
      );
      toast.error(
        `Veuillez patienter ${remainingSeconds} seconde${
          remainingSeconds > 1 ? "s" : ""
        } avant d'envoyer un nouveau message.`
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Vérifier si les clés sont définies
      if (
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        toast.error("Configuration manquante. Vérifiez le fichier .env");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          phone: formData.phone,
          date: formData.date,
          message: formData.message,
          to_email: "contact@linattendu-love-room.fr",
        },
        publicKey
      );
      toast.success("Demande envoyée ! Nous vous contacterons bientôt ❤️");
      setLastSubmitTime(Date.now());
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      });
    } catch (error: any) {
      // Message d'erreur plus détaillé
      let errorMessage = "Une erreur est survenue. Veuillez réessayer.";
      if (error?.status === 400) {
        errorMessage =
          error?.text ||
          error?.message ||
          "Erreur de configuration. Vérifiez vos clés EmailJS.";
      } else if (error?.status === 401) {
        errorMessage = "Clé publique invalide. Vérifiez votre clé publique.";
      } else if (error?.status === 404) {
        errorMessage = "Service ou template introuvable. Vérifiez vos IDs.";
      } else if (error?.message) {
        errorMessage = `Erreur: ${error.message}`;
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black">
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
          <h2 className="text-white mb-4">Contactez-nous</h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            Réservez votre moment magique dès maintenant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-pink-900/30">
              <h3 className="text-white mb-6">Informations</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500/20 p-3 rounded-full">
                    <MapPin className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-pink-300">Adresse</p>
                    <p className="text-white">
                      L'adresse vous sera communiquée après réservation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-500/20 p-3 rounded-full">
                    <Phone className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-pink-300">Téléphone</p>
                    <p className="text-white">+33 6 24 42 59 92</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-500/20 p-3 rounded-full">
                    <Mail className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-pink-300">Email</p>
                    <p className="text-white">
                      contact@linattendu-love-room.fr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-pink-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900 border border-pink-900/30 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-pink-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900 border border-pink-900/30 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-pink-300 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900 border border-pink-900/30 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-pink-300 mb-2">
                  Date souhaitée
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-6 py-4 bg-gray-900 border border-pink-900/30 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors pr-12"
                  />
                  <Calendar
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-pink-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-900 border border-pink-900/30 rounded-2xl text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  placeholder="Dites-nous en plus sur vos envies..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer la demande
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
