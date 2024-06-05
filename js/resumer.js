document.getElementById('englishButton').addEventListener('click', function() {
  document.getElementById('resume').src = '../assets/images/resumer-eng.jpg';
  document.getElementById('downloadLink').href = '../assets/images/resumer-eng.jpg';
  this.classList.add('active');
  document.getElementById('chineseButton').classList.remove('active');
});

document.getElementById('chineseButton').addEventListener('click', function() {
  console.log('chinese button clicked');
  document.getElementById('resume').src = '../assets/images/resumer-cz.jpg';
  document.getElementById('downloadLink').href = '../assets/images/resumer-cz.jpg';
  this.classList.add('active');
  document.getElementById('englishButton').classList.remove('active');
});