$(function()
{
    var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var albumArt = $('#album-art'),
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        playRepeatButton = $("#play-repeat"),
        openMenu = $('#play-menu'),
		i = playPauseButton.find('i'),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	var songs = [{
		artist: "Dig Didzay",
		name: "Nếu Anh Đi (Cover)",
		url: "Musics/NeuAnhDi.mp3",
		picture: "./Background/anh15.jpg"
	}, {
        artist: "Fiona Fung",
		name: "A Little Love",
		url: "Musics/A Little Love.mp3",
		picture: "./Background/anh1.jpg"
    }, {
        artist: "Avicii",
		name: "The Nights",
		url: "Musics/The Nights.mp3",
		picture: "./Background/anh12.jpg"
    }, {
        artist: "3 Chú Bộ Đội",
		name: "Làm Người Yêu Anh Nhé Baby",
		url: "Musics/3 Chú Bộ Đội - Làm Người Yêu Anh Nhé Baby.mp3",
		picture: "./Background/anh3.jpg"
    }, {
        artist: "Miu Lê",
		name: "Anh Đang Nơi Đâu",
		url: "Musics/Anh Dang Noi Dau - Miu Le.mp3",
		picture: "./Background/anh13.jpg"
    }, {
        artist: "Ariana Grande_ Jessie J_ Nicki Minaj",
		name: "Bang Bang",
		url: "Musics/Bang Bang - Ariana Grande_ Jessie J_ Nic [MP3 320kbps].mp3",
		picture: "./Background/anh2.jpg"
    }, {
        artist: "BIGBANG",
		name: "Bang Bang Bang",
		url: "Musics/Bang Bang Bang - BIGBANG.mp3",
		picture: "./Background/anh5.jpg"
    }, {
        artist: "Nishino Kana",
		name: "Best Friend",
		url: "Musics/Best Friend - Nishino Kana.mp3",
		picture: "./Background/anh14.jpg"
    }, {
        artist: "BIGBANG",
		name: "Haru Haru",
		url: "Musics/Big Bang – Haru Haru.mp3",
		picture: "./Background/anh6.jpg"
    }, {
        artist: "Taylor Swift",
		name: "Blank Space",
		url: "Musics/Blank Space - Taylor Swift (www.YeuCaHat.com).mp3",
		picture: "./Background/anh9.jpg"
    }, {
        artist: "Lynk Lee",
		name: "Cô Gái Nông Thôn",
		url: "Musics/Co Gai Nong Thon - Lynk Lee NQP.mp3",
		picture: "./Background/anh4.jpg"
    }, {
        artist: "Hoàng Tôn - Yanbi",
		name: "Em Không Quay Về",
		url: "Musics/Em Khong Quay Ve - Hoang Ton Yanbi.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Nakamura Maiko",
		name: "Endless Tears",
		url: "Musics/Endless Tears - Nakamura Maiko CLIFF EDGE.mp3",
		picture: "./Background/anh7.jpg"
    }, {
        artist: "Nicki Minaj - David Guetta",
		name: "Hey Mama",
		url: "Musics/Hey Mama-Nicki Minaj_[Nhacso.Net].mp3",
		picture: "./Background/anh10.jpg"
    }, {
        artist: "911",
		name: "I Do",
		url: "Musics/I Do - 911.mp3",
		picture: "./Background/anh11.jpg"
    }, {
        artist: "Quân A.P",
		name: "Ai Là Người Thương Em",
		url: "Musics/Ai La Nguoi Thuong Em - Quan A_P.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Mỹ Tâm",
		name: "Anh Đợi Em Được Không",
		url: "Musics/Anh Doi Em Duoc Khong - My Tam.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "HuyR",
		name: "Anh Thanh Niên",
		url: "Musics/Anh Thanh Nien - HuyR.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Phan Mạnh Quỳnh",
		name: "Có Chàng Trai Viết Lên Cây",
		url: "Musics/Co Chang Trai Viet Len Cay - Phan Manh Q.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Đức Phúc",
		name: "Hơn Cả Yêu",
		url: "Musics/Hon Ca Yeu - Duc Phuc.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Vu Tử Bối",
		name: "Hôn Khắp Nơi",
		url: "Musics/Hon khap noi - Vu Tu Boi cover.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Ngọt",
		name: "Lần Cuối",
		url: "Musics/Lan Cuoi - Ngot.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Passenger",
		name: "Let Her Go",
		url: "Musics/Let Her Go - Passenger.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Demi Lovato",
		name: "Let It Go",
		url: "Musics/Let It Go Demi Lovato - Demi Lovato.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Trang Hàn_Hoàng Thống_TDK",
		name: "Lonely Love",
		url: "Musics/Lonely Love - Trang Han_ Hoang Thong_ Tr.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "The Sheep",
		name: "Người Ta Thành Đôi Hết Rồi",
		url: "Musics/Nguoi Ta Thanh Doi Het Roi - The Sheep_.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Mỹ Tâm",
		name: "Nơi Mình Dừng Chân",
		url: "Musics/Noi Minh Dung Chan - My Tam.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Chanyeol_Punch",
		name: "Stay With Me",
		url: "Musics/Stay With Me - Chanyeol_ Punch.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Yanbi_Mr T_Hằng Bingboong",
		name: "Thu Cuối",
		url: "Musics/Thu Cu i - Yanbi Mr T H ng BingBoong.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Phan Mạnh Quỳnh",
		name: "Từ Đó",
		url: "Musics/Tu Do - Phan Manh Quynh.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "Avicii",
		name: "Wake Me Up",
		url: "Musics/Wake Me Up Avicii - Avicii.mp3",
		picture: "./Background/anh8.jpg"
    }, {
        artist: "The Sheep",
		name: "Yêu Như Ngày Hôm Qua",
		url: "Musics/Yeu Nhu Ngay Hom Qua - The Sheep.mp3",
		picture: "./Background/anh8.jpg"
    }];

	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	songs = shuffle(songs);

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }


    function playRepeat()
    {
        isRepeat = !isRepeat;
        audio.loop = isRepeat;
        toggleEnable(isRepeat, playRepeatButton);
    }

    function toggleEnable(condition, element)
    {
        if (condition)
            element.addClass('isEnabled');
        else
            element.removeClass('isEnabled');
    }
    
    function toggleMenu()
    {
        isOpen = !isOpen;
        toggleEnable(isOpen, openMenu);
    }
    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
			selectTrack(1);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag, index = null)
    {
        if (index === null) {
            if( flag == 0 || flag == 1 ) {
                ++currIndex;
            } else if (flag === -1) {
                --currIndex;
            }
        } else {
            currIndex = index;
        }

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img').attr('src', currArtwork);
            $('#album-art img').prop('src', bgArtworkUrl);
            $('.song').removeClass('playingSong');
            $('#song' + currIndex).addClass('playingSong');
        }
        else
        {
            if (currIndex < 0) {
                currIndex = songs.length - 1;
            } else if (currIndex > songs.length - 1) {
                currIndex = 0;
            }
            selectTrack(2);
        }
    }

    function initPlayer()
	{	
        audio = new Audio();
        addSongList();
		selectTrack(0);
		
		audio.loop = false;
        isRepeat = false;
        isOpen = false;

		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){
            selectTrack(-1);
        });
        playNextTrackButton.on('click',function(){
            selectTrack(1);
        });
        playRepeatButton.on('click', function(){
            playRepeat();
        });
        openMenu.on('click', function(){
            $("#list-song").fadeToggle(300);
            toggleMenu();
        });
    }
    

    function addSongList() {
        songs.forEach((song, index) => {
            const songTemplate = 
            `<div class="song" id="song${index}">
                <i class="fas fa-play"></i>
                <div class="info">
                    ${song.name} - ${song.artist}
                </div>
            </div>`

            $("#list-song").append(songTemplate);
            $('#song' + index).on('click', () => {
                selectTrack(0, index);
                playPause();
            });
        })
        
    }
    
	initPlayer();
});

$(function(){
    $("#button-no").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*100)+"%",
                top:(Math.random()*100)+"%",
                position: "absolute",
                transition: "all 0.1s ease",
            });
        }
    });
});

const buttonYes = document.querySelector('#button-yes');
const buttonNo = document.querySelector('#button-no');
const message = document.querySelector('#message');
const divBg = document.querySelector("#bg-artwork"); 
const dropdownList = Array.from(document.querySelectorAll('.dropdown'));


buttonYes.onclick = () => {
    message.innerText = "Thanks, I Love You <3";
    buttonYes.setAttribute("style", "display: none")
    buttonNo.setAttribute("style", "display: none")
    //buttonNo.style.display = 'none';
}

function changeBg(fileName) {
    if(fileName) {
        const valueStyle = "background-image: url('" + fileName + "');";
        divBg.setAttribute("style", valueStyle + "background-position: 50% 20%")      
    }
    else {
        divBg.setAttribute("style", "background-position: 50%")
    }
}

dropdownList.forEach(
    function(el, idx) {
        const btn = el.querySelector('.btn');
        btn.addEventListener('click', function(event) {
            if (el.classList.value.indexOf('open') === -1) {
                el.classList.add('open');
            } else {
                el.classList.remove('open');
            }
        });
    }
)