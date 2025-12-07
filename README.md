# L'Inattendu - Site Web

Site web pour **L'Inattendu**, une suite romantique et love room offrant des moments inoubliables dans un cadre luxueux et intime.

## 🎯 Description du Projet

Site vitrine moderne et élégant présentant les services de L'Inattendu, permettant aux clients de :
- Découvrir la suite et ses équipements via une galerie photo
- Consulter les tarifs selon la période (semaine/week-end) et le moment (jour/nuit)
- Réserver directement via un formulaire de contact
- Accéder aux informations de contact et réseaux sociaux

## 🚀 Technologies Utilisées

### Framework & Build
- **Vite 6.3.5** - Build tool ultra-rapide
- **React 18.3.1** - Bibliothèque UI
- **TypeScript 5.7.2** - Typage statique
- **@vitejs/plugin-react-swc** - Compilateur SWC pour React

### UI & Styling
- **Tailwind CSS v4** - Framework CSS utility-first
- **Radix UI** - Composants UI accessibles et sans style
- **Motion (Framer Motion)** - Animations fluides
- **Lucide React** - Icônes modernes

### Fonctionnalités
- **EmailJS** - Envoi d'emails depuis le formulaire de contact
- **Sonner** - Notifications toast élégantes
- **React Day Picker** - Sélection de dates

### SEO & Performance
- **Sitemap.xml** - Référencement
- **Robots.txt** - Configuration pour les crawlers
- **Manifest.json** - Support PWA
- **Meta tags Open Graph** - Partage sur réseaux sociaux

## 📁 Structure du Projet

```
linnatendu-front-end/
├── public/
│   ├── img/
│   │   ├── favicon.png          # Favicon du site
│   │   ├── logo/                # Logos réseaux sociaux
│   │   └── room/                # Photos de la suite
│   ├── manifest.json            # Configuration PWA
│   ├── robots.txt               # Configuration SEO
│   └── sitemap.xml              # Plan du site
├── src/
│   ├── components/
│   │   ├── Contact.tsx          # Formulaire de contact
│   │   ├── Footer.tsx           # Pied de page
│   │   ├── Gallery.tsx          # Galerie photos
│   │   ├── Hero.tsx             # Section héro
│   │   ├── Navigation.tsx       # Navigation principale
│   │   ├── Pricing.tsx          # Section tarifs
│   │   └── ui/                  # Composants UI réutilisables
│   ├── App.tsx                  # Composant principal
│   ├── main.tsx                 # Point d'entrée
│   └── index.css                # Styles globaux
├── .env                         # Variables d'environnement
├── index.html                   # Template HTML
├── package.json                 # Dépendances
├── tsconfig.json                # Configuration TypeScript
└── vite.config.ts               # Configuration Vite
```

## 🛠️ Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le dépôt**
```bash
git clone <url-du-repo>
cd linnatendu-front-end
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
Créez un fichier `.env` à la racine du projet :
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production (dossier `build/`)

## ⚙️ Configuration

### EmailJS
Le formulaire de contact utilise EmailJS pour envoyer les emails. Configuration requise :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template d'email avec les variables :
   - `{{name}}` / `{{from_name}}`
   - `{{email}}` / `{{from_email}}`
   - `{{phone}}`
   - `{{date}}`
   - `{{message}}`
4. Ajouter les clés dans le fichier `.env`

### Déploiement

Le projet est configuré pour être déployé sur :
- **Vercel** (via `vercel.json`)
- **Netlify** (via `netlify.toml`)

Les fichiers statiques sont générés dans le dossier `build/` après `npm run build`.

## 🎨 Fonctionnalités Principales

### Navigation
- Menu responsive avec scroll smooth vers les sections
- Design élégant avec animations

### Galerie
- Grille responsive avec images de la suite
- Effets hover avec overlay
- Animations au scroll

### Tarifs
- Sélecteurs interactifs pour période (semaine/week-end) et moment (jour/nuit)
- Animation du slider entre les options
- Affichage dynamique des prix selon la sélection
- Liste des suppléments disponibles

### Contact
- Formulaire de contact avec validation
- Protection anti-spam (cooldown de 30 secondes)
- Envoi d'email via EmailJS
- Validation de date (pas de dates passées)
- Notifications toast pour feedback utilisateur

### Footer
- Liens vers les réseaux sociaux (Facebook, Instagram, Snapchat, TikTok)
- Liens rapides vers les sections
- Informations de contact

## 🔒 Sécurité

- Protection contre l'envoi multiple d'emails (cooldown de 30 secondes)
- Validation des champs du formulaire
- Variables d'environnement pour les clés API

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🌐 SEO

- Meta tags optimisés
- Sitemap.xml pour le référencement
- Robots.txt configuré
- Open Graph tags pour le partage social
- Favicon et manifest.json

## 📄 Licence

Projet privé - Tous droits réservés

## 👤 Contact

- **Email** : contact@linattendu-love-room.fr
- **Téléphone** : +33 6 24 42 59 92
- **Réseaux sociaux** : Voir le footer du site

---

Fait avec ❤️ pour L'Inattendu

