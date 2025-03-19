// Cat data with attributes (each attribute is 0-10 scale)
const cats = [
    {
        breed: "Maine Coon",
        size: 8,
        energy: 5,
        shedding: 8,
        vocal: 5,
        friendly: 7,
        independence: 5,
        grooming: 7,
        affection: 7,
        intelligence: 8,
        child_friendly: 8,
        pet_friendly: 7,
        health: 6,
        lifespan: 7,
        adaptability: 6,
        indoor_preference: 6,
        daytime_active: 6,
        cost: 7,
        hunting: 8
    },
    {
        breed: "Persian",
        size: 5,
        energy: 3,
        shedding: 8,
        vocal: 2,
        friendly: 4,
        independence: 8,
        grooming: 10,
        affection: 6,
        intelligence: 5,
        child_friendly: 5,
        pet_friendly: 5,
        health: 4,
        lifespan: 6,
        adaptability: 3,
        indoor_preference: 9,
        daytime_active: 4,
        cost: 8,
        hunting: 2
    },
    {
        breed: "Siamese",
        size: 5,
        energy: 8,
        shedding: 3,
        vocal: 9,
        friendly: 7,
        independence: 3,
        grooming: 3,
        affection: 8,
        intelligence: 9,
        child_friendly: 6,
        pet_friendly: 6,
        health: 7,
        lifespan: 8,
        adaptability: 6,
        indoor_preference: 7,
        daytime_active: 7,
        cost: 6,
        hunting: 7
    },
    {
        breed: "Ragdoll",
        size: 8,
        energy: 3,
        shedding: 5,
        vocal: 2,
        friendly: 9,
        independence: 2,
        grooming: 6,
        affection: 10,
        intelligence: 7,
        child_friendly: 9,
        pet_friendly: 8,
        health: 5,
        lifespan: 6,
        adaptability: 5,
        indoor_preference: 10,
        daytime_active: 5,
        cost: 7,
        hunting: 2
    },
    {
        breed: "Bengal",
        size: 6,
        energy: 9,
        shedding: 3,
        vocal: 6,
        friendly: 7,
        independence: 5,
        grooming: 2,
        affection: 6,
        intelligence: 9,
        child_friendly: 5,
        pet_friendly: 5,
        health: 7,
        lifespan: 7,
        adaptability: 6,
        indoor_preference: 3,
        daytime_active: 8,
        cost: 9,
        hunting: 10
    },
    {
        breed: "Sphynx",
        size: 5,
        energy: 8,
        shedding: 0,
        vocal: 6,
        friendly: 9,
        independence: 3,
        grooming: 7,
        affection: 9,
        intelligence: 8,
        child_friendly: 7,
        pet_friendly: 7,
        health: 6,
        lifespan: 6,
        adaptability: 7,
        indoor_preference: 10,
        daytime_active: 7,
        cost: 9,
        hunting: 5
    },
    {
        breed: "Scottish Fold",
        size: 5,
        energy: 5,
        shedding: 5,
        vocal: 2,
        friendly: 8,
        independence: 5,
        grooming: 4,
        affection: 8,
        intelligence: 7,
        child_friendly: 8,
        pet_friendly: 7,
        health: 4,
        lifespan: 5,
        adaptability: 7,
        indoor_preference: 8,
        daytime_active: 6,
        cost: 7,
        hunting: 5
    },
    {
        breed: "British Shorthair",
        size: 6,
        energy: 3,
        shedding: 5,
        vocal: 2,
        friendly: 4,
        independence: 8,
        grooming: 3,
        affection: 5,
        intelligence: 6,
        child_friendly: 7,
        pet_friendly: 6,
        health: 7,
        lifespan: 7,
        adaptability: 5,
        indoor_preference: 8,
        daytime_active: 5,
        cost: 6,
        hunting: 5
    },
    {
        breed: "Abyssinian",
        size: 5,
        energy: 8,
        shedding: 3,
        vocal: 5,
        friendly: 7,
        independence: 6,
        grooming: 2,
        affection: 6,
        intelligence: 9,
        child_friendly: 6,
        pet_friendly: 6,
        health: 8,
        lifespan: 8,
        adaptability: 8,
        indoor_preference: 5,
        daytime_active: 9,
        cost: 6,
        hunting: 9
    },
    {
        breed: "Russian Blue",
        size: 5,
        energy: 5,
        shedding: 3,
        vocal: 2,
        friendly: 3,
        independence: 7,
        grooming: 3,
        affection: 5,
        intelligence: 7,
        child_friendly: 5,
        pet_friendly: 6,
        health: 9,
        lifespan: 9,
        adaptability: 5,
        indoor_preference: 8,
        daytime_active: 5,
        cost: 5,
        hunting: 7
    },
    {
        breed: "Norwegian Forest Cat",
        size: 9,
        energy: 6,
        shedding: 8,
        vocal: 3,
        friendly: 7,
        independence: 6,
        grooming: 7,
        affection: 6,
        intelligence: 7,
        child_friendly: 7,
        pet_friendly: 7,
        health: 7,
        lifespan: 7,
        adaptability: 7,
        indoor_preference: 5,
        daytime_active: 6,
        cost: 7,
        hunting: 8
    },
    {
        breed: "Domestic Shorthair",
        size: 5,
        energy: 5,
        shedding: 5,
        vocal: 5,
        friendly: 6,
        independence: 5,
        grooming: 3,
        affection: 6,
        intelligence: 6,
        child_friendly: 6,
        pet_friendly: 6,
        health: 8,
        lifespan: 8,
        adaptability: 8,
        indoor_preference: 7,
        daytime_active: 6,
        cost: 2,
        hunting: 6
    },
    {
        breed: "Munchkin",
        size: 3,
        energy: 7,
        shedding: 5,
        vocal: 4,
        friendly: 8,
        independence: 4,
        grooming: 5,
        affection: 8,
        intelligence: 7,
        child_friendly: 7,
        pet_friendly: 7,
        health: 5,
        lifespan: 5,
        adaptability: 6,
        indoor_preference: 9,
        daytime_active: 6,
        cost: 8,
        hunting: 4
    },
    {
        breed: "Devon Rex",
        size: 4,
        energy: 9,
        shedding: 2,
        vocal: 5,
        friendly: 9,
        independence: 3,
        grooming: 2,
        affection: 9,
        intelligence: 8,
        child_friendly: 8,
        pet_friendly: 7,
        health: 6,
        lifespan: 7,
        adaptability: 8,
        indoor_preference: 9,
        daytime_active: 8,
        cost: 8,
        hunting: 6
    },
    {
        breed: "Burmese",
        size: 4,
        energy: 6,
        shedding: 3,
        vocal: 6,
        friendly: 8,
        independence: 3,
        grooming: 2,
        affection: 9,
        intelligence: 8,
        child_friendly: 8,
        pet_friendly: 7,
        health: 7,
        lifespan: 8,
        adaptability: 7,
        indoor_preference: 9,
        daytime_active: 6,
        cost: 7,
        hunting: 6
    },
    {
        breed: "Savannah",
        size: 7,
        energy: 10,
        shedding: 3,
        vocal: 7,
        friendly: 6,
        independence: 6,
        grooming: 2,
        affection: 5,
        intelligence: 10,
        child_friendly: 5,
        pet_friendly: 4,
        health: 7,
        lifespan: 7,
        adaptability: 5,
        indoor_preference: 2,
        daytime_active: 8,
        cost: 10,
        hunting: 10
    },
    {
        breed: "Birman",
        size: 6,
        energy: 4,
        shedding: 6,
        vocal: 3,
        friendly: 8,
        independence: 4,
        grooming: 6,
        affection: 8,
        intelligence: 7,
        child_friendly: 8,
        pet_friendly: 8,
        health: 7,
        lifespan: 7,
        adaptability: 6,
        indoor_preference: 9,
        daytime_active: 5,
        cost: 7,
        hunting: 4
    },
    {
        breed: "Egyptian Mau",
        size: 5,
        energy: 7,
        shedding: 3,
        vocal: 4,
        friendly: 6,
        independence: 6,
        grooming: 3,
        affection: 6,
        intelligence: 8,
        child_friendly: 6,
        pet_friendly: 5,
        health: 8,
        lifespan: 8,
        adaptability: 7,
        indoor_preference: 6,
        daytime_active: 7,
        cost: 8,
        hunting: 9
    },
    {
        breed: "Cornish Rex",
        size: 4,
        energy: 9,
        shedding: 1,
        vocal: 5,
        friendly: 8,
        independence: 3,
        grooming: 2,
        affection: 8,
        intelligence: 8,
        child_friendly: 7,
        pet_friendly: 7,
        health: 6,
        lifespan: 7,
        adaptability: 8,
        indoor_preference: 10,
        daytime_active: 7,
        cost: 7,
        hunting: 7
    },
    {
        breed: "Bombay",
        size: 5,
        energy: 6,
        shedding: 3,
        vocal: 4,
        friendly: 7,
        independence: 5,
        grooming: 2,
        affection: 8,
        intelligence: 7,
        child_friendly: 7,
        pet_friendly: 7,
        health: 7,
        lifespan: 7,
        adaptability: 7,
        indoor_preference: 8,
        daytime_active: 6,
        cost: 6,
        hunting: 6
    },
    {
        breed: "Himalayan",
        size: 6,
        energy: 3,
        shedding: 8,
        vocal: 3,
        friendly: 5,
        independence: 7,
        grooming: 10,
        affection: 7,
        intelligence: 6,
        child_friendly: 5,
        pet_friendly: 6,
        health: 4,
        lifespan: 6,
        adaptability: 4,
        indoor_preference: 10,
        daytime_active: 4,
        cost: 8,
        hunting: 3
    },
    {
        breed: "Exotic Shorthair",
        size: 5,
        energy: 3,
        shedding: 4,
        vocal: 2,
        friendly: 6,
        independence: 6,
        grooming: 5,
        affection: 8,
        intelligence: 6,
        child_friendly: 7,
        pet_friendly: 6,
        health: 5,
        lifespan: 6,
        adaptability: 5,
        indoor_preference: 9,
        daytime_active: 4,
        cost: 7,
        hunting: 3
    },
    {
        breed: "Tonkinese",
        size: 4,
        energy: 7,
        shedding: 2,
        vocal: 7,
        friendly: 8,
        independence: 4,
        grooming: 2,
        affection: 9,
        intelligence: 8,
        child_friendly: 7,
        pet_friendly: 7,
        health: 7,
        lifespan: 7,
        adaptability: 7,
        indoor_preference: 8,
        daytime_active: 7,
        cost: 7,
        hunting: 6
    },
    {
        breed: "American Shorthair",
        size: 5,
        energy: 5,
        shedding: 5,
        vocal: 3,
        friendly: 7,
        independence: 6,
        grooming: 3,
        affection: 6,
        intelligence: 7,
        child_friendly: 8,
        pet_friendly: 7,
        health: 8,
        lifespan: 8,
        adaptability: 8,
        indoor_preference: 7,
        daytime_active: 6,
        cost: 5,
        hunting: 7
    },
    {
        breed: "Turkish Van",
        size: 7,
        energy: 7,
        shedding: 5,
        vocal: 6,
        friendly: 6,
        independence: 7,
        grooming: 4,
        affection: 6,
        intelligence: 7,
        child_friendly: 6,
        pet_friendly: 5,
        health: 8,
        lifespan: 8,
        adaptability: 6,
        indoor_preference: 5,
        daytime_active: 7,
        cost: 7,
        hunting: 8
    }
];

// Questions to ask the user
const questions = [
    { id: "size", question: "How important is having a larger cat?", attribute: "size" },
    { id: "energy", question: "How important is having an energetic, playful cat?", attribute: "energy" },
    { id: "shedding", question: "How concerned are you about shedding? (10 = very concerned)", attribute: "shedding", invert: true },
    { id: "vocal", question: "How important is having a talkative cat?", attribute: "vocal" },
    { id: "friendly", question: "How important is having a cat that's social and friendly with strangers?", attribute: "friendly" },
    { id: "independence", question: "How important is having a cat that's independent and can be left alone?", attribute: "independence" },
    { id: "grooming", question: "How concerned are you about grooming requirements? (10 = very concerned)", attribute: "grooming", invert: true },
    { id: "affection", question: "How important is having an affectionate, cuddly cat?", attribute: "affection" },
    { id: "intelligence", question: "How important is having an intelligent, trainable cat?", attribute: "intelligence" },
    { id: "child_friendly", question: "How important is having a cat that gets along well with children?", attribute: "child_friendly" },
    { id: "pet_friendly", question: "How important is having a cat that gets along with other pets?", attribute: "pet_friendly" },
    { id: "health", question: "How important is having a breed with fewer health issues?", attribute: "health" },
    { id: "lifespan", question: "How important is having a cat with a longer lifespan?", attribute: "lifespan" },
    { id: "adaptability", question: "How important is having a cat that adapts well to changes?", attribute: "adaptability" },
    { id: "indoor_preference", question: "How important is having a cat that prefers to stay indoors?", attribute: "indoor_preference" },
    { id: "daytime_active", question: "How important is having a cat that's active during the day rather than night?", attribute: "daytime_active" },
    { id: "cost", question: "How concerned are you about the cost of ownership? (10 = very concerned)", attribute: "cost", invert: true },
    { id: "hunting", question: "How important is having a cat with strong hunting instincts?", attribute: "hunting" }
];

// DOM elements
const questionElement = document.getElementById('question');
const scaleContainer = document.getElementById('scale-container');
const sliderElement = document.getElementById('importance-slider');
const sliderValue = document.getElementById('slider-value');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');

// State variables
let currentQuestionIndex = 0;
let userPreferences = {}; // Store the user's importance ratings

// Start the questionnaire
function startQuestionnaire() {
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    currentQuestionIndex = 0;
    userPreferences = {};
    displayQuestion();
}

// Display current question
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        // Reset slider to middle value
        sliderElement.value = 5;
        sliderValue.textContent = 5;
    } else {
        findMatch();
    }
}

// Store user's preference and move to next question
function storePreference() {
    const currentQuestion = questions[currentQuestionIndex];
    const importanceValue = parseInt(sliderElement.value);
    userPreferences[currentQuestion.attribute] = importanceValue;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        findMatch();
    }
}

// Calculate cartesian distance between user preferences and cat attributes
function calculateDistance(cat) {
    let distanceSquared = 0;

    for (const attribute in userPreferences) {
        const importance = userPreferences[attribute];

        if (importance > 0) { // Only consider attributes the user cares about
            const normalizedImportance = importance / 10; // Normalize to 0-1

            let attributeScore = cat[attribute];
            // If this is a concern-type question that should be inverted
            if (questions.find(q => q.attribute === attribute)?.invert) {
                attributeScore = 10 - attributeScore; // Invert the scale
            }

            // Calculate weighted difference
            const diff = normalizedImportance * (attributeScore - 10); // Compare to ideal score (10)
            distanceSquared += diff * diff;
        }
    }

    return Math.sqrt(distanceSquared);
}

// Find the best match based on cartesian distance
function findMatch() {
    // Calculate distance for each cat
    const catsWithDistance = cats.map(cat => ({
        ...cat,
        distance: calculateDistance(cat)
    }));

    // Sort by shortest distance (best match first)
    catsWithDistance.sort((a, b) => a.distance - b.distance);

    showResult(catsWithDistance);
}

// Show the result
function showResult(rankedCats) {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // Return the top 3 matches
    const topMatches = rankedCats.slice(0, 3);
    let resultHTML = '<p>Your top matches are:</p><ul class="results-list">';

    topMatches.forEach((cat, index) => {
        const matchPercentage = Math.round((1 - (cat.distance / 10)) * 100);
        resultHTML += `<li><strong>${cat.breed}</strong> - ${matchPercentage}% match</li>`;
    });

    resultHTML += '</ul>';
    resultElement.innerHTML = resultHTML;
}

// Event listeners
sliderElement.addEventListener('input', () => {
    sliderValue.textContent = sliderElement.value;
});

nextBtn.addEventListener('click', storePreference);
restartBtn.addEventListener('click', startQuestionnaire);

// PCA Visualization functions
function calculatePCA(data) {
    // Center the data
    const means = {};
    const attributes = ['size', 'energy', 'shedding', 'vocal', 'friendly', 'independence',
                       'grooming', 'affection', 'intelligence', 'child_friendly', 'pet_friendly',
                       'health', 'lifespan', 'adaptability', 'indoor_preference', 'daytime_active',
                       'cost', 'hunting'];

    // Calculate means for each attribute
    attributes.forEach(attr => {
        means[attr] = data.reduce((sum, cat) => sum + cat[attr], 0) / data.length;
    });

    // Center the data by subtracting means
    const centeredData = data.map(cat => {
        const centered = {};
        attributes.forEach(attr => {
            centered[attr] = cat[attr] - means[attr];
        });
        return centered;
    });

    // Compute covariance matrix (simplified version for demonstration)
    const covMatrix = {};
    attributes.forEach(attr1 => {
        covMatrix[attr1] = {};
        attributes.forEach(attr2 => {
            covMatrix[attr1][attr2] = centeredData.reduce((sum, cat) => {
                return sum + cat[attr1] * cat[attr2];
            }, 0) / (data.length - 1);
        });
    });

    // Use power iteration to find the principal components (simplified approach)
    // This is a very simplified PCA for demonstration purposes
    // In practice, you'd use a proper linear algebra library
    const principalComponents = [];

    // Create three (somewhat) orthogonal components for visualization
    // These are not true eigenvectors, but will work for visualization
    const pc1 = { axis: 'PC1', weights: {} };
    const pc2 = { axis: 'PC2', weights: {} };
    const pc3 = { axis: 'PC3', weights: {} };

    // First component (approximation) - will capture size and related traits
    attributes.forEach(attr => {
        pc1.weights[attr] = covMatrix[attr]['size'] + covMatrix[attr]['energy'];
    });

    // Normalize
    const pc1Magnitude = Math.sqrt(Object.values(pc1.weights).reduce((sum, w) => sum + w * w, 0));
    attributes.forEach(attr => {
        pc1.weights[attr] /= pc1Magnitude;
    });

    // Second component (approximation) - will capture personality traits
    attributes.forEach(attr => {
        pc2.weights[attr] = covMatrix[attr]['friendly'] + covMatrix[attr]['affection'] - covMatrix[attr]['independence'];
    });

    // Make orthogonal to PC1 (Gram-Schmidt)
    const dot12 = attributes.reduce((sum, attr) => sum + pc1.weights[attr] * pc2.weights[attr], 0);
    attributes.forEach(attr => {
        pc2.weights[attr] -= dot12 * pc1.weights[attr];
    });

    // Normalize
    const pc2Magnitude = Math.sqrt(Object.values(pc2.weights).reduce((sum, w) => sum + w * w, 0));
    attributes.forEach(attr => {
        pc2.weights[attr] /= pc2Magnitude;
    });

    // Third component (approximation) - will capture maintenance needs
    attributes.forEach(attr => {
        pc3.weights[attr] = covMatrix[attr]['grooming'] + covMatrix[attr]['shedding'] - covMatrix[attr]['health'];
    });

    // Make orthogonal to PC1 and PC2 (Gram-Schmidt)
    const dot13 = attributes.reduce((sum, attr) => sum + pc1.weights[attr] * pc3.weights[attr], 0);
    const dot23 = attributes.reduce((sum, attr) => sum + pc2.weights[attr] * pc3.weights[attr], 0);
    attributes.forEach(attr => {
        pc3.weights[attr] -= dot13 * pc1.weights[attr] + dot23 * pc2.weights[attr];
    });

    // Normalize
    const pc3Magnitude = Math.sqrt(Object.values(pc3.weights).reduce((sum, w) => sum + w * w, 0));
    attributes.forEach(attr => {
        pc3.weights[attr] /= pc3Magnitude;
    });

    principalComponents.push(pc1, pc2, pc3);

    // Project data onto principal components
    const projectedData = data.map(cat => {
        const projection = {};
        principalComponents.forEach(pc => {
            projection[pc.axis] = attributes.reduce((sum, attr) => {
                return sum + (cat[attr] - means[attr]) * pc.weights[attr];
            }, 0);
        });
        projection.breed = cat.breed;
        return projection;
    });

    return projectedData;
}

function initVisualization() {
    const container = document.getElementById('visualization');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add OrbitControls for interaction
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add smooth damping effect
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.7;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.minDistance = 5;
    controls.maxDistance = 30;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Prepare PCA data
    const pcaData = calculatePCA(cats);

    // Determine scale factors for normalization
    const pc1Values = pcaData.map(d => d.PC1);
    const pc2Values = pcaData.map(d => d.PC2);
    const pc3Values = pcaData.map(d => d.PC3);

    const pc1Range = Math.max(...pc1Values) - Math.min(...pc1Values);
    const pc2Range = Math.max(...pc2Values) - Math.min(...pc2Values);
    const pc3Range = Math.max(...pc3Values) - Math.min(...pc3Values);

    const maxRange = Math.max(pc1Range, pc2Range, pc3Range);
    const scaleFactor = 10 / maxRange;

    // Add points for each cat breed
    const catPoints = [];
    const colors = [
        0xff4c4c, 0x4c4cff, 0x4cff4c, 0xffff4c, 0xff4cff, 0x4cffff,
        0xffaa4c, 0x4cffaa, 0xaa4cff, 0xff4caa, 0xaa4c4c, 0x4c4caa
    ];

    // Add a sphere for each cat breed
    pcaData.forEach((cat, index) => {
        const x = cat.PC1 * scaleFactor;
        const y = cat.PC2 * scaleFactor;
        const z = cat.PC3 * scaleFactor;

        const geometry = new THREE.SphereGeometry(0.15, 16, 16);
        const material = new THREE.MeshPhongMaterial({ color: colors[index % colors.length] });
        const sphere = new THREE.Mesh(geometry, material);
        
        // Store cat breed data for selection
        const originalCat = cats.find(c => c.breed === cat.breed);
        sphere.userData = originalCat;
        
        sphere.position.set(x, y, z);
        scene.add(sphere);

        // Add label (breed name) as sprite
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 64;
        context.font = '24px Arial';
        context.fillStyle = 'white';
        context.fillText(cat.breed, 0, 24);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(x, y + 0.1, z);
        sprite.scale.set(3, 0.75, 1);
        scene.add(sprite);

        catPoints.push({ sphere, sprite, breed: cat.breed, x, y, z });
    });

    // Add coordinate system
    const axisLength = 11;

    // X-axis
    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-axisLength, 0, 0),
        new THREE.Vector3(axisLength, 0, 0)
    ]);
    const xAxisMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
    scene.add(xAxis);

    // Y-axis
    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -axisLength, 0),
        new THREE.Vector3(0, axisLength, 0)
    ]);
    const yAxisMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
    scene.add(yAxis);

    // Z-axis
    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
    ]);
    const zAxisMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
    const zAxis = new THREE.Line(zAxisGeometry, zAxisMaterial);
    scene.add(zAxis);

    // Very slow auto-rotation (can be overridden by user interaction)
    let autoRotate = true;
    const autoRotateSpeed = 0.0005; // Much slower rotation

    // Rotate the scene slowly for effect
    const animate = () => {
        requestAnimationFrame(animate);

        // Apply very slow auto-rotation when not being controlled by user
        if (autoRotate) {
            scene.rotation.y += autoRotateSpeed;
        }

        // Update controls
        controls.update();

        // Ensure labels face the camera
        catPoints.forEach(point => {
            point.sprite.quaternion.copy(camera.quaternion);
        });

        renderer.render(scene, camera);
    };

    // Stop auto-rotation when user interacts
    controls.addEventListener('start', () => {
        autoRotate = false;
    });

    // Option to resume auto-rotation
    // Uncomment this to allow auto-rotation to resume after a delay
    // controls.addEventListener('end', () => {
    //     setTimeout(() => { autoRotate = true; }, 5000);
    // });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
    });

    animate();
}

// UI Toggle functionality
function setupUIToggle() {
    const overlayContainer = document.querySelector('.overlay-container');
    const toggleButton = document.getElementById('toggle-ui');

    toggleButton.addEventListener('click', () => {
        overlayContainer.classList.toggle('hidden');
        toggleButton.classList.toggle('hidden');
        toggleButton.textContent = overlayContainer.classList.contains('hidden') ? 'Show Questionnaire' : 'Hide Questionnaire';
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    startQuestionnaire();
    initVisualization();
    setupUIToggle();
});
