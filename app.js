document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect=card.getBoundingClientRect();
        //update css variable for the spotlight effect
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
    );
})
const video1=document.getElementById('project1')
const video2=document.getElementById('project2')
const video3=document.getElementById('project3')
const video4=document.getElementById('project4')

const videoList=[video1, video2, video3, video4];

videoList.forEach(function(video) {
    video.addEventListener('mouseover', function() {
        video.play();
    });
    video.addEventListener('mouseout', function() {
        video.pause();
    });
})