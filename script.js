document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // IntersectionObserverでセクションを監視
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    // 各セクションを監視対象に追加
    sections.forEach((section) => {
        observer.observe(section);
    });
});