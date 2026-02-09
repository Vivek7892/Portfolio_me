// Admin credentials (In production, use proper backend authentication)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'vivek@2024'
};

// Check if user is logged in
let isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';

// DOM Elements
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

// Initialize
if (isLoggedIn) {
    showDashboard();
} else {
    showLogin();
}

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('adminLoggedIn', 'true');
        showNotification('Login successful!', 'success');
        showDashboard();
    } else {
        showNotification('Invalid credentials!', 'error');
    }
});

// Logout Handler
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('adminLoggedIn');
    showNotification('Logged out successfully!', 'success');
    showLogin();
});

function showLogin() {
    loginSection.style.display = 'flex';
    dashboardSection.style.display = 'none';
    logoutBtn.style.display = 'none';
}

function showDashboard() {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    logoutBtn.style.display = 'block';
    loadData();
}

// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    });
});

// Profile Form Handler
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const profileData = {
        fullName: document.getElementById('fullName').value,
        title: document.getElementById('title').value,
        email: document.getElementById('email').value,
        github: document.getElementById('github').value,
        linkedin: document.getElementById('linkedin').value,
        about: document.getElementById('about').value,
        profileImage: localStorage.getItem('profileImageData') || ''
    };
    
    localStorage.setItem('portfolioProfile', JSON.stringify(profileData));
    showNotification('Profile updated successfully!', 'success');
    
    // Update main portfolio page
    updatePortfolioPage(profileData);
});

// Profile Image Upload Handler
const profileImageFile = document.getElementById('profileImageFile');
const imagePreview = document.getElementById('imagePreview');

profileImageFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        const imageData = event.target.result;
        localStorage.setItem('profileImageData', imageData);
        
        imagePreview.innerHTML = `
            <img src="${imageData}" alt="Profile Preview" 
                 style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #667eea;">
        `;
        
        showNotification('Image uploaded! Click Save Changes to apply.', 'success');
    };
    reader.readAsDataURL(file);
});

// Resume Upload Handler
const resumeFile = document.getElementById('resumeFile');
const resumePreview = document.getElementById('resumePreview');
const resumeForm = document.getElementById('resumeForm');

if (resumeFile && resumePreview) {
    resumeFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        if (file.type !== 'application/pdf') {
            showNotification('Please upload a PDF file', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (event) => {
            const resumeData = event.target.result;
            localStorage.setItem('resumeData', resumeData);
            localStorage.setItem('resumeFileName', file.name);
            
            resumePreview.innerHTML = `
                <div style="padding: 1rem; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <i class="fas fa-file-pdf" style="font-size: 2rem; color: #d32f2f;"></i>
                    <div>
                        <strong>${file.name}</strong><br>
                        <small>${(file.size / 1024).toFixed(2)} KB</small>
                    </div>
                </div>
            `;
            
            showNotification('Resume uploaded! Click Save Resume to apply.', 'success');
        };
        reader.readAsDataURL(file);
    });
}

if (resumeForm) {
    resumeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const resumeData = localStorage.getItem('resumeData');
        if (!resumeData) {
            showNotification('Please upload a resume first', 'error');
            return;
        }
        
        showNotification('Resume saved successfully!', 'success');
    });
}

// Load existing data
function loadData() {
    const savedProfile = localStorage.getItem('portfolioProfile');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        document.getElementById('fullName').value = profile.fullName || 'Vivek V';
        document.getElementById('title').value = profile.title || 'AI & Full Stack Developer';
        document.getElementById('email').value = profile.email || 'vivekvvivekv70@gmail.com';
        document.getElementById('github').value = profile.github || 'https://github.com/Vivek7892';
        document.getElementById('linkedin').value = profile.linkedin || 'https://linkedin.com/in/vivek-v-a0a41225a';
        document.getElementById('about').value = profile.about || '';
        
        // Load profile image preview
        const imageData = localStorage.getItem('profileImageData');
        if (imageData) {
            imagePreview.innerHTML = `
                <img src="${imageData}" alt="Profile Preview" 
                     style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #667eea;">
            `;
        }
        
        // Load resume preview
        const resumeFileName = localStorage.getItem('resumeFileName');
        if (resumeFileName && resumePreview) {
            resumePreview.innerHTML = `
                <div style="padding: 1rem; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <i class="fas fa-file-pdf" style="font-size: 2rem; color: #d32f2f;"></i>
                    <div>
                        <strong>${resumeFileName}</strong><br>
                        <small>Uploaded</small>
                    </div>
                </div>
            `;
        }
    }
    
    loadProjects();
    loadSkills();
    loadEducation();
}

// Projects Management
function loadProjects() {
    const projectsList = document.getElementById('projectsList');
    const projects = JSON.parse(localStorage.getItem('portfolioProjects') || '[]');
    
    if (projects.length === 0) {
        projectsList.innerHTML = '<p>No projects added yet.</p>';
        return;
    }
    
    projectsList.innerHTML = projects.map((project, index) => `
        <div class="item-card">
            <div>
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 100)}...</p>
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editProject(${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-delete" onclick="deleteProject(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Skills Management
function loadSkills() {
    const skillsList = document.getElementById('skillsList');
    const skills = JSON.parse(localStorage.getItem('portfolioSkills') || '[]');
    
    if (skills.length === 0) {
        skillsList.innerHTML = '<p>No skills added yet.</p>';
        return;
    }
    
    skillsList.innerHTML = skills.map((skill, index) => `
        <div class="item-card">
            <div>
                <h3>${skill.category}</h3>
                <p>${skill.tags.join(', ')}</p>
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editSkill(${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-delete" onclick="deleteSkill(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Education Management
function loadEducation() {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = `
        <div class="item-card">
            <div>
                <h3>B.E. in Computer Science (Data Science)</h3>
                <p>ATME College of Engineering, Mysuru - CGPA: 8.27</p>
            </div>
        </div>
        <div class="item-card">
            <div>
                <h3>Pre-University (PUC)</h3>
                <p>JSS PU College, SJCE Campus, Mysuru - 91.17%</p>
            </div>
        </div>
        <div class="item-card">
            <div>
                <h3>SSLC</h3>
                <p>Sri Kalabhayaveshwara High School, Kanakapura - 94.72%</p>
            </div>
        </div>
    `;
}

// Update Portfolio Page
function updatePortfolioPage(profileData) {
    // Store data to be used by main portfolio
    const updateScript = `
        // This data will be loaded by the main portfolio page
        const portfolioData = ${JSON.stringify(profileData)};
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    `;
    console.log('Portfolio data saved:', profileData);
}

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add Project Button
document.getElementById('addProjectBtn').addEventListener('click', () => {
    const title = prompt('Enter project title:');
    if (!title) return;
    
    const description = prompt('Enter project description:');
    const github = prompt('Enter GitHub URL:');
    
    const projects = JSON.parse(localStorage.getItem('portfolioProjects') || '[]');
    projects.push({ title, description, github });
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
    
    showNotification('Project added successfully!', 'success');
    loadProjects();
});

// Add Skill Button
document.getElementById('addSkillBtn').addEventListener('click', () => {
    const category = prompt('Enter skill category:');
    if (!category) return;
    
    const tags = prompt('Enter skills (comma-separated):');
    
    const skills = JSON.parse(localStorage.getItem('portfolioSkills') || '[]');
    skills.push({ category, tags: tags.split(',').map(t => t.trim()) });
    localStorage.setItem('portfolioSkills', JSON.stringify(skills));
    
    showNotification('Skill added successfully!', 'success');
    loadSkills();
});

// Delete Functions
function deleteProject(index) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    const projects = JSON.parse(localStorage.getItem('portfolioProjects') || '[]');
    projects.splice(index, 1);
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
    
    showNotification('Project deleted successfully!', 'success');
    loadProjects();
}

function deleteSkill(index) {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    
    const skills = JSON.parse(localStorage.getItem('portfolioSkills') || '[]');
    skills.splice(index, 1);
    localStorage.setItem('portfolioSkills', JSON.stringify(skills));
    
    showNotification('Skill deleted successfully!', 'success');
    loadSkills();
}

// Edit Functions (simplified)
function editProject(index) {
    showNotification('Edit functionality - Update the project details', 'success');
}

function editSkill(index) {
    showNotification('Edit functionality - Update the skill details', 'success');
}

console.log('%c🔐 Admin Panel Loaded', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cDefault Login - Username: admin | Password: vivek@2024', 'color: #764ba2; font-size: 12px;');
