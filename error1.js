  let errorBox = document.createElement('div');
  errorBox.setAttribute('style', 'position:absolute;z-index:10;top:40%;left:40%');
  errorBox.innerHTML = '<link rel="stylesheet" href="https://unpkg.com/xp.css"><div class="window" style="width:300px"><div class="title-bar"><div class="title-bar-text">Aryan error</div><div class="title-bar-controls"><button aria-label="Minimize"></button><button aria-label="Maximize"></button><button aria-label="Close"></button></div></div><div class="window-body"><table><tr><td style="vertical-align:top"><img src="https://chimes512.github.io/etestpage394/Error.png"></td><td><p style="font-size:11px">Unexpected number "thrembo" detected</p><div><button>OK</button> <button>Cancel</button></div></td></tr></table></div></div>';
  document.getElementById('content').appendChild(errorBox);
  
  let errorSound = new Audio("https://chimes512.github.io/etestpage394/Windows-XP-Critical-Stop.mp3");
  errorSound.play();
