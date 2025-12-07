import { Heart } from "lucide-react";
import { motion } from "motion/react";

const images = [
  {
    url: "/img/room/flowerpath2.jpg",
    title: "Allée Fleurie",
  },
  {
    url: "/img/room/jacuzzi.jpg",
    title: "Jacuzzi Privatif",
  },
  {
    url: "/img/room/bathroom2.jpg",
    title: "Salle de Bain",
  },
  {
    url: "/img/room/bedroom5.jpg",
    title: "Chambre Romantique",
  },
  {
    url: "/img/room/breakfast3.jpg",
    title: "Petit-déjeuner",
  },
  {
    url: "/img/room/alcoolbucket.jpg",
    title: "Pack Champagne",
  },
  {
    url: "/img/room/jacuzzi2.png",
    title: "Jacuzzi",
  },
  {
    url: "/img/room/breakfast.jpg",
    title: "Petit-déjeuner au Lit",
  },
  {
    url: "/img/room/bedroom.jpg",
    title: "Suite",
  },
  {
    url: "/img/room/bedroom2.jpg",
    title: "Chambre",
  },
  {
    url: "/img/room/bedroom3.jpg",
    title: "Suite de Luxe",
  },
  {
    url: "/img/room/bedroom4.jpg",
    title: "Chambre Romantique",
  },
  {
    url: "/img/room/bedroom6.jpg",
    title: "Suite Premium",
  },
  {
    url: "/img/room/bedroom7.jpg",
    title: "Chambre Élégante",
  },
  {
    url: "/img/room/shower.jpg",
    title: "Douche",
  },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-2 mb-4">
            <Heart className="text-pink-500" fill="currentColor" size={32} />
            <Heart className="text-red-500" fill="currentColor" size={32} />
            <Heart className="text-pink-500" fill="currentColor" size={32} />
          </div>
          <h2 className="text-white mb-4">Notre Galerie</h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            Découvrez notre espace luxueux et romantique, conçu pour créer des
            souvenirs inoubliables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white">{image.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart
                  className="text-pink-400"
                  fill="currentColor"
                  size={28}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
