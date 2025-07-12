// Villain Data
const mainVillains = [
    {
        name: "Esdeath",
        image: "static/Esdeath.jpg",
        quote: "The weak are destined to lie beneath the boots of the strong. If that angers you, overcome your deficits.",
        prowess: "A sadistic general with ice manipulation powers, Esdeath combines tactical brilliance with overwhelming cruelty. Her Demon's Extract grants her control over ice and time itself, making her nearly invincible in battle.",
        credit: "Empire's Strongest"
    },
    {
        name: "Makima",
        image: "static/Makima.jpg",
        quote: "I'm always right. Even when I'm wrong, I'm right.",
        prowess: "The Control Devil incarnate, Makima manipulates reality through contracts and domination. Her ability to control anyone she perceives as inferior makes her a terrifying puppet master of human society.",
        credit: "Control Devil"
    },
    {
        name: "Sosuke Aizen",
        image: "static/Sosuke Aizen.jpg",
        quote: "Since the beginning, no one has ever stood in the heavens… From this day forth, I will stand in heaven.",
        prowess: "A master of deception and illusion, Aizen's Kyoka Suigetsu renders enemies helpless through complete hypnosis. His centuries-long schemes and transcendent spiritual pressure make him a god among Shinigami.",
        credit: "He Who Stands Above"
    },
    {
        name: "Light Yagami",
        image: "static/Light.jpg",
        quote: "I am justice! I protect the innocent and those who fear evil.",
        prowess: "Kira, the self-proclaimed god of the new world, wields the Death Note with calculated precision. His genius-level intellect and unwavering belief in his twisted justice make him humanity's judge and executioner.",
        credit: "Death Note Bearer"
    },
    {
        name: "All for One",
        image: "static/AllForOne.jpg",
        quote: "You hate the fact that you're powerless to stop me, that you're completely outmatched.",
        prowess: "The Symbol of Evil who can steal, grant, and combine Quirks at will. His centuries of accumulated power and strategic manipulation of hero society from the shadows make him the ultimate villain.",
        credit: "Quirk Thief"
    },
    {
        name: "Doflamingo",
        image: "static/DonQuixote Doflamingo.jpg",
        quote: "Pirates are evil? The Marines are righteous? These terms have always changed throughout the course of history!",
        prowess: "The Heavenly Demon who controls others like puppets through his String-String Fruit. His Celestial Dragon heritage and criminal empire make him a master of both political manipulation and brutal combat.",
        credit: "The Heavenly Demon"
    },
    {
        name: "Blackbeard",
        image: "static/Blackbeard.jpg",
        quote: "Dreams never end!",
        prowess: "Marshall D. Teach, the only man to wield two Devil Fruit powers simultaneously. His Darkness-Darkness Fruit and Tremor-Tremor Fruit combination, paired with his ruthless ambition, makes him the most dangerous pirate alive.",
        credit: "Emperor of Darkness"
    },
    {
        name: "Kenjaku",
        image: "static/Kenjaku.jpg",
        quote: "Humans are so interesting.",
        prowess: "An ancient curse user who body-hops through host vessels across centuries. His vast knowledge of jujutsu and ability to manipulate cursed spirits make him a persistent threat to the modern world.",
        credit: "Body Hopper"
    },
    {
        name: "Black Zetsu",
        image: "static/BlackZetsu.jpg",
        quote: "Everything has gone according to plan.",
        prowess: "Kaguya's will incarnate, manipulating history for millennia. His ability to possess others and orchestrate events from the shadows makes him the ultimate puppet master.",
        credit: "Shadow Manipulator"
    },
    {
        name: "Madara Uchiha",
        image: "static/Uchiha Madara.jpg",
        quote: "Wake up to reality! Nothing ever goes as planned in this world.",
        prowess: "The legendary Uchiha who shaped the ninja world's history. His mastery of all forms of ninjutsu, paired with the Eternal Mangekyo Sharingan and Ten-Tails' power, makes him a force of nature itself.",
        credit: "Uchiha Legend"
    },
    {
        name: "Sukuna",
        image: "static/Sukuna.webp",
        quote: "Any hierarchy other than strength is boring.",
        prowess: "The King of Curses whose mere presence warps reality. His unmatched cursed energy and ancient techniques make him the strongest curse in existence, capable of destroying entire cities with casual gestures.",
        credit: "King of Curses"
    },
    {
        name: "Dio Brando",
        image: "static/Dio.jpg",
        quote: "Mura Mura Mura!",
        prowess: "A vampire with immense strength, regeneration, and the ability to stop time with 'The World.' His cunning intellect and manipulative nature allow him to corrupt and control others, making him a terrifying and persistent threat.",
        credit: "The World Dominator"
    }

];

// Character credits mapping
const characterCredits = {
    "Esdeath": "© Akame ga Kill! / Takahiro",
    "Makima": "© Chainsaw Man / Tatsuki Fujimoto",
    "Sosuke Aizen": "© Bleach / Tite Kubo",
    "Light Yagami": "© Death Note / Tsugumi Ohba",
    "All for One": "© My Hero Academia / Kohei Horikoshi",
    "Doflamingo": "© One Piece / Eiichiro Oda",
    "Blackbeard": "© One Piece / Eiichiro Oda",
    "Kenjaku": "© Jujutsu Kaisen / Gege Akutami",
    "Black Zetsu": "© Naruto / Masashi Kishimoto",
    "Madara Uchiha": "© Naruto / Masashi Kishimoto",
    "Sukuna": "© Jujutsu Kaisen / Gege Akutami",
    "Dio Brando": "© JoJo's Bizarre Adventure / Hirohiko Araki",
    "Celestial Dragons": "© One Piece / Eiichiro Oda",
    "Eren Yeager": "© Attack on Titan / Hajime Isayama",
    "Mahito": "© Jujutsu Kaisen / Gege Akutami",
    "Giovanni": "© Pokémon / Game Freak",
    "Muzan Kibutsuji": "© Demon Slayer / Koyoharu Gotouge",
    "Satella": "© Re:Zero / Tappei Nagatsuki"
};

const honourableMentions = [
    {
        name: "Celestial Dragons",
        image: "static/CelestialDragons.avif",
        quote: "We are gods! How dare you look at us directly!",
        prowess: "The World Nobles who rule through absolute tyranny and privilege. Their systematic oppression and casual cruelty represent the corruption at the heart of the World Government.",
        credit: "World Nobles"
    },
    {
        name: "Eren Yeager",
        image: "static/Eren.jpg",
        quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        prowess: "The Attack Titan who initiated the Rumbling to destroy the world. His ability to see past and future memories, combined with his unwavering will to fight, makes him both humanity's hope and its destroyer.",
        credit: "Attack Titan"
    },
    {
        name: "Mahito",
        image: "static/Mahito.jpg",
        quote: "I am the hatred humans have for each other.",
        prowess: "A cursed spirit born from human hatred who can reshape souls with a touch. His philosophical understanding of human nature combined with his Idle Transfiguration makes him uniquely terrifying.",
        credit: "Soul Manipulator"
    },
    {
        name: "Giovanni",
        image: "static/Giovanni.jpg",
        quote: "I will stand at the top of the world!",
        prowess: "Team Rocket's boss who operates the largest criminal organization in the Pokemon world. His strategic mind and willingness to exploit both Pokemon and humans make him a persistent threat.",
        credit: "Crime Boss"
    },
    {
        name: "Muzan Kibutsuji",
        image: "static/Muzan.jpg",
        quote: "I am perfection. I am the closest thing to an eternal and perfect existence.",
        prowess: "The Demon King who created all demons through his cursed blood. His shape-shifting abilities and thousand-year reign of terror make him the ultimate predator of humanity.",
        credit: "Demon King"
    },
    {
        name: "Satella",
        image: "static/Satella.jpg",
        quote: "I love you.",
        prowess: "The Witch of Envy whose jealousy consumed half the world. Her ability to manipulate shadows and grant Return by Death makes her both a blessing and curse to those she 'loves'.",
        credit: "Witch of Envy"
    }
];

// State variables
let isLoaded = false;
let visibleCards = new Set();
let swords = [];
let particles = [];
let eyes = [];

// Initialize the application
function init() {
    setLoaded();
    generateSwords();
    generateParticles();
    generateEyes();
    renderVillains();

    // Trigger card animations
    setTimeout(() => {
        visibleCards = new Set(Array.from({ length: mainVillains.length + honourableMentions.length }, (_, i) => i));
        showCards();
    }, 800);
}

// Set loaded state
function setLoaded() {
    isLoaded = true;
    document.querySelector('.header-content').classList.add('loaded');
    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('loaded');
    });
}

// Show cards with animation
function showCards() {
    const cards = document.querySelectorAll('.villain-card');
    cards.forEach((card, index) => {
        if (visibleCards.has(index)) {
            setTimeout(() => {
                card.classList.add('loaded');
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Generate falling swords
function generateSwords() {
    const swordContainer = document.getElementById('falling-swords');
    swords = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        rotation: Math.random() * 360,
        size: 1 + Math.random() * 0.5
    }));

    swords.forEach(sword => {
        const swordElement = document.createElement('div');
        swordElement.className = 'falling-sword';
        swordElement.innerHTML = '⚔️';
        swordElement.style.position = 'absolute';
        swordElement.style.left = `${sword.x}%`;
        swordElement.style.top = '-50px';
        swordElement.style.fontSize = `${sword.size * 24}px`;
        swordElement.style.color = '#ef4444';
        swordElement.style.filter = 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))';
        swordElement.style.animation = `fall ${sword.duration}s linear infinite`;
        swordElement.style.animationDelay = `${sword.delay}s`;
        swordElement.style.transform = `rotate(${sword.rotation}deg)`;
        swordElement.style.pointerEvents = 'none';
        swordContainer.appendChild(swordElement);
    });
}

// Generate floating particles
function generateParticles() {
    const particleContainer = document.getElementById('floating-particles');
    particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 20 + Math.random() * 20,
        size: 2 + Math.random() * 4
    }));

    particles.forEach(particle => {
        const particleElement = document.createElement('div');
        particleElement.className = 'particle';
        particleElement.style.left = `${particle.x}%`;
        particleElement.style.top = `${particle.y}%`;
        particleElement.style.width = `${particle.size}px`;
        particleElement.style.height = `${particle.size}px`;
        particleElement.style.animation = `float ${particle.duration}s ease-in-out infinite alternate`;
        particleElement.style.animationDelay = `${particle.delay}s`;
        particleContainer.appendChild(particleElement);
    });
}

// Generate watching eyes
function generateEyes() {
    const eyeContainer = document.getElementById('watching-eyes');
    eyes = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        blinkDelay: Math.random() * 4 + 2
    }));

    eyes.forEach(eye => {
        const eyeElement = document.createElement('div');
        eyeElement.className = 'eye';
        eyeElement.innerHTML = '<i class="fas fa-eye"></i>';
        eyeElement.style.left = `${eye.x}%`;
        eyeElement.style.top = `${eye.y}%`;
        eyeElement.style.animation = `blink 3s infinite`;
        eyeElement.style.animationDelay = `${eye.blinkDelay}s`;
        eyeContainer.appendChild(eyeElement);
    });
}

function createVillainCard(villain, index, isHonourable = false) {
    const card = document.createElement('div');
    card.className = 'villain-card fade-in';
    card.style.transitionDelay = `${index * 100}ms`;
    card.style.animationDelay = `${index * 100}ms`;

    const characterCredit = characterCredits[villain.name] || "© Unknown";

    card.innerHTML = `
        <div class="lightning-effects">
            <i class="fas fa-bolt lightning-tl"></i>
            <i class="fas fa-bolt lightning-br"></i>
        </div>
        <div class="card-content">
            <div class="card-image">
                <img src="${villain.image}" alt="${villain.name}">
                <div class="card-image-credit">${characterCredit}</div>
                <div class="card-icon">
                    <i class="fas fa-${isHonourable ? 'skull' : 'crown'}"></i>
                </div>
            </div>
            <h3 class="card-title">${villain.name}</h3>
            <div class="card-quote">
                <p>${villain.quote}</p>
            </div>
            <p class="card-prowess">${villain.prowess}</p>
            <div class="card-footer">
                <span class="card-credit">${villain.credit}</span>
                <div class="card-divider"></div>
            </div>
        </div>
    `;

    return card;
}


// Render all villains
function renderVillains() {
    const mainContainer = document.getElementById('main-villains');
    const honourableContainer = document.getElementById('honourable-mentions');

    // Render main villains
    mainVillains.forEach((villain, index) => {
        const card = createVillainCard(villain, index);
        mainContainer.appendChild(card);
    });

    // Render honourable mentions
    honourableMentions.forEach((villain, index) => {
        const card = createVillainCard(villain, index + mainVillains.length, true);
        honourableContainer.appendChild(card);
    });
}

// Show cards with animation
function showCards() {
    const cards = document.querySelectorAll('.villain-card');
    cards.forEach((card, index) => {
        if (visibleCards.has(index)) {
            setTimeout(() => {
                card.classList.add('loaded');
            }, index * 100);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add mouse movement effects
document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const rotation = angle * (180 / Math.PI);

        eye.style.transform = `rotate(${rotation}deg)`;
    });
});

// Add particle mouse interaction
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );

        if (distance < 100) {
            particle.style.transform = `scale(${1 + (100 - distance) / 100})`;
            particle.style.opacity = '1';
        } else {
            particle.style.transform = 'scale(1)';
            particle.style.opacity = '0.3';
        }
    });
});