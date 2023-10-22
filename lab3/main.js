document.querySelector('#bt1').classList.add('right')
document.querySelector('#bt2').classList.add('nothing')
document.querySelector('.bt').addEventListener('click', () => {
    document.querySelector('.aboutme').classList.add('open');
    document.querySelector('.labs').classList.replace('labs', 'showlabs');
    document.querySelector('#bt1').classList.replace('right', 'nothing');
    document.querySelector('#bt2').classList.replace('nothing', 'left');
})
document.querySelector('#bt2').addEventListener('click', () => {
    document.querySelector('.aboutme').classList.remove('open');
    document.querySelector('.showlabs').classList.replace('showlabs', 'labs');
    document.querySelector('#bt2').classList.replace('left', 'nothing');
    document.querySelector('#bt1').classList.replace('nothing','right');
})