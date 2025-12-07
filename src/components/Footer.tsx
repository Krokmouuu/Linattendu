import { Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/l.inattendu.love.room",
      image: "/img/logo/facebook.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/linattendu_loveroom/",
      image: "/img/logo/instagram.png",
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/@linattendu13?share_id=DK9GewZKos8&locale=fr-FR",
      image: "/img/logo/snapchat2.png",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@linattendu.love.r",
      image: "/img/logo/tiktok.png",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-rose-950 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-pink-500" fill="currentColor" size={32} />
              <span className="text-white">L&apos;Inattendu</span>
            </div>
            <p className="text-pink-200">
              Votre destination pour des moments romantiques inoubliables dans
              un cadre luxueux et intime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="text-pink-200 hover:text-pink-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-pink-200 hover:text-pink-400 transition-colors"
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  href="#tarifs"
                  className="text-pink-200 hover:text-pink-400 transition-colors"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-pink-200 hover:text-pink-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Suivez-nous</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-5 h-5"
                  aria-label={social.name}
                >
                  <img
                    src={social.image}
                    alt={social.name}
                    className="w-8 h-8 object-contain"
                    style={{
                      maxWidth: "40px",
                      maxHeight: "40px",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-900/30 pt-8 text-center">
          <p className="text-pink-300">
            © {new Date().getFullYear()} L&apos;Inattendu. Tous droits réservés.
          </p>
          <p className="text-pink-400 mt-2 flex items-center justify-center gap-2">
            Fait avec{" "}
            <Heart className="text-red-500" fill="currentColor" size={16} />{" "}
            pour vous
          </p>
        </div>
      </div>
    </footer>
  );
}
