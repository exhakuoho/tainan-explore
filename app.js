/* ============================================================
   藝饗台南 2.0 — 共用資料層與狀態管理
   ============================================================ */

/* ── 五大主題場景 ────────────────────────────────────── */
const SPOTS = [
  {
    id: 'lin',
    name: '林百貨',
    en: 'Hayashi Department Store',
    theme: '摩登生活',
    era: '日治時期',
    badge: '摩登生活徽章',
    color: '#A0522D',
    palette: 'oklch(72% 0.09 50)',
    lat: 22.9931, lng: 120.2024,
    address: '台南市中西區忠義路二段 63 號',
    duration: '60–90 分',
    desc: '台南最具代表性的歷史百貨，1932 年開幕，是日治時期台灣現代化都市生活的縮影。',
    long: '林百貨是日治時期臺南最具代表性的西洋風建築之一，由日本商人林方一於昭和 7 年（1932 年）創立。當時為臺南第一間導入電梯的百貨公司，象徵著臺南都市現代化、消費文化與摩登生活的興起。戰後一度歇業，2014 年修復重新開幕，如今是文創品牌聚落，也是府城摩登記憶的重要載體。',
    features: [
      { t: '台灣第一部商業電梯', d: '原始的鐵柵電梯仍保留，可實際體驗' },
      { t: '頂樓神社', d: '臺灣現存唯一的百貨屋頂神社遺跡' },
      { t: '昭和摩登立面', d: '仿巴洛克式磚造建築，藝術裝飾風格濃厚' },
      { t: '文創品牌聚落', d: '六層樓集結臺南設計品牌與選物店' },
      { t: '空襲彈孔遺跡', d: '頂樓保留戰爭時期彈孔，是歷史見證' }
    ],
    npc: {
      name: '昭和小姐 美智子',
      role: '昭和時期百貨店員',
      avatar: '👘',
      intro: 'いらっしゃいませ！歡迎光臨ハヤシ百貨。我是這裡的店員美智子，今天可以帶您體驗摩登台南的生活滋味嗎？',
    },
  },
  {
    id: 'confucius',
    name: '孔廟',
    en: 'Confucius Temple',
    theme: '文教精神',
    era: '明清時期',
    badge: '書院文化徽章',
    color: '#7B1E1E',
    palette: 'oklch(68% 0.12 25)',
    lat: 22.9935, lng: 120.2044,
    address: '台南市中西區南門路 2 號',
    duration: '45–60 分',
    desc: '建於明永曆 19 年（1665），台灣第一座孔廟，被譽為「全台首學」。',
    long: '台南孔廟，建於明永曆十九年（1665），由鄭氏政權所建，是臺灣第一座官方孔廟，亦稱「全臺首學」。歷經明、清、日治到當代，孔廟見證了臺灣儒學教育的開端與府城文教精神的傳承。每年教師節舉行的祭孔大典，仍延續著古禮的莊嚴與韻律。',
    features: [
      { t: '全台首學', d: '清代時為臺灣唯一正式儒學教育機構' },
      { t: '泮宮石坊', d: '清乾隆所立，象徵進入學術領域的精神門' },
      { t: '大成殿', d: '主殿供奉孔子牌位，祭孔大典於此舉行' },
      { t: '禮樂展演', d: '定期舉辦傳統八佾舞與雅樂演出' },
      { t: '歷代石碑', d: '記錄歷次修葺沿革的重要文化文獻' }
    ],
    npc: {
      name: '夫子 與 童生 阿榮',
      role: '夫子、書生、引路童生',
      avatar: '🎓',
      intro: '小童生有禮了！夫子今日在大成殿等候，欲考考您是否懂得府城書院的禮樂之道。請隨我入泮，一同體驗書院生活。',
    },
  },
  {
    id: 'chihkan',
    name: '赤崁樓',
    en: 'Chihkan Tower',
    theme: '歷史轉折',
    era: '荷蘭—明鄭—清',
    badge: '府城歷史徽章',
    color: '#8B4513',
    palette: 'oklch(58% 0.11 50)',
    lat: 22.9993, lng: 120.2036,
    address: '台南市中西區民族路二段 212 號',
    duration: '60–90 分',
    desc: '荷蘭東印度公司建於 1653 年，見證台灣四百年權力轉換與族群交會。',
    long: '赤崁樓原名「普羅民遮城」（Fort Provintia），是荷蘭東印度公司於 1653 年建造的行政中心。1661 年鄭成功攻台，1662 年荷蘭人在此向鄭氏投降，從而開啟漢人政權治臺的新篇章。清領時期於原址增建海神廟與文昌閣等中式建築，形成獨特的東西合璧景觀，是府城四百年歷史的縮影。',
    features: [
      { t: '荷蘭建城遺構', d: '臺基為荷蘭時期原物，是台灣最重要的歐洲殖民遺跡' },
      { t: '文昌閣與海神廟', d: '清代閩南式樓閣，與荷蘭遺址共存' },
      { t: '九座贔屭石碑', d: '清乾隆所立，記錄平定林爽文之役' },
      { t: '鄭成功受降', d: '相傳荷蘭長官於此向鄭成功投降' },
      { t: '夜間燈光', d: '燈光映照下別具懷古氛圍，攝影聖地' }
    ],
    npc: {
      name: '荷蘭商人 韓布魯克 / 鄭氏部將 / 清代文人',
      role: '荷蘭商人、明鄭將領、清代文人、廟祝',
      avatar: '⚔️',
      intro: '四百年來，這裡見證了多少權力的更迭。你能依時序排列我們的身分嗎？來，從荷蘭時期的東印度公司開始，重訪府城的歷史轉折。',
    },
  },
  {
    id: 'chuanmei',
    name: '全美戲院',
    en: 'Chuanmei Theater',
    theme: '庶民娛樂',
    era: '戰後台南',
    badge: '老戲院文化徽章',
    color: '#5C7A3E',
    palette: 'oklch(55% 0.10 130)',
    lat: 22.9929, lng: 120.2009,
    address: '台南市中西區永福路二段 187 號',
    duration: '45–60 分',
    desc: '台南最具代表性的老戲院，全台少數仍保留手繪電影看板的二輪戲院。',
    long: '全美戲院創立於 1950 年，是臺南最具代表性的老戲院之一，也是全臺少數仍保留「手繪電影看板」的二輪戲院。著名電影導演李安童年時期經常在此觀影，戲院因此成為他電影夢的起點。今日的全美戲院由顏振發師傅持續以手繪方式創作大型看板，是臺灣電影文化與庶民娛樂的活歷史。',
    features: [
      { t: '李安童年戲院', d: '導演李安自述影響其電影夢的場所' },
      { t: '手繪電影看板', d: '顏振發師傅至今仍以傳統工法繪製' },
      { t: '二輪片文化', d: '保留二輪戲院經營模式，平價賞片' },
      { t: '老戲院內裝', d: '紅絨座椅、復古售票口、懷舊氛圍' },
      { t: '電影主題工作坊', d: '不定期舉辦手繪看板與電影文化體驗' }
    ],
    npc: {
      name: '放映師 老陳 / 顏師傅',
      role: '老戲院放映師、售票員、手繪看板師',
      avatar: '🎬',
      intro: '哎呀年輕人，來看戲啊？我在這裡放了 40 年的片，每張看板都是顏師傅一筆一筆畫出來的。今天，我來考考你對老戲院的了解。',
    },
  },
  {
    id: 'street',
    name: '安平老街 × 神農街',
    en: 'Anping & Shennong Street',
    theme: '街區技藝',
    era: '清代—當代',
    badge: '古早手藝徽章',
    color: '#B8860B',
    palette: 'oklch(68% 0.11 80)',
    lat: 22.9966, lng: 120.1968,
    address: '台南市中西區神農街 + 安平區延平街',
    duration: '90–120 分',
    desc: '神農街的文青聚落與安平老街的傳統職人，串連台南最有溫度的街區記憶。',
    long: '安平老街與神農街，是臺南街區文化最具代表性的兩條老街。安平老街以荷蘭時期的歷史聚落與蜜餞、劍獅文化聞名；神農街則由清代藥材街蛻變為文青文創聚落。兩條街道串連起臺南的古早手藝、傳統職人與當代創意，是體驗街區技藝與庶民生活最佳的場域。',
    features: [
      { t: '糖蔥畫糖', d: '老師傅現場製作畫糖、椪糖等傳統糖藝' },
      { t: '童玩體驗', d: '陀螺、彈珠台、捏麵人等懷舊童玩' },
      { t: '藍染與竹編', d: '傳統染織與竹編工藝的現場體驗' },
      { t: '神農夜燈籠', d: '神農街夜間紅燈籠是台南最美街景' },
      { t: '安平劍獅文化', d: '老屋山牆上的劍獅圖騰，守護地方百年' }
    ],
    npc: {
      name: '畫糖阿伯 / 捏麵人師傅 / 童玩攤主',
      role: '傳統職人、老街攤商、童玩攤主',
      avatar: '🍬',
      intro: '少年仔來來來，看阿伯畫一個龍給你！這糖蔥啊，是阿公教阿爸，阿爸教我的手藝。要不要試試親手做一個？',
    },
  },
];

/* ── 任務題目 ────────────────────────────────────── */
const TASKS = {
  lin: [
    {
      type: 'quiz', points: 1,
      q: '林百貨於哪一年正式開幕，象徵台南進入摩登消費時代？',
      options: ['1925 年', '1932 年', '1945 年', '1950 年'],
      answer: 1,
      hint: '創辦人林方一於昭和 7 年開幕。',
    },
    {
      type: 'quiz', points: 2,
      q: '林百貨頂樓保留了一項其他百貨沒有的特殊建築，是什麼？',
      options: ['空中花園', '神社遺跡', '溫泉湯屋', '電影院'],
      answer: 1,
      hint: '與宗教信仰有關。',
    },
    {
      type: 'spot', points: 2,
      q: '請找到林百貨頂樓的「空襲彈孔」遺跡並拍照記錄。',
      hint: '位於頂樓神社外牆。',
    },
    {
      type: 'photo', points: 1,
      q: '搭乘林百貨原始鐵柵電梯，並拍下一張復古照片打卡。',
      hint: '電梯內部保留昭和年代原貌。',
    },
  ],
  confucius: [
    {
      type: 'quiz', points: 1,
      q: '台南孔廟在台灣歷史上有何特殊地位？',
      options: ['全台第一座書院', '全台第一座孔廟', '全台第一座縣學', '全台第一座義學'],
      answer: 1,
      hint: '又稱「全台首學」。',
    },
    {
      type: 'quiz', points: 2,
      q: '孔廟主殿「大成殿」內供奉的是何人的牌位？',
      options: ['朱熹', '王陽明', '孔子', '孟子'],
      answer: 2,
      hint: '至聖先師。',
    },
    {
      type: 'spot', points: 2,
      q: '在孔廟禮門找到「下馬碑」並拍照，這是文人必須下馬的界線。',
      hint: '入廟前的東西兩側。',
    },
    {
      type: 'photo', points: 2,
      q: '在祈願區掛上你的木牌，寫下一句願望並合影。',
      hint: '取一筆毛筆書寫體驗。',
    },
  ],
  chihkan: [
    {
      type: 'order', points: 2,
      q: '請依時間順序排列赤崁樓的歷史時期：',
      items: ['日治時期', '荷蘭時期', '清領時期', '明鄭時期'],
      answer: [1, 3, 2, 0],
      hint: '從 1653 年開始。',
    },
    {
      type: 'quiz', points: 2,
      q: '赤崁樓最初由哪個機構建造？',
      options: ['西班牙傳教士', '荷蘭東印度公司', '日本總督府', '清朝水師'],
      answer: 1,
      hint: '17 世紀的歐洲殖民勢力。',
    },
    {
      type: 'spot', points: 2,
      q: '找到園區內的「九座贔屭石碑」並數一數有幾隻完整的龜首。',
      hint: '記錄平定林爽文之役。',
    },
    {
      type: 'quiz', points: 1,
      q: '1662 年發生在赤崁樓的重要歷史事件是？',
      options: ['鄭成功登陸', '荷蘭人投降', '清軍佔領', '日軍接收'],
      answer: 1,
      hint: '族群與政權的交會。',
    },
  ],
  chuanmei: [
    {
      type: 'quiz', points: 1,
      q: '全美戲院創立於哪一年？',
      options: ['1932 年', '1950 年', '1965 年', '1978 年'],
      answer: 1,
      hint: '戰後初期。',
    },
    {
      type: 'quiz', points: 2,
      q: '全美戲院最特別的「文化資產」是什麼？',
      options: ['百年放映機', '手繪電影看板', '紅絲絨座椅', '老式爆米花機'],
      answer: 1,
      hint: '由顏振發師傅持續創作。',
    },
    {
      type: 'spot', points: 2,
      q: '在戲院外找到當期的手繪看板，並拍下一張你最喜歡的細節。',
      hint: '看板師傅每日更換。',
    },
    {
      type: 'design', points: 2,
      q: '設計屬於你的復古電影票（NPC 會給你票根樣板）。',
      hint: '取材自老戲院售票口的票根風格。',
    },
  ],
  street: [
    {
      type: 'diy', points: 2,
      q: '參與「畫糖體驗」：跟著老師傅學畫一隻屬於你的糖龍。',
      hint: '神農街口的糖藝攤位。',
    },
    {
      type: 'diy', points: 2,
      q: '挑戰「童玩三選一」：陀螺、彈珠台、捏麵人任選其一完成。',
      hint: '安平老街中段童玩攤。',
    },
    {
      type: 'spot', points: 1,
      q: '在安平老街找到一隻「劍獅」並合影，這是守護地方的神獸。',
      hint: '位於老屋山牆。',
    },
    {
      type: 'photo', points: 1,
      q: '神農街夜晚紅燈籠點亮時拍下一張街景。',
      hint: '18:00 後最美。',
    },
  ],
};

/* ── 四條路線 ────────────────────────────────────── */
const ROUTES = [
  {
    id: 'history',
    name: '半日文史線',
    duration: '3–4 小時',
    spots: ['confucius', 'chihkan'],
    audience: '文化導覽、歷史解謎族群',
    focus: '文教精神、府城歷史、角色扮演、歷史解謎',
    color: '#7B1E1E',
    icon: '📜',
    bonus: 3,
  },
  {
    id: 'retro',
    name: '半日懷舊線',
    duration: '3–4 小時',
    spots: ['lin', 'chuanmei'],
    audience: '拍照、復古體驗、城市記憶族群',
    focus: '摩登生活、老戲院文化、復古影像記憶',
    color: '#A0522D',
    icon: '🎞',
    bonus: 3,
  },
  {
    id: 'craft',
    name: '半日手作線',
    duration: '3–4 小時',
    spots: ['street'],
    audience: '親子、DIY 體驗族群',
    focus: '古早手藝、童玩互動、街區生活',
    color: '#B8860B',
    icon: '🎋',
    bonus: 2,
  },
  {
    id: 'full',
    name: '一日完整線',
    duration: '7–9 小時',
    spots: ['lin', 'confucius', 'chihkan', 'chuanmei', 'street'],
    audience: '深度旅遊族群',
    focus: '五大主題完整體驗，形成文化、互動、消費完整串聯',
    color: '#3B5F3B',
    icon: '🌅',
    bonus: 5,
  },
];

/* ── 獎勵兌換清單 ────────────────────────────────────── */
const REWARDS = [
  { id: 'r1', cost: 2, name: '數位徽章 1 枚', tier: '基礎', icon: '🏅', desc: '線上集章紀錄，可分享至社群' },
  { id: 'r2', cost: 5, name: '合作店家小額折價券', tier: '小確幸', icon: '🎟', desc: '合作店家現金折抵 50 元' },
  { id: 'r3', cost: 5, name: '限定明信片 1 張', tier: '小確幸', icon: '✉️', desc: '台南藝術家設計版' },
  { id: 'r4', cost: 8, name: 'DIY 體驗折抵券', tier: '進階', icon: '🎨', desc: '畫糖／藍染／竹編折抵 100 元' },
  { id: 'r5', cost: 8, name: '古早手藝小禮', tier: '進階', icon: '🪁', desc: '陀螺、捏麵人、彈珠台任選' },
  { id: 'r6', cost: 10, name: '老街小吃兌換券', tier: '美食', icon: '🍜', desc: '指定店家任一品項免費' },
  { id: 'r7', cost: 10, name: '活動限定紀念章', tier: '美食', icon: '🪙', desc: '手工金屬紀念徽章一枚' },
  { id: 'r8', cost: 15, name: '五大主題通關紀念帆布袋', tier: '通關', icon: '👜', desc: '限量帆布袋＋復古貼紙' },
  { id: 'r9', cost: 18, name: '復古票券組（限定）', tier: '通關', icon: '🎫', desc: '林百貨＋全美戲院票券復刻' },
  { id: 'r10', cost: 20, name: '府城文化禮盒（典藏級）', tier: '典藏', icon: '🎁', desc: '帆布袋＋票券＋徽章＋明信片組' },
];

/* ── 後台 KPI 假資料 ────────────────────────────────────── */
const KPI = {
  totalVisits: 4286,
  taskCompletionRate: 68,
  avgStayIncrease: 32,
  consumptionIncrease: 27,
  partners: 24,
  socialShares: 612,
  satisfaction: 4.4,
  routeDist: [
    { id: 'history', label: '半日文史線', value: 1284 },
    { id: 'retro', label: '半日懷舊線', value: 1102 },
    { id: 'craft', label: '半日手作線', value: 968 },
    { id: 'full', label: '一日完整線', value: 932 },
  ],
  hotSpots: [
    { id: 'lin', label: '林百貨', visits: 1342 },
    { id: 'chihkan', label: '赤崁樓', visits: 1186 },
    { id: 'confucius', label: '孔廟', visits: 1024 },
    { id: 'chuanmei', label: '全美戲院', visits: 821 },
    { id: 'street', label: '安平老街 × 神農街', visits: 1462 },
  ],
  diyBookings: 387,
  rewardsRedeemed: 1428,
  partnerUsage: 73,
  peakHours: [
    { h: '09:00', v: 12 }, { h: '10:00', v: 24 }, { h: '11:00', v: 38 },
    { h: '12:00', v: 31 }, { h: '13:00', v: 28 }, { h: '14:00', v: 52 },
    { h: '15:00', v: 67 }, { h: '16:00', v: 71 }, { h: '17:00', v: 58 },
    { h: '18:00', v: 64 }, { h: '19:00', v: 49 }, { h: '20:00', v: 36 },
  ],
  weeklyTrend: [
    { d: '週一', v: 420 }, { d: '週二', v: 380 }, { d: '週三', v: 510 },
    { d: '週四', v: 542 }, { d: '週五', v: 720 }, { d: '週六', v: 980 }, { d: '週日', v: 734 },
  ],
  recentFeedback: [
    { name: '陳小姐', loc: '台北', rating: 5, text: '林百貨的 NPC 互動超有趣！像穿越回昭和時代。' },
    { name: '林先生', loc: '高雄', rating: 4, text: '路線規劃很順，孔廟祈願木牌是亮點。' },
    { name: '王同學', loc: '台中', rating: 5, text: '神農街畫糖體驗超棒，小孩玩得很開心。' },
    { name: 'Susan', loc: '香港', rating: 4, text: 'QR Code 解鎖任務的設計很新鮮，值得推薦。' },
  ],
};

/* ── localStorage 狀態管理 ────────────────────────────────────── */
const STORAGE_KEY = 'tainan-2.0-state';

function getDefaultState() {
  return {
    points: 0,
    completedTasks: {},   // { 'lin-0': true, 'confucius-2': true }
    badges: {},           // { 'lin': true }
    selectedRoute: null,  // 'history' | 'retro' | 'craft' | 'full'
    redeemed: [],         // [{id, name, time}]
    diyBookings: [],      // [{spot, type, date, name}]
    shares: 0,
    unlockedSpots: {},    // 已掃描 QR 解鎖的場域
  };
}

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...getDefaultState(), ...s };
  } catch {
    return getDefaultState();
  }
}

function saveState(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  document.dispatchEvent(new CustomEvent('state-changed', { detail: s }));
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  document.dispatchEvent(new CustomEvent('state-changed', { detail: getDefaultState() }));
}

/* ── 任務完成處理 ────────────────────────────────────── */
function completeTask(spotId, taskIdx) {
  const s = loadState();
  const key = `${spotId}-${taskIdx}`;
  if (s.completedTasks[key]) return { already: true };
  const task = TASKS[spotId][taskIdx];
  s.completedTasks[key] = true;
  s.points += task.points;
  // 場域完成所有任務則發徽章
  const all = TASKS[spotId].every((_, i) => s.completedTasks[`${spotId}-${i}`]);
  let badgeEarned = false;
  if (all && !s.badges[spotId]) {
    s.badges[spotId] = true;
    badgeEarned = true;
  }
  saveState(s);
  return { points: task.points, badgeEarned, total: s.points };
}

function unlockSpot(spotId) {
  const s = loadState();
  s.unlockedSpots[spotId] = true;
  saveState(s);
}

function selectRoute(routeId) {
  const s = loadState();
  s.selectedRoute = routeId;
  saveState(s);
}

function redeemReward(rewardId) {
  const s = loadState();
  const r = REWARDS.find(x => x.id === rewardId);
  if (!r || s.points < r.cost) return { ok: false };
  s.points -= r.cost;
  s.redeemed.push({ id: r.id, name: r.name, time: new Date().toISOString() });
  saveState(s);
  return { ok: true, reward: r };
}

function bookDIY(spotId, type, date, name) {
  const s = loadState();
  s.diyBookings.push({ spotId, type, date, name, ts: Date.now() });
  saveState(s);
}

function recordShare() {
  const s = loadState();
  s.shares += 1;
  saveState(s);
}

/* ── 通用 helper ────────────────────────────────────── */
function getSpot(id) { return SPOTS.find(s => s.id === id); }
function getRoute(id) { return ROUTES.find(r => r.id === id); }
function getCompletedCount(spotId) {
  const s = loadState();
  return TASKS[spotId].filter((_, i) => s.completedTasks[`${spotId}-${i}`]).length;
}

/* ── 下一兌換門檻 ────────────────────────────────────── */
function getNextReward() {
  const s = loadState();
  const remaining = REWARDS.filter(r => r.cost > s.points)
    .sort((a, b) => a.cost - b.cost);
  return remaining[0] || null;
}

/* ── 共用 NAV / FOOTER 渲染 ────────────────────────────────────── */
function renderNav(activeId, root = '') {
  const s = loadState();
  return `
  <nav class="nav">
    <a href="${root}index.html" class="nav-logo">
      <div class="nav-logo-mark">藝</div>
      <div class="nav-logo-text">
        <div class="nav-logo-title">藝饗台南 <span style="color:var(--gold);">2.0</span></div>
        <div class="nav-logo-sub">府城五種文化記憶</div>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html" ${activeId==='home'?'class="active"':''}>首頁</a></li>
      <li><a href="${root}routes.html" ${activeId==='routes'?'class="active"':''}>選路線</a></li>
      <li><a href="${root}explore.html" ${activeId==='explore'?'class="active"':''}>五大主題</a></li>
      <li><a href="${root}points.html" ${activeId==='points'?'class="active"':''}>我的集點</a></li>
      <li><a href="${root}rewards.html" ${activeId==='rewards'?'class="active"':''}>兌換</a></li>
      <li><a href="${root}dashboard.html" ${activeId==='dashboard'?'class="active"':''}>後台</a></li>
    </ul>
    <a href="${root}points.html" class="nav-points">
      <span class="nav-points-icon">🪙</span>
      <span class="nav-points-num">${s.points}</span>
      <span class="nav-points-label">點</span>
    </a>
  </nav>`;
}

function renderFooter(root = '') {
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <div class="footer-logo">藝饗台南 2.0</div>
        <div class="footer-desc">走進府城五種文化記憶的沉浸式體驗計畫。<br>讓台南的文化被看見、被走進、被參與、被記住。</div>
      </div>
      <div class="footer-col">
        <h4>五大主題</h4>
        <ul>
          <li><a href="${root}spot/lin.html">林百貨 · 摩登生活</a></li>
          <li><a href="${root}spot/confucius.html">孔廟 · 文教精神</a></li>
          <li><a href="${root}spot/chihkan.html">赤崁樓 · 歷史轉折</a></li>
          <li><a href="${root}spot/chuanmei.html">全美戲院 · 庶民娛樂</a></li>
          <li><a href="${root}spot/street.html">老街 · 街區技藝</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>關於計畫</h4>
        <ul>
          <li><a href="${root}routes.html">選擇路線</a></li>
          <li><a href="${root}points.html">我的集點</a></li>
          <li><a href="${root}rewards.html">兌換獎勵</a></li>
          <li><a href="${root}dashboard.html">營運後台</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 藝饗台南趣 · 走進府城</span>
      <span>合作洽詢 / hello@tainan-explore.tw</span>
    </div>
  </footer>`;
}

/* expose to global */
window.APP = {
  SPOTS, TASKS, ROUTES, REWARDS, KPI,
  loadState, saveState, resetState,
  completeTask, unlockSpot, selectRoute, redeemReward, bookDIY, recordShare,
  getSpot, getRoute, getCompletedCount, getNextReward,
  renderNav, renderFooter,
};
