function toggleSignup() {
    const loginContent = document.querySelector('.login_content');
    const signupContent = document.getElementById('signupForm');
    loginContent.classList.toggle('hidden');
    signupContent.classList.toggle('hidden');
  }
  function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  }