// calc-res-page.js

const resultValue = parseInt(document.querySelector('.result').textContent);

const resSection = document.querySelector('.res-section');

if (resultValue === 1) {
    resSection.style.backgroundColor = 'rgba(255, 178, 178, 0.5)';
} 
else if (resultValue === 2) {
    resSection.style.backgroundColor = 'rgba(255, 210, 178, 0.5)';
}
else if (resultValue === 3) {
    resSection.style.backgroundColor = 'rgba(255, 243, 178, 0.5)';
}
else if (resultValue === 4) {
    resSection.style.backgroundColor = 'rgba(204, 242, 180, 0.5)';
}
else if (resultValue === 5) {
    resSection.style.backgroundColor = 'rgba(184, 241, 214, 0.5)';
}
else if (resultValue === 6) {
    resSection.style.backgroundColor = 'rgba(178, 236, 255, 0.5)';
}
else if (resultValue === 7) {
    resSection.style.backgroundColor = 'rgba(178, 204, 255, 0.5)';
}
else if (resultValue === 8) {
    resSection.style.backgroundColor = 'rgba(217, 203, 255, 0.5)';
}
else if (resultValue === 9) {
    resSection.style.backgroundColor = 'rgba(240, 199, 255, 0.5)';
}
else if (resultValue === 10) {
    resSection.style.backgroundColor = 'rgba(255, 200, 236, 0.5)';
}
else{
    resSection.style.backgroundColor = '#B2EDFF';
}
