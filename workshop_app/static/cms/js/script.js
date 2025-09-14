document.addEventListener('DOMContentLoaded', function() {
    console.log('FOSSEE Workshop App - Modern UI Loaded');
    
    // Password visibility toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('svg');
            
            if (input.type === 'password') {
                input.type = 'text';
                // Change icon to eye-slash
                icon.innerHTML = `
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2"/>
                    <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2"/>
                `;
            } else {
                input.type = 'password';
                // Change icon to eye
                icon.innerHTML = `
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                `;
            }
        });
    });
    
    // Form validation
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const username = document.getElementById('id_username');
            const password = document.getElementById('id_password');
            
            let isValid = true;
            
            // Clear previous validation states
            username.style.borderColor = '';
            password.style.borderColor = '';
            
            // Validate username
            if (!username.value.trim()) {
                username.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            // Validate password
            if (!password.value.trim()) {
                password.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                // Add shake animation to form
                loginForm.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginForm.style.animation = '';
                }, 500);
            }
        });
    }
    
    // Add shake animation for errors
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Focus first input on load
    const firstInput = document.querySelector('input[type="text"]');
    if (firstInput) {
        firstInput.focus();
    }
});