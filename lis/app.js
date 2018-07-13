// my way to do this

// const runMain = function() {
//   const songsNode = document.querySelector('.songs');
//   const songs = Array.from(document.querySelector('.songs').children);

//   let songsName = [];
//     songs.forEach((song) => {
//       songsName.push(song.textContent);
//     })

//   const getCurrentSong = (e) => {
//     const currentSong = songsName.indexOf(e.target.textContent) + 1;
//     document.querySelector('.output span').innerHTML = `${currentSong} ${e.target.textContent}`;

//     e.preventDefault();
//   };


//   songsNode.addEventListener('click', getCurrentSong);
// }

// runMain();

// the way in the vedio

var elNumber = document.getElementById('number');

function setupClickHandlers() {
  var elTrack = document.getElementsByClassName('track');

    function generateClickHandler(trackNum) {

      const clickHandler = function() {
        elNumber.innerHTML = trackNum;
      }

      return clickHandler;
    }

    

    for(var i = 0, l = elTrack.length; i < l; i++) {
      elTrack[i].addEventListener('click', generateClickHandler(i + 1));
    }
}

setupClickHandlers();

