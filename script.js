$(function () {
  var playerTrack = $("#player-track");
  var bgArtwork = $("#bg-artwork");
  var bgArtworkUrl;
  var albumName = $("#album-name");
  var trackName = $("#track-name");
  var albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    playRepeatButton = $("#play-repeat"),
    openMenu = $("#play-menu"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false;

  var playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next"),
    currIndex = -1;

  var songs = [
    {
      artist: "Dig Didzay",
      name: "Nếu Anh Đi (Cover)",
      url: "Musics/NeuAnhDi.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Avicii",
      name: "The Nights",
      url: "Musics/The Nights.mp3",
      picture: "./Background/anh12.jpg",
    },
    {
      artist: "3 Chú Bộ Đội",
      name: "Làm Người Yêu Anh Nhé Baby",
      url: "Musics/3 Chú Bộ Đội - Làm Người Yêu Anh Nhé Baby.mp3",
      picture: "./Background/anh3.jpg",
    },
    {
      artist: "Miu Lê",
      name: "Anh Đang Nơi Đâu",
      url: "Musics/Anh Dang Noi Dau - Miu Le.mp3",
      picture: "./Background/anh13.jpg",
    },
    {
      artist: "BIGBANG",
      name: "Bang Bang Bang",
      url: "Musics/Bang Bang Bang - BIGBANG.mp3",
      picture: "./Background/anh5.jpg",
    },
    {
      artist: "Nishino Kana",
      name: "Best Friend",
      url: "Musics/Best Friend - Nishino Kana.mp3",
      picture: "./Background/anh14.jpg",
    },
    {
      artist: "BIGBANG",
      name: "Haru Haru",
      url: "Musics/Big Bang – Haru Haru.mp3",
      picture: "./Background/anh6.jpg",
    },
    {
      artist: "Taylor Swift",
      name: "Blank Space",
      url: "Musics/Blank Space - Taylor Swift (www.YeuCaHat.com).mp3",
      picture: "./Background/anh9.jpg",
    },
    {
      artist: "Lynk Lee",
      name: "Cô Gái Nông Thôn",
      url: "Musics/Co Gai Nong Thon - Lynk Lee NQP.mp3",
      picture: "./Background/anh4.jpg",
    },
    {
      artist: "Nicki Minaj - David Guetta",
      name: "Hey Mama",
      url: "Musics/Hey Mama-Nicki Minaj_[Nhacso.Net].mp3",
      picture: "./Background/anh10.jpg",
    },
    {
      artist: "Quân A.P",
      name: "Ai Là Người Thương Em",
      url: "Musics/Ai La Nguoi Thuong Em - Quan A_P.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Mỹ Tâm",
      name: "Anh Đợi Em Được Không",
      url: "Musics/Anh Doi Em Duoc Khong - My Tam.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Phan Mạnh Quỳnh",
      name: "Có Chàng Trai Viết Lên Cây",
      url: "Musics/Co Chang Trai Viet Len Cay - Phan Manh Q.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Đức Phúc",
      name: "Hơn Cả Yêu",
      url: "Musics/Hon Ca Yeu - Duc Phuc.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Demi Lovato",
      name: "Let It Go",
      url: "Musics/Let It Go Demi Lovato - Demi Lovato.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Trang Hàn_Hoàng Thống_TDK",
      name: "Lonely Love",
      url: "Musics/Lonely Love - Trang Han_ Hoang Thong_ Tr.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Mỹ Tâm",
      name: "Nơi Mình Dừng Chân",
      url: "Musics/Noi Minh Dung Chan - My Tam.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Chanyeol_Punch",
      name: "Stay With Me",
      url: "Musics/Stay With Me - Chanyeol_ Punch.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Yanbi_Mr T_Hằng Bingboong",
      name: "Thu Cuối",
      url: "Musics/Thu Cu i - Yanbi Mr T H ng BingBoong.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Phan Mạnh Quỳnh",
      name: "Từ Đó",
      url: "Musics/Tu Do - Phan Manh Quynh.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Avicii",
      name: "Wake Me Up",
      url: "Musics/Wake Me Up Avicii - Avicii.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "The Sheep",
      name: "Yêu Như Ngày Hôm Qua",
      url: "Musics/Yeu Nhu Ngay Hom Qua - The Sheep.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Nguyễn Hải Phong",
      name: "Dòng Thời Gian",
      url: "Musics/Dong Thoi Gian - Nguyen Hai Phong.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Mr. Siro",
      name: "Dưới Những Cơn Mưa",
      url: "Musics/Dưới Những Cơn Mưa - Mr. Siro _ Bài hát, lyrics.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Michael Jackson",
      name: "Heal The World",
      url: "Musics/Heal The World - Michael Jackson.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Kenshi Yonezu",
      name: "Lemon",
      url: "Musics/Lemon - Kenshi Yonezu.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Lynk Lee",
      name: "Ngày Ấy Bạn Và tôi",
      url: "Musics/Ngày Ấy Bạn Và Tôi - Lynk Lee.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Hoàng Yến Chibi",
      name: "Ngây Ngô",
      url: "Musics/Ngây Ngô - Hoàng Yến Chibi.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Lambsey",
      name: "PLANET",
      url: "Musics/PLANET - Lambsey.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "KenshiWiz KhalifaYonezu",
      name: "See You Again",
      url: "Musics/See You Again-Wiz Khalifa_[Nhacso.Net].mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Michael Jackson",
      name: "Smooth Criminal",
      url: "Musics/Smooth Criminal - Michael Jackson.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Trịnh Đình Quang",
      name: "Thất Tình",
      url: "Musics/That Tinh - Trinh Dinh Quang.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Trịnh Thăng Bình",
      name: "Tâm Sự Tuổi 30",
      url: "Musics/Tâm Sự Tuổi 30 (Ông Ngoại Tuổi 30 OST) - Trịnh Thăng Bình.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Trúc Nhân",
      name: "Vẽ",
      url: "Musics/Ve Acoustic Version_ - Truc Nhan.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Enrique Iglesias",
      name: "Why Not Me",
      url: "Musics/Why Not Me.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Fiona Fung",
      name: "Proud Of You",
      url: "Musics/Proud of You.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Da LAB - Miu Lê",
      name: "Gác Lại Âu Lo",
      url: "Musics/Gac Lai Au Lo - Da LAB_ Miu Le.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Trung Quân",
      name: "Chiều Nay Không Có Mưa Bay",
      url: "Musics/Chieu Nay Khong Co Mua Bay - Trung Quan.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Sơn Tùng M-TP",
      name: "Âm Thầm Bên Em",
      url: "Musics/Âm Thầm Bên Em - Sơn Tùng M-TP_Lời Bài Hát.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "The Sheep",
      name: "Người Ta Thành Đôi Hết Rồi",
      url: "Musics/Nguoi Ta Thanh Doi Het Roi - The Sheep_.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Min",
      name: "Y.Ê.U",
      url: "Musics/Y E U Acoustic Version - Min.mp3",
      picture: "./Background/anh15.jpg",
    },
    {
      artist: "Charlie Puth",
      name: "One Call Away",
      url: "Musics/One Call Away - Charlie Puth [MP3 320kbps].mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Daoko - Kenshi Yonezu",
      name: "Uchiage Hanabi",
      url: "Musics/Uchiage Hanabi - Daoko, Kenshi Yonezu.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Vu Tử Bối",
      name: "Hôn Khắp Nơi",
      url: "Musics/Hon khap noi - Vu Tu Boi cover.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Nakamura Maiko",
      name: "Endless Tears",
      url: "Musics/Endless Tears - Nakamura Maiko CLIFF EDGE.mp3",
      picture: "./Background/anh7.jpg",
    },
    {
      artist: "Fiona Fung",
      name: "A Little Love",
      url: "Musics/A Little Love.mp3",
      picture: "./Background/anh1.jpg",
    },
    {
      artist: "Lost Frequencies, Janieck Devy",
      name: "Reality",
      url: "Musics/Reality - Lost Frequencies, Janieck Devy.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Bích Phương",
      name: "Mình Yêu Nhau Đi",
      url: "Musics/Minh Yeu Nhau Di - Bich Phuong.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Kha",
      name: "Em Có Nghe",
      url: "Musics/Em Co Nghe - Kha.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "911",
      name: "I Do",
      url: "Musics/I Do - 911.mp3",
      picture: "./Background/anh11.jpg",
    },
    {
      artist: "HuyR",
      name: "Anh Thanh Niên",
      url: "Musics/Anh Thanh Nien - HuyR.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Tiên Tiên",
      name: "My Everything",
      url: "Musics/My Everything - Tiên Tiên.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Ngọt",
      name: "Lần Cuối",
      url: "Musics/Lan Cuoi - Ngot.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Alan Walker, Sabrina Carpent",
      name: "On My Way",
      url: "Musics/On My Way - Alan Walker_ Sabrina Carpent.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Trịnh Thăng Bình",
      name: "Người Ấy",
      url: "Musics/Nguoi Ay - Trinh Thang Binh.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Hoàng Tôn - Yanbi",
      name: "Em Không Quay Về",
      url: "Musics/Em Khong Quay Ve - Hoang Ton Yanbi.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Passenger",
      name: "Let Her Go",
      url: "Musics/Let Her Go - Passenger.mp3",
      picture: "./Background/anh8.jpg",
    },
    {
      artist: "Michael Jackson",
      name: "You Are Not Alone",
      url: "Musics/YouAreNotAlone_MichaelJackson_nb.mp3",
      picture: "./Background/anh8.jpg",
    },
  ];

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 22; i > 0; i--) {
      //j = Math.floor(Math.random() * (i + 1)); //sort all
      j = Math.floor(Math.random() * (i + 1)); // ** magic 👀 **
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  songs = shuffle(songs);

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fas fa-pause");

        audio.play();
        audioCtx.resume();
        mainloop();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fas fa-play");
        audio.pause();
      }
    }, 300);
  }

  function playRepeat() {
    isRepeat = !isRepeat;
    audio.loop = isRepeat;
    toggleEnable(isRepeat, playRepeatButton);
  }

  function toggleEnable(condition, element) {
    if (condition) element.addClass("isEnabled");
    else element.removeClass("isEnabled");
  }

  function toggleMenu() {
    isOpen = !isOpen;
    toggleEnable(isOpen, openMenu);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
      selectTrack(1);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag, index = null) {
    if (index === null) {
      if (flag == 0 || flag == 1) {
        ++currIndex;
      } else if (flag === -1) {
        --currIndex;
      }
    } else {
      currIndex = index;
    }

    if (currIndex > -1 && currIndex < songs.length) {
      // var currentTrack = $(`#song${index}`);
      // currentTrack.attr("class", "song fas fa-pause")

      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = songs[currIndex].name;
      currTrackName = songs[currIndex].artist;
      currArtwork = songs[currIndex].picture;

      audio.src = songs[currIndex].url;

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img").attr("src", currArtwork);
      $("#album-art img").prop("src", bgArtworkUrl);
      $(".song").removeClass("playingSong");
      $("#song" + currIndex).addClass("playingSong");
    } else {
      if (currIndex < 0) {
        currIndex = songs.length - 1;
      } else if (currIndex > songs.length - 1) {
        currIndex = 0;
      }
      selectTrack(2);
    }
  }

  function initPlayer() {
    audio = new Audio();
    audio.volume = 0.5;
    // audio visualizer
    audioCtx = new AudioContext();
    analyser = audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    addSongList();
    selectTrack(0);

    audio.loop = false;
    isRepeat = false;
    isOpen = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
    playRepeatButton.on("click", function () {
      playRepeat();
    });
    openMenu.on("click", function () {
      $("#list-song").fadeToggle(300);
      toggleMenu();
    });
  }

  function addSongList() {
    songs.forEach((song, index) => {
      const songTemplate = `<div class="song" id="song${index}">
                <i class="fas fa-play"></i>
                <div class="info">
                    ${song.name} - ${song.artist}
                </div>
            </div>`;

      $("#list-song").append(songTemplate);
      $("#song" + index).on("click", () => {
        selectTrack(0, index);
        playPause();
      });
    });
  }

  initPlayer();
});

$(function () {
  $("#button-no").on({
    mouseover: function () {
      $(this).css({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        position: "absolute",
        transition: "all 0.1s ease",
      });
    },
  });
});

const buttonYes = document.querySelector("#button-yes");
const buttonNo = document.querySelector("#button-no");
const message = document.querySelector("#message");
const hideshow = document.querySelector("#hide-show");
const divBg = document.querySelector(".bg-artwork");
const changeBg = document.querySelector(".change-bg");
const inputBg = document.querySelector("#input-bg");

buttonYes.onclick = () => {
  message.innerText = "Thanks, I Love You <3";
  buttonYes.setAttribute("style", "display: none");
  buttonNo.setAttribute("style", "display: none");
  //buttonNo.style.display = 'none';
};

// changeBg.onclick = () => {
//   if (divBg.id === "1") {
//     divBg.setAttribute(
//       "style",
//       'background-image: url("./Background/bg1.jpg"); background-position: 50% 20%; transition: all 1s ease'
//     );
//     //$(".bg-artwork").css("background-image", 'url("./Background/bg1.jpg")'); cach dung jQuery
//     divBg.id = "2";
//   } else {
//     divBg.setAttribute("style", "background-position: 50%");
//     divBg.id = "1";
//   }
// };
inputBg.onchange = function(input) {
  console.log('====================================');
  console.log(this);
  console.log('====================================');
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.bg-artwork')
      .attr('src', e.target.result);
    };
    reader.readAsDataURL(this.files[0]);
  }
}

window.addEventListener("keyup", hide, false);
window.addEventListener("keyup", show, false);

function hide(key) {
  if (key.keyCode == "70") {
    changeBg.setAttribute("style", "opacity: 0%; animation: fade 1s;");
    message.setAttribute("style", "opacity: 0%; animation: fade 1s;");
    buttonYes.setAttribute("style", "opacity: 0%; animation: fade 1s;");
    buttonNo.setAttribute("style", "opacity: 0%; animation: fade 1s;");
    hideshow.setAttribute("style", "opacity: 0%; animation: fade 1s;");
  }
}

function show(key) {
  if (key.keyCode == "68") {
    if (message.innerHTML == "Thanks, I Love You &lt;3") {
      changeBg.setAttribute("style", "animation: show 2s;");
      message.setAttribute("style", "animation: show 2s;");
      hideshow.setAttribute("style", "animation: show 2s;");
    } else {
      changeBg.setAttribute("style", "animation: show 2s;");
      message.setAttribute("style", "animation: show 2s;");
      hideshow.setAttribute("style", "animation: show 2s;");
      buttonYes.setAttribute("style", "animation: show 2s;");
      buttonNo.setAttribute("style", "animation: show 2s;");
    }
  }
}

console.log(
  "I have a little secret, can you find it? (☞ﾟヮﾟ)☞\nhint: listen to the whole playlist over and over 🎧🎧🎧"
);

// volume slider
$(".slider-circle").draggable({
  axis: "x",
  containment: ".slider-bar",
  drag: function (event) {
    const SLIDER_BAR_UNITS = 3;
    var start_left = parseInt($(".slider-bar").css("margin-left"));
    var alpha =
      (($(".slider-circle").position().left - start_left) / SLIDER_BAR_UNITS) *
      0.01;
    if (alpha <= 1 && alpha >= 0) {
      audio.volume = alpha.toFixed(3);
    }
  },
});

let isLoading = false;
$(".slider-circle").on("drag", function (event, ui) {
  if (ui.position.left >= 275.5) {
    // maybe >= 280
    $(".slider-circle").addClass("drop");
    $(".oops").addClass("show-oops");
  } else {
    $(".slider-circle").removeClass("drop");
    $(".oops").removeClass("show-oops");
    ui.position.top = -5;
  }
});

// audio visualizer
var BAR_PAD = 10;
var BAR_WIDTH = 5;
var MAX_BARS = 70;
var MAX_BG_SCALE = 20;
var SMOOTHING_SAMPLES = 10;

var bg = document.querySelector(".bg-artwork");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var audioCtx, analyser, source;

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.3;

window.onresize = function () {
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.3;
};

function draw_bars(values) {
  var len = values.length - ~~(values.length / MAX_BARS) * 4;
  var normFac = 255;
  var maxValue = normFac;
  var istep = ~~(len / MAX_BARS);
  var step = canvas.width / MAX_BARS;
  var x = BAR_WIDTH;
  var height = canvas.height - BAR_PAD * 2;

  for (var i = 0; i < len; i += istep) {
    var v = values[i] / maxValue;
    var h = v * height;
    var y = height / 2 - h / 2;
    ctx.beginPath();
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    ctx.lineWidth = BAR_WIDTH;
    ctx.lineCap = "round";
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + h);
    ctx.stroke();
    x += step;
  }

  // Background size change with bass
  	// var fac = 0.0;
  	// var div = 0;
  	// for (var i = 0; i < len-SMOOTHING_SAMPLES; i++) {
  	// 	var avgN = 0.0;
  	// 	for (var j = 0; j < SMOOTHING_SAMPLES; j++) {
  	// 		avgN += Math.abs(values[i+j] / maxValue * 2.0);
  	// 	}
  	// 	avgN /= SMOOTHING_SAMPLES;

  	// 	fac += avgN;
  	// 	div++;
  	// }
  	// fac /= div;
  	// fac *= MAX_BG_SCALE;

  	// var szW = ~~(150+fac);
  	// var szH = ~~(100+fac);
  	// var sz = szW.toString()+"% "+szH.toString()+"%";
    // // bg.style.backgroundSize=sz;
  	// bg.style.height=szH.toString()+"% ";
  	// bg.style.width=szW.toString()+"% ";
}

function mainloop() {
  var fbc = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw_bars(fbc);

  requestAnimationFrame(mainloop);
}
