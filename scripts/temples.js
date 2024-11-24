function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function getCurrentDate() { const today = new Date(); const options = { year: 'numeric', month: 'long', day: 'numeric' }; return today.toLocaleDateString('en-US', options); } document.getElementById('date').innerText = getCurrentDate();
