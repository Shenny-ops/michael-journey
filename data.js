/* ============================================================
   A LITTLE JOURNEY — 網站內容都在這裡
   - 換照片：把檔案放進 images/，再改下面的 src
   - 加照片：在 photos 裡多加一筆 { src, alt, caption }
   - 加旅行小註記：在 photos 裡加 { note: "文字" }
   - 留言：照表單原文保留，換行用 \n
   ============================================================ */
window.JOURNEY = {
  name: "Michael",
  nameZh: "米高",

  cover: { src: "images/photo-01.jpg", alt: "米高和 PID 同事在辦公室的自拍合照" },

  photos: [
    { src: "images/photo-01.jpg", alt: "米高和 PID 同事在辦公室的自拍合照", caption: "a little memory" },
    { note: "on the road with the PID crew" },
    { src: "images/photo-02.jpg", alt: "PID 同事們在會議室一起搞笑合照", caption: "say cheese!" },
    { note: "next stop: somewhere new", pets: true }
  ],

  postcards: [
    { from: "郭俞妤",
      message: "謝謝Michael在PID拍了這麼多專業的照片，記得第一次接觸PID就是你和妞妞姐姐一起和我們家拍照！真的非常謝謝你們的服務，每次和你們一起工作都好開心！因為你們不只給人大大的親切感，又讓人感到舒服，期待未來你們到更多地方為耶和華服務！有你們真好！路過我家的話可以直接進來看貓貓狗狗！還有跟我爸媽一起喝咖啡喔，隨時歡迎！" },
    { from: "Shana",
      message: "Dear Michael, \n I was just thinking the other day that I have known you for a long time, about 10 years, right? I will never forget the discussion we had once when we were all facing big changes in our theocratic assignments. You had such a good attitude about it and it was really encouraging to us! Thank you for having a positive and self sacrificing spirit. We will miss you in PID but I KNOW we will work together again in the future! No matter where you are assigned you will be a blessing to the brothers and sisters you serve with! May Jehovah bless you both as you start this new chapter together!" },
    { from: "邱涵",
      message: "還來不及跟你拜師學藝你就要走了QQ\n很開心這兩年可以一起工作，每次都可以從你那裡學到專業知識！而且無論是什麼委派，你總是勇往直，很遠的地方也照樣跑，真的很令人敬佩。期待聽到你和孟樺之後的委派，以後如果有機會還請繼續收我為徒喔哈哈" },
    { from: "鄧大偉",
      message: "米高\n感謝你在PID所做的服務，我想攝影師拍的照片總是能反應拍攝的人的特質，你的照片能讓人感到溫暖和熱誠，你的特質也是如此。謝謝你為耶和華所拍攝的\"每一張照片\"，你所作不只是拍照，而是能得到耶和華認可的美善工作！\n雖然大家記得你的方式經常是通過照片，但我特別欣賞你每次為我們做的禱告，能看出你對弟兄姊妹和對上帝的愛，非常鼓勵我，謝謝你做的一切！\n請好好享受SKE的課程，並期待耶和華為你們準備的禮物，耶和華一定會繼續塑造你，使你成為他所喜愛的器皿。" },
    { from: "羅潔",
      message: "你總是慷慨善用你的各種器材，拍出漂亮的作品，每次看到都很驚艷！\n還有謝謝你在今年記者會的神救援，讓筆電能順利使用！\n上課加油，相信你們未來的新改變一定會很精彩！🤩" },
    { from: "Heather",
      message: "Michael, I didn't have much of a chance to work along with you, but thank you for all you did!  Some of us (me) have no photography ability whatsoever, so thank you for your excellent work!  You will both definitely be an asset to the congregation you are going to, may Jehovah bless you both in your future assignment!" },
    { from: "李孟澄",
      message: "謝謝米糕一直以來都為我們提供超精采的畫面！非常期待你們夫婦的新旅程喔~" },
    { from: "潘宏儒",
      message: "非常謝謝Michael的服務，有機會跟你一起工作的時候，你顯出的溫和及平易近人的特質是我很想學習的地方。\n期待你們未來繼續在不同的崗位發光發熱!" },
    { from: "以梵",
      message: "我很欣賞你們夫妻為了組織的各種活動「來往奔走」，而且總是靠著神聖力量滿腔熱誠，為耶和華竭力效勞。很期待你們畢業後能造福更多上帝的百姓。" },
    { from: "湯宜臻",
      message: "謝謝 Michael 在 PID 拍攝了許多專業又精美的照片，為我們留下了許多珍貴的回憶！非常感謝你的付出與服務。May Jehovah continue to bless you abundantly wherever your future assignments may take you." },
    { from: "陳品任",
      message: "Hi Michael\n能跟你一起工作真是太開心了！你樂意服務的精神很鼓勵我，每次搜集照片，你總是反應迅速，常常說隔天就可以去幫忙拍照，你一直以來熱心的協助讓工作進行得很順利。期待耶和華任用你成就更多美好的工作，也希望你能快樂的享受新委派。" },
    { from: "Jessica",
      message: "To Michael：\n沒想到我們有一天會有機會在同一個部門服務～ 從認識你到現在，你一直都忙著各種為耶和華服務的工作，天上的財寶一定累積得滿滿的！在耶和華的「Michael＋Marina」這本書裡，一定記錄了許多寶貴的經驗、有趣的故事，和你們照顧身邊年輕人的點點滴滴。接下來的一定會有更多精彩的篇章、更多來自耶和華祝福，和珍惜的回憶！\n希望你們永遠都能開開心心地為快樂的上帝服務！\n上課期間，我會偷偷看看有沒有人在打呼，再傳到 PID 群組～呼呼～\n– Jessica" },
    { from: "心萱 Shenny",
      message: "雖然相處的時間不長，但米高真的給我留下很深刻的印象。記得那次 EDGE 培訓後的談話，我真的覺得耶和華透過你回應了我的禱告。你真誠的稱讚和鼓勵，讓我學習保持謙卑、快樂地接受前頭的委派。你也說會為我們禱告，這些話真的讓我感到非常溫暖，也讓我更加信賴耶和華，對前方未知的事不再那麼害怕。\n看得出來，耶和華透過仁愛的培訓，讓你的長處更加精湛，也讓你的服務充滿溫度。祝福你們能好好享受新的委派，在新的地區繼續快樂地服務！我也會繼續為你們禱告～～" }
  ],

  ending: { src: "images/michael-marina.png", alt: "米高和太太的手繪插畫" }
};
