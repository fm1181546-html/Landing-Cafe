document.addEventListener('DOMContentLoaded', function () {
            lucide.createIcons();
            const navbar = document.getElementById('navbar');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) navbar.classList.add('navbar-scrolled');
                else navbar.classList.remove('navbar-scrolled');
            });
            mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
            
            const timeDisplay = document.getElementById('time-display');
            const dateDisplay = document.getElementById('date-display');
            const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            function updateTime() {
                const now = new Date();
                const day = days[now.getDay()];
                const date = now.getDate();
                const month = months[now.getMonth()];
                const year = now.getFullYear();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                if (timeDisplay) timeDisplay.textContent = `${hours}:${minutes}:${seconds} WIB`;
                if (dateDisplay) dateDisplay.textContent = `${day}, ${date} ${month} ${year}`;
            }
            setInterval(updateTime, 1000);
            updateTime();

            const filterContainer = document.querySelector('#menu-filters');
            const menuItems = document.querySelectorAll('#menu-grid .menu-item');
            if(filterContainer) {
                filterContainer.addEventListener('click', (event) => {
                    if(event.target.tagName !== 'BUTTON') return;
                    filterContainer.querySelector('.active').classList.remove('active');
                    event.target.classList.add('active');
                    const filter = event.target.dataset.filter;
                    menuItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            }
        });