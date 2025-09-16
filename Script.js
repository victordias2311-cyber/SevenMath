function switchTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function toggleTheory(subject) {
    const theoryElement = document.getElementById(subject + '-theory');
    theoryElement.classList.toggle('hidden');
}

function checkAnswer(element, isCorrect) {
    // Remove previous answer styling
    const options = element.parentNode.querySelectorAll('.option');
    options.forEach(option => {
        option.style.background = 'white';
        option.style.color = '#333';
        option.style.borderColor = '#e9ecef';
    });

    // Style the selected answer
    if (isCorrect) {
        element.style.background = '#4CAF50';
        element.style.color = 'white';
        element.style.borderColor = '#4CAF50';
        
        // Show success message
        setTimeout(() => {
            alert('Parabéns! Resposta correta! 🎉');
        }, 100);
    } else {
        element.style.background = '#f44336';
        element.style.color = 'white';
        element.style.borderColor = '#f44336';
        
        // Show try again message
        setTimeout(() => {
            alert('Ops! Tente novamente. 🤔');
        }, 100);
    }
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.subject-card, .activity-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Scroll to top when switching tabs for better mobile experience
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        });
    });
});

