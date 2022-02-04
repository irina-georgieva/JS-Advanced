function attachGradientEvents() {
    let gradienElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseOverHandler = (e) => {
        let percent = Math.trunc((e.offsetX / e.target.clientWidth) * 100);

        resultElement.textContent = `${percent}%`;
    };

    gradienElement.addEventListener('mousemove', gradientMouseOverHandler)
}