// script.js

// User Profile Creation
function createUserProfile(name, age, weight, height, goal) {
    return { name, age, weight, height, goal };
}

function saveUserProfile(profile) {
    localStorage.setItem('userProfile', JSON.stringify(profile));
}

function loadUserProfile() {
    const stored = localStorage.getItem('userProfile');
    return stored ? JSON.parse(stored) : null;
}

function populateProfileForm(profile) {
    if (!profile) return;
    document.getElementById('profile-name').value = profile.name || '';
    document.getElementById('profile-age').value = profile.age || '';
    document.getElementById('profile-weight').value = profile.weight || '';
    document.getElementById('profile-height').value = profile.height || '';
    document.getElementById('profile-goal').value = profile.goal || '';
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('profile-form');
    const message = document.getElementById('profile-message');

    // Load existing profile if available
    populateProfileForm(loadUserProfile());

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('profile-name').value.trim();
            const age = parseInt(document.getElementById('profile-age').value, 10);
            const weight = parseFloat(document.getElementById('profile-weight').value);
            const height = parseFloat(document.getElementById('profile-height').value);
            const goal = document.getElementById('profile-goal').value;

            if (!name || isNaN(age) || age <= 0 || isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0 || !goal) {
                message.textContent = 'Please fill in all fields with valid values.';
                message.className = 'profile-message error';
                return;
            }

            const profile = createUserProfile(name, age, weight, height, goal);
            saveUserProfile(profile);

            message.textContent = 'Profile saved successfully!';
            message.className = 'profile-message success';
        });
    }
});

// Functionality for workout plan generation
function generateWorkoutPlan(userPreferences) {
    // Implementation here
}

// Functionality for trainer booking
function bookTrainer(trainerId, userId) {
    // Implementation here
}

// Functionality for progress tracking
function trackProgress(userId) {
    // Implementation here
}

// Functionality for subscription management
function manageSubscription(userId, action) {
    // Implementation here
}
