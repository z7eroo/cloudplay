// ====== إعدادات الموقع / Site settings ======
window.SITE = {
  team: "Cloud Team",
  logo: "assets/team.png",              // استبدل الصورة بشعار الفريق
  discord: "https://discord.gg/zqHZSXMphJ",
  credits: "© Cloud Team — جميع الحقوق محفوظة",
  creditsEn: "© Cloud Team — All rights reserved"
};

// ====== قائمة البرامج / Apps ======
// لإضافة برنامج جديد انسخ عنصراً وغيّر id (يصبح رابطه  #/app/<id>)
window.APPS = [
  {
    id: "cloudplay",
    name: "CloudPlay",
    icon: "assets/cloudplay.png",
    cover: "assets/cloudplay.png",       // صورة البرنامج في صفحته (يمكن استبدالها بلقطة شاشة)
    type: { ar: "تطبيق أندرويد • مشغل وتحميل", en: "Android app • Player & Downloader" },
    short: {
      ar: "حمّل الفيديوهات والصوتيات، وشغّلها بمشغل مدمج ومكتبة متكاملة.",
      en: "Download videos & audio and play them with a built-in player and library."
    },
    about: {
      ar: "CloudPlay تطبيق أندرويد مجاني من Cloud Team لتحميل الفيديوهات والصوتيات وتشغيلها، بدون إعلانات.",
      en: "CloudPlay is a free Android app by Cloud Team to download and play videos and audio, with no ads."
    },
    download: "https://github.com/z7eroo/cloudplay/releases/latest",  // ضع رابط التحميل المباشر هنا
    features: [
      { icon: "⬇️", t: { ar: "تحميل الفيديوهات والصوتيات", en: "Video & Audio Downloads" }, d: { ar: "حمّل الفيديوهات أو استخرج الصوت من روابط المواقع المدعومة بسهولة.", en: "Easily download videos or extract audio from supported websites." } },
      { icon: "🛠️", t: { ar: "اختيار جودة التنزيل", en: "Download Quality Options" }, d: { ar: "اختر الجودة المناسبة لك، مع خيارات مثل 1280p و1024p و854p حسب الفيديو.", en: "Choose your preferred quality, with options such as 1280p, 1024p, and 854p depending on the video." } },
      { icon: "🌐", t: { ar: "دعم الروابط", en: "Link Support" }, d: { ar: "ألصق رابط الفيديو من موقع مدعوم، ثم حلّل الرابط واختر ما يناسبك.", en: "Paste a link from a supported website, analyze it, and choose your preferred option." } },
      { icon: "⏱️", t: { ar: "تسريع التنزيل", en: "Download Acceleration" }, d: { ar: "استمتع بميزة اتصالات متعددة لتنزيل أسرع.", en: "Enjoy multiple-connection downloading for faster downloads." } },
      { icon: "📁", t: { ar: "مكتبة متكاملة", en: "Built-in Library" }, d: { ar: "استعرض الفيديوهات المحفوظة وأنشئ ألبومات لتنظيم محتواك.", en: "Browse saved videos and create albums to organize your content." } },
      { icon: "▶️", t: { ar: "مشغل مدمج", en: "Built-in Player" }, d: { ar: "تحكّم في سرعة التشغيل والتكرار والصوت والمزيد.", en: "Control playback speed, repeat mode, audio, and more." } },
      { icon: "🎨", t: { ar: "تخصيص الواجهة", en: "Personalized Interface" }, d: { ar: "اختر العربية أو الإنجليزية، وبدّل بين الوضع الليلي والنهاري.", en: "Choose Arabic or English and switch between dark and light modes." } },
      { icon: "🔧", t: { ar: "تحديث محرك التنزيل", en: "Downloader Engine Updates" }, d: { ar: "حدّث محرك yt-dlp للمساعدة في دعم تغييرات المواقع.", en: "Update the yt-dlp engine to help support website changes." } },
      { icon: "💎", t: { ar: "المميزات المدفوعة مجانًا", en: "Premium Features for Free" }, d: { ar: "استمتع بمميزات تتطلب الدفع في تطبيقات أخرى، مجانًا داخل CloudPlay.", en: "Enjoy features that require payment in other apps, free in CloudPlay." } },
      { icon: "🚫", t: { ar: "بدون إعلانات", en: "Ad-Free Experience" }, d: { ar: "استخدم البرنامج دون إعلانات مزعجة أو اشتراكات مدفوعة.", en: "Use the app without annoying ads or paid subscriptions." } }
    ]
  }
];
