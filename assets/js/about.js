 const faces = document.querySelectorAll('.face');
    const panels = document.querySelectorAll('.content-panel');
    const closeBtns = document.querySelectorAll('.close-btn');
    const cube = document.getElementById('cube');

    faces.forEach(face => {
      face.addEventListener('click', () => {
        const panelId = face.getAttribute('data-panel');
        cube.classList.add('paused');
        panels.forEach(panel => panel.classList.remove('active'));
        document.getElementById(panelId).classList.add('active');

        const content = document.getElementById(panelId).innerText;
        const utterance = new SpeechSynthesisUtterance(content);
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.target.parentElement.classList.remove('active');
        cube.classList.remove('paused');
        speechSynthesis.cancel();
      });
    });