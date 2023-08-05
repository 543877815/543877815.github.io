const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'The Wolven Storm',
        artist: '巫师3',
        url: '/music/Rehn Stillnight - The Wolven Storm.mp3',
        cover: '/music/1.jpg',
      }
    ]
});