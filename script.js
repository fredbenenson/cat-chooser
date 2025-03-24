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

// Calculate cartesian distance between user preferences and dog attributes
function calculateDistance(dog) {
    let distanceSquared = 0;

    for (const attribute in userPreferences) {
        const importance = userPreferences[attribute];

        if (importance > 0) { // Only consider attributes the user cares about
            const normalizedImportance = importance / 10; // Normalize to 0-1

            let attributeScore = dog[attribute];
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
    // Calculate distance for each dog
    const dogsWithDistance = dogs.map(dog => ({
        ...dog,
        distance: calculateDistance(dog)
    }));

    // Sort by shortest distance (best match first)
    dogsWithDistance.sort((a, b) => a.distance - b.distance);

    // Visualize the user's ideal point in 3D space
    visualizeUserPreferences();

    showResult(dogsWithDistance);
}

// Show the result
function showResult(rankedDogs) {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // Return the top 3 matches
    const topMatches = rankedDogs.slice(0, 3);
    let resultHTML = '<p>Your top matches are:</p><ul class="results-list">';

    topMatches.forEach((dog, index) => {
        const matchPercentage = Math.round((1 - (dog.distance / 10)) * 100);
        resultHTML += `<li><strong>${dog.breed}</strong> - ${matchPercentage}% match</li>`;
    });

    resultHTML += '</ul>';
    resultHTML += '<p>Your ideal dog is now shown as a red sphere in the 3D visualization.</p>';
    resultHTML += '<p>Explore the space to see which dogs are closest to your preferences!</p>';
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
        means[attr] = data.reduce((sum, dog) => sum + dog[attr], 0) / data.length;
    });

    // Center the data by subtracting means
    const centeredData = data.map(dog => {
        const centered = {};
        attributes.forEach(attr => {
            centered[attr] = dog[attr] - means[attr];
        });
        return centered;
    });

    // Compute covariance matrix (simplified version for demonstration)
    const covMatrix = {};
    attributes.forEach(attr1 => {
        covMatrix[attr1] = {};
        attributes.forEach(attr2 => {
            covMatrix[attr1][attr2] = centeredData.reduce((sum, dog) => {
                return sum + dog[attr1] * dog[attr2];
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
    const projectedData = data.map(dog => {
        const projection = {};
        principalComponents.forEach(pc => {
            projection[pc.axis] = attributes.reduce((sum, attr) => {
                return sum + (dog[attr] - means[attr]) * pc.weights[attr];
            }, 0);
        });
        projection.breed = dog.breed;
        return projection;
    });

    return {
        projectedData, 
        means, 
        principalComponents,
        attributes
    };
}

// Define scene, camera, and other global variables for visualization
let scene, camera, renderer, controls, pcaResult, scaleFactor;
let userIdealSphere; // Reference to user's ideal point sphere

function initVisualization() {
    const container = document.getElementById('visualization');
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create scene, camera, and renderer
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add OrbitControls for interaction
    controls = new THREE.OrbitControls(camera, renderer.domElement);
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
    pcaResult = calculatePCA(dogs);
    const { projectedData } = pcaResult;

    // Determine scale factors for normalization
    const pc1Values = projectedData.map(d => d.PC1);
    const pc2Values = projectedData.map(d => d.PC2);
    const pc3Values = projectedData.map(d => d.PC3);

    const pc1Range = Math.max(...pc1Values) - Math.min(...pc1Values);
    const pc2Range = Math.max(...pc2Values) - Math.min(...pc2Values);
    const pc3Range = Math.max(...pc3Values) - Math.min(...pc3Values);

    const maxRange = Math.max(pc1Range, pc2Range, pc3Range);
    scaleFactor = 10 / maxRange;

    // Add points for each dog breed
    const dogPoints = [];
    const colors = [
        0x9e7bb5, 0x8cb9d3, 0xb8d8be, 0xf2d5a9, 0xeaafd1, 0xa5c9c9,
        0xd2c1a5, 0xb5c7b5, 0xc3b5d3, 0xd3a5ad, 0xc9b199, 0x9da5c9
    ];

    // Add a sphere for each dog breed
    projectedData.forEach((dog, index) => {
        const x = dog.PC1 * scaleFactor;
        const y = dog.PC2 * scaleFactor;
        const z = dog.PC3 * scaleFactor;

        const geometry = new THREE.SphereGeometry(0.15, 16, 16);
        const material = new THREE.MeshPhongMaterial({ color: colors[index % colors.length] });
        const sphere = new THREE.Mesh(geometry, material);

        // Store dog breed data for selection
        const originalDog = dogs.find(c => c.breed === dog.breed);
        sphere.userData = originalDog;

        sphere.position.set(x, y, z);
        scene.add(sphere);

        // Add label (breed name) as sprite
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 128;
        context.scale(2, 2); // Scale for higher resolution
        context.font = 'bold 24px "EB Garamond", Garamond, serif';
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillStyle = '#333';
        // Apply text stroke for better readability
        context.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        context.lineWidth = 3;
        context.strokeText(dog.breed, 128, 32);
        context.fillText(dog.breed, 128, 32);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture,
            sizeAttenuation: true
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(x, y + 0.3, z);
        sprite.scale.set(2, 0.5, 1);
        scene.add(sprite);

        dogPoints.push({ sphere, sprite, breed: dog.breed, x, y, z });
    });

    // Add coordinate system
    const axisLength = 11;

    // X-axis
    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-axisLength, 0, 0),
        new THREE.Vector3(axisLength, 0, 0)
    ]);
    const xAxisMaterial = new THREE.LineBasicMaterial({ color: 0xd9b3ff, transparent: true, opacity: 0.5 });
    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
    scene.add(xAxis);

    // Y-axis
    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -axisLength, 0),
        new THREE.Vector3(0, axisLength, 0)
    ]);
    const yAxisMaterial = new THREE.LineBasicMaterial({ color: 0xb3d9ff, transparent: true, opacity: 0.5 });
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
    scene.add(yAxis);

    // Z-axis
    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -axisLength),
        new THREE.Vector3(0, 0, axisLength)
    ]);
    const zAxisMaterial = new THREE.LineBasicMaterial({ color: 0xffccb3, transparent: true, opacity: 0.5 });
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
        dogPoints.forEach(point => {
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

    // Function to update breed information panel
    async function showBreedInfo(dog) {
        const breedStatsElement = document.getElementById('breed-stats');

        let html = `
            <h3>${dog.breed}</h3>
            <div class="image-loading">Loading image...</div>
            <p class="breed-description">${breedDescriptions[dog.breed] || "No description available."}</p>
            <div class="stat-grid">
        `;

        // Add stats with visual bars
        const attributes = [
            { name: 'Size', value: dog.size },
            { name: 'Energy', value: dog.energy },
            { name: 'Shedding', value: dog.shedding },
            { name: 'Vocal', value: dog.vocal },
            { name: 'Friendly', value: dog.friendly },
            { name: 'Independence', value: dog.independence },
            { name: 'Grooming Needs', value: dog.grooming },
            { name: 'Affection', value: dog.affection },
            { name: 'Intelligence', value: dog.intelligence },
            { name: 'Child Friendly', value: dog.child_friendly },
            { name: 'Pet Friendly', value: dog.pet_friendly },
            { name: 'Health', value: dog.health },
            { name: 'Lifespan', value: dog.lifespan },
            { name: 'Adaptability', value: dog.adaptability },
            { name: 'Indoor Preference', value: dog.indoor_preference },
            { name: 'Daytime Activity', value: dog.daytime_active },
            { name: 'Cost', value: dog.cost },
            { name: 'Hunting Instinct', value: dog.hunting }
        ];

        attributes.forEach(attr => {
            html += `
                <div class="stat-item">
                    <span class="stat-label">${attr.name}:</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar" style="width: ${attr.value * 10}%"></div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        breedStatsElement.innerHTML = html;

        // Fetch dog image from The Dog API
        try {
            // Get the Dog API breed ID
            const breedPath = dogApiBreedMap[dog.breed];

            if (breedPath) {
                // Make the API request
                const imageUrl = `https://dog.ceo/api/breed/${breedPath}/images/random`;
                try {
                    const response = await fetch(imageUrl);
                    const data = await response.json();

                    if (data.status === "success" && data.message) {
                        // Create an image element to preload the image
                        const img = new Image();
                        img.onload = function() {
                            // Once loaded, update the HTML to replace the loading message with the actual image
                            const imageContainer = breedStatsElement.querySelector('.image-loading');
                            if (imageContainer) {
                                imageContainer.outerHTML = `<div class="breed-image"><img src="${data.message}" alt="${dog.breed} dog"></div>`;
                            }
                        };
                        img.src = data.message;
                    } else {
                        // If no image found, show an error message
                        const imageContainer = breedStatsElement.querySelector('.image-loading');
                        if (imageContainer) {
                            imageContainer.innerHTML = "No image available";
                        }
                    }
                } catch (error) {
                    console.error('Error fetching dog image:', error);
                    // Update the loading message to show the error
                    const imageContainer = breedStatsElement.querySelector('.image-loading');
                    if (imageContainer) {
                        imageContainer.innerHTML = "Error loading image";
                    }
                }
            } else {
                // If no breed mapping, show an error message
                const imageContainer = breedStatsElement.querySelector('.image-loading');
                if (imageContainer) {
                    imageContainer.innerHTML = "No breed mapping available";
                }
            }
        } catch (error) {
            console.error('Error in showBreedInfo:', error);
            // Update the loading message to show the error
            const imageContainer = breedStatsElement.querySelector('.image-loading');
            if (imageContainer) {
                imageContainer.innerHTML = "Error loading image";
            }
        }
    }

    // Add click event to select dogs
    container.addEventListener('click', (event) => {
        // Calculate mouse position in normalized device coordinates (-1 to +1)
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children, true);

        // Find first intersected sphere that has dog data
        for (let i = 0; i < intersects.length; i++) {
            const object = intersects[i].object;
            if (object.type === 'Mesh' && object.userData.breed) {
                // Highlight selected dog
                object.material.emissive.set(0x555555);
                setTimeout(() => {
                    object.material.emissive.set(0x000000);
                }, 300);

                // Show the dog info
                showBreedInfo(object.userData);

                // If overlay is hidden, show it
                const overlayContainer = document.querySelector('.overlay-container');
                const toggleButton = document.getElementById('toggle-ui');
                if (overlayContainer.classList.contains('hidden')) {
                    overlayContainer.classList.remove('hidden');
                    toggleButton.classList.remove('hidden');
                    toggleButton.textContent = 'Hide Questionnaire';
                }

                break;
            }
        }
    });

    animate();
}

// Function to visualize user preferences in the 3D space
function visualizeUserPreferences() {
    if (!scene) return; // Ensure visualization is initialized

    // Remove existing user ideal point if it exists
    if (userIdealSphere) {
        scene.remove(userIdealSphere);
        // Also remove any connecting lines or labels if they exist
        // (implementation would go here)
    }

    const { means, principalComponents, attributes } = pcaResult;

    // Create a synthetic "ideal dog" based on user preferences
    const idealDog = {};
    
    // For each attribute, use either the user's preference or the average value
    attributes.forEach(attr => {
        if (attr in userPreferences && userPreferences[attr] > 0) {
            // If the user cares about this attribute (importance > 0)
            // Use a high value (10) for positive attributes, and a low value (0) for invert attributes
            const isInverted = questions.find(q => q.attribute === attr)?.invert;
            idealDog[attr] = isInverted ? 0 : 10;
        } else {
            // Use the average value for attributes the user doesn't care about
            idealDog[attr] = means[attr];
        }
    });

    // Project the ideal dog onto PCA space
    const projectedIdeal = {};
    principalComponents.forEach(pc => {
        projectedIdeal[pc.axis] = attributes.reduce((sum, attr) => {
            return sum + (idealDog[attr] - means[attr]) * pc.weights[attr];
        }, 0);
    });

    // Scale the coordinates
    const x = projectedIdeal.PC1 * scaleFactor;
    const y = projectedIdeal.PC2 * scaleFactor;
    const z = projectedIdeal.PC3 * scaleFactor;

    // Create a sphere for the ideal point
    const geometry = new THREE.SphereGeometry(0.3, 32, 32);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0xff5555,
        emissive: 0x331111,
        shininess: 80
    });
    userIdealSphere = new THREE.Mesh(geometry, material);
    userIdealSphere.position.set(x, y, z);
    scene.add(userIdealSphere);

    // Add a pulsing effect to make it stand out
    const pulseAnimation = () => {
        if (!userIdealSphere) return;
        
        const time = Date.now() * 0.001; // Convert to seconds
        const scale = 1 + 0.1 * Math.sin(time * 3); // Oscillate between 0.9 and 1.1
        
        userIdealSphere.scale.set(scale, scale, scale);
        requestAnimationFrame(pulseAnimation);
    };
    pulseAnimation();

    // Add "Your Ideal Dog" label
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 128;
    context.scale(2, 2); // Scale for higher resolution
    context.font = 'bold 20px "EB Garamond", Garamond, serif';
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillStyle = '#ff3333';
    // Apply text stroke for better readability
    context.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    context.lineWidth = 3;
    context.strokeText('★ Your Ideal Dog ★', 128, 32);
    context.fillText('★ Your Ideal Dog ★', 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        sizeAttenuation: true
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(x, y + 0.5, z);
    sprite.scale.set(2.5, 0.6, 1);
    sprite.userData = { isIdealLabel: true };
    scene.add(sprite);

    // Make sure the label always faces the camera
    const updateSpriteRotation = () => {
        if (sprite) {
            sprite.quaternion.copy(camera.quaternion);
            requestAnimationFrame(updateSpriteRotation);
        }
    };
    updateSpriteRotation();
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