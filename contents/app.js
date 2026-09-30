const posterPrompt = `这是一幅中国风手绘风格的杭州两日禅意人文之旅行程导览双语海报，整体采用淡雅米黄色仿古宣纸背景，四角饰有传统回纹边框；画面中央以一条飘逸的云纹卷轴丝带贯穿连接两天行程，上方大标题为“杭州·两日禅意人文之旅”（“Hangzhou: A Two-Day Journey of Zen, Culture, and Humanity”），副标题为“祈福·山水·寻梦”（“Prayer · Landscape · Dream-Seeking”）；左侧为“第一天：灵山祈福，登高求财”（“Day 1: Praying at Ling Shan, Ascending for Prosperity”），依次展示：“07:30 抵达灵隐”（“Arrive at Lingyin Temple”），配灵隐寺山门（牌匾写着"灵隐寺"）与香炉袅袅青烟图，文字说明“灵隐寺还愿，进香礼佛，诚心祈愿”（“Go to Lingyin Temple to fulfill a vow, offer incense, and pray sincerely”）；“10:30 永福寺寻幽”（“Explore Yongfu Temple’s Serenity”），配古朴寺院掩映于苍翠古树间图，文字说明“最美寺庙，静心宋韵”（“The most beautiful temple, serene with Song charm”）；“12:00 素斋休整”（“Vegetarian Meal & Rest”），配一碗热气腾腾素面与小茶盏置于竹编托盘上图；“16:00 龙井问茶”（“Tea Tasting at Longjing”），配层叠翠绿茶园与紫砂壶向青瓷杯倾注茶汤图，文字说明“梅家坞茶园慢饮”（“Leisurely tea tasting, Tea Garden Meijiawu”）；右侧为“第二天：西湖水墨，南宋旧梦”（“Day 2: Ink-Wash West Lake, Dreams of the Southern Song”），依次展示：“09:00 西湖游船”（“Boat Tour on West Lake”），配乌篷船泛舟湖上、三潭印月石塔倒影水中图，文字说明“泛舟赏三潭印月”（“Boating to view the Three Pools Mirroring the Moon”）；“12:00 湖畔午餐”（“Lakeside Lunch”），文字说明“体验楼外楼餐厅” (“Experience Lou Wai Lou Restaurant”)，配一盘色泽红亮的鱼，上面淋酱汁；“14:00 苏堤/浴鹄湾”（“Su Causeway / Yuhu Bay”），配拱桥横跨碧波、垂柳依依图，文字说明“漫步长堤或寻秘境”（“Stroll along the causeway or discover hidden gems”）；底部设“出行小贴士”板块（“Travel Tips”），含灯泡图标及三项提示：“住宿 龙翔桥/凤起路便捷”（“Accommodation: Longxiang Bridge / Fengqi Road for convenience”），“交通 地铁+单车最佳”（“Transport: Metro + bike is optimal”），“季节 早春注意保暖”（“Season: Dress warmly in early spring”），每项前分别配床、自行车+地铁、雪花+樱花图标；全图文字均采用楷体书法风格，中英文严格对应排布——中文在上、英文紧随其下，整体构图疏密有致、意境悠远，充满文人画气息与禅意生活美学。`;

const images = [
  {
    title: "春日花园礼服",
    subtitle: "GPT 生成 · 手绘水彩 · 透明 PNG",
    category: "礼服设计",
    date: "2026.09.29",
    src: "./images/spring-garden-gown.png",
    transparent: true,
    description: "按第三版描述生成：浅柠檬黄、嫩绿和象牙白的公主裙；腰间三朵玫瑰，外裙向两侧展开，露出白色内裙。",
    prompt: `Use case: stylized-concept. Asset type: standalone transparent PNG fashion-design illustration, vertical 9:16. Depict ONE elegant romantic full-length evening gown only, centered with the entire silhouette visible and a little transparent margin all around; no person, mannequin, head, limbs or props. Closely fitted corset-like bodice with distinct fine vertical hand-drawn pleating, folds and texture, plus an asymmetric shoulder/neckline with a restrained sculptural fabric-flower decoration on one side. At the gown's RIGHT side of the waist (viewer's left when viewed straight-on), place a prominent cluster of ABOUT THREE white or palest green roses; this is the main visual focal point. Below, a very full A-line/princess skirt, light lemon-yellow and fresh tender-green outer chiffon/organza panels sweeping open and draping to both sides, clearly exposing a broad ivory-white inner skirt down the center. Soft spring-garden palette: pale lemon, young green, ivory white, subtle green line edging. Show light silk, tulle and chiffon through abundant loose expressive sketched fold lines, translucent watercolor washes and graceful natural drape; romantic couture designer's hand sketch, airy and sophisticated, not a photo, not photorealistic. Edges of skirt have soft irregular wavy folds. TRUE transparent alpha background suitable for compositing; do not paint or include checkerboard squares. No text, logo, watermark, shadows or setting.`
  },
  {
    title: "蝴蝶结玫瑰礼服",
    subtitle: "GPT 生成 · 手绘水彩 · 透明 PNG",
    category: "礼服设计",
    date: "2026.09.29",
    src: "./images/bow-rose-gown.png",
    transparent: true,
    description: "按第二版描述生成：肩部和腰间各三朵白玫瑰，大蝴蝶结与细长绿色丝带，黄绿色外裙过渡到奶油白裙摆。",
    prompt: `Use case: stylized-concept. Asset type: isolated transparent PNG fashion illustration, vertical 9:16. Create ONE exquisite full-length evening gown displayed as a garment-only fashion-design cutout on an invisible form, no human figure or mannequin. Romantic dreamy hand-painted watercolor and refined digital fashion sketch. Silhouette: fitted asymmetrically draped off-shoulder bodice with the wearer's RIGHT shoulder and arm area unobstructed (the gown fabric gathers toward the opposite shoulder), then a broad voluminous A-line skirt to the floor. Palette: pale yellow-green, soft chartreuse and sage over creamy pure white. Bodice and upper shoulder/chest show elegant vertical ruched folds in airy silk and translucent tulle. At the wearer's RIGHT upper shoulder, a precise cluster of THREE white rose flowers. Waist is the dramatic focal point: a large, wide, softly drooping fabric bow / sash knot, with a separate cluster of EXACTLY THREE white roses at its center, echoing the shoulder. Beneath the bow, one long slim green ribbon falls freely and ends in a tiny tassel or flower. The full skirt is expansive and naturally ruffled with a wavy outline: light yellow-green translucent tulle across its upper portion flowing into visibly heavier pure cream-white fabric across its lower portion, delicate natural folds and drape. Keep the entire gown including all hems and ribbon tips in frame with margins. Painterly pencil edges and gentle watercolor gradients; high-end couture concept art, not a photograph. TRUE transparent alpha background for direct compositing. Do NOT draw a checkerboard, colored background, shadow backdrop, person, face, arms, text, logo or watermark.`
  },
  {
    title: "浅绿白玫瑰礼服",
    subtitle: "GPT 生成 · 手绘水彩 · 透明 PNG",
    category: "礼服设计",
    date: "2026.09.29",
    src: "./images/green-rose-gown.png",
    transparent: true,
    description: "按第一版描述生成：单肩、交错褶皱、白玫瑰花饰、浅黄绿色多层薄纱及露出的纯白内裙。",
    prompt: `Use case: stylized-concept. Asset type: standalone fashion-design dress illustration PNG cutout. Create a single full-length elegant evening gown, shown front three-quarter view, centered on a vertical 9:16 canvas with generous clear space around the entire silhouette. Silhouette: fitted wrapped bodice and voluminous flowing A-line ballgown skirt reaching the floor; asymmetrical one-shoulder neckline. One single white rose adorns the shoulder, and exactly three white roses form a cluster at the waist. Fine long waist ties hang naturally. Bodice has crossed, overlapping pleats. Fabric is feather-light translucent chiffon and tulle in fresh pale yellow-green, with softly varied lime, sage and pale chartreuse watercolor shading that describes the folds. Multi-layer skirt: outer translucent layer has a graceful slit, wavy ruffled hem and floating panels, revealing a pure white inner skirt. Style: hand-drawn couture concept sketch combining watercolor washes, subtle pencil lines and digital fashion illustration; irregular expressive edges, delicate translucent brushwork, graceful movement. Isolated garment only: no person, no mannequin, no props, no words, no logo, no watermark. Crucial: true alpha-channel transparent background, NOT a painted gray-and-white checkerboard, NOT a studio backdrop. Preserve semi-transparency in sheer fabric areas.`
  },
  {
    title: "西湖水墨书签 · 定稿",
    subtitle: "GPT 生成 · 国风插画 · 1:2 竖版",
    category: "杭州西湖",
    date: "2026.09.24",
    src: "./images/west-lake-bookmark.png",
    transparent: false,
    description: "按 5×10 厘米书签比例生成的第二张西湖水墨图；柳枝、乌篷船、远山与塔影构成竖幅画面。",
    prompt: `Vertical Chinese ink-and-watercolor art print, exact 1:2 width-to-height ratio for a 5 cm × 10 cm bookmark. Hangzhou West Lake at dawn: a small traditional covered boat on still water, a willow branch, hazy distant pagoda and layered mountains. Warm ivory rice-paper texture, muted jade and ink gray with tiny restrained vermilion accent. Refined literati painting, legible at small size, full bleed with trim-safe composition. No words, letters, logos, watermark or border.`
  },
  {
    title: "西湖水墨书签 · 初稿",
    subtitle: "GPT 生成 · 国风插画 · 1:2 竖版",
    category: "杭州西湖",
    date: "2026.09.24",
    src: "./images/west-lake-study.png",
    transparent: false,
    description: "同一书签需求的第一张生成图；保留水墨柳枝、湖面乌篷船、远塔和宣纸质感。",
    prompt: `Use case: stylized-concept. Asset type: small vertical art print or bookmark, intended final trim size 5 cm wide by 10 cm tall. Create one refined Chinese ink-and-watercolor illustration inspired by Hangzhou's West Lake: a small traditional covered boat drifting across still water, a graceful willow branch descending from the upper edge, hazy layered mountains and a distant pagoda, delicate ripples and mist. Warm ivory rice-paper texture, muted jade green, ink gray, and a tiny restrained vermilion accent. Elegant literati-painting mood, restrained detail that remains legible at a small physical print size. IMPORTANT: exact portrait aspect ratio 1:2 (width:height), full-bleed composition with safe margins for trimming. No words, no lettering, no logos, no watermarks, no border.`
  },
  {
    title: "杭州双语海报 · 混元4",
    subtitle: "用户提供 · 同题模型对比",
    category: "海报对比",
    date: "混元4",
    src: "./images/poster-hunyuan4.png",
    transparent: false,
    description: "你提供的四张杭州行程海报对比图之一；你确认第 1 张由混元4生成。四张图使用同一段中文需求提示词。",
    prompt: posterPrompt,
    include: false
  },
  {
    title: "杭州双语海报 · ChatGPT",
    subtitle: "GPT 生成 · 同题模型对比",
    category: "海报对比",
    date: "ChatGPT",
    src: "./images/poster-chatgpt.png",
    transparent: false,
    description: "你提供的四张杭州行程海报对比图之一；你确认第 2 张由 ChatGPT 生成。四张图使用同一段中文需求提示词。",
    prompt: posterPrompt
  },
  {
    title: "杭州双语海报 · Qwen-Image-2512",
    subtitle: "用户提供 · 同题模型对比",
    category: "海报对比",
    date: "Qwen",
    src: "./images/poster-qwen.png",
    transparent: false,
    description: "你提供的四张杭州行程海报对比图之一；你确认第 3 张由 Qwen 生成，在原对比任务中标记为 Qwen-Image-2512。四张图使用同一段中文需求提示词。",
    prompt: posterPrompt,
    include: false
  },
  {
    title: "杭州双语海报 · 即梦",
    subtitle: "用户提供 · 同题模型对比",
    category: "海报对比",
    date: "即梦",
    src: "./images/poster-jimeng.png",
    transparent: false,
    description: "你提供的四张杭州行程海报对比图之一；你确认第 4 张由即梦生成。四张图使用同一段中文需求提示词。",
    prompt: posterPrompt,
    include: false
  }
].filter(item => item.include !== false);

const importedImages = [
  ["FDE 配图｜系统落地难题", "FDE 科普配图", "2026.09.14", "gpt-fde-01-system-rollout.png", "用插画表现企业系统上线后落地困难的业务现场。"],
  ["FDE 配图｜连接业务与技术", "FDE 科普配图", "2026.09.14", "gpt-fde-02-business-tech.png", "用插画表现 FDE 在客户业务与技术团队之间建立连接。"],
  ["FDE 配图｜理解客户业务", "FDE 科普配图", "2026.09.14", "gpt-fde-03-client-understanding.png", "表现一线人员借助数字工具梳理业务问题的场景。"],
  ["FDE 配图｜搭建实用工具", "FDE 科普配图", "2026.09.14", "gpt-fde-04-practical-tool.png", "表现面向真实业务问题构建实用工具的过程。"],
  ["FDE 配图｜行业实际成果", "FDE 科普配图", "2026.09.14", "gpt-fde-05-industry-results.png", "表现技术方案落地到行业现场后的实际成果。"],
  ["咖啡馆里的都市人像", "人像写真", "2026.09.18", "gpt-portrait-cafe.png", "暖色咖啡馆环境中的写实风格女性人像。"],
  ["城市通勤穿搭", "人像写真", "2026.09.20", "gpt-portrait-city-style.png", "城市街景中的全身通勤穿搭人像。"],
  ["雪山经幡下的奇幻人物", "奇幻人像", "2026.09.18", "gpt-fantasy-mountain-woman.png", "雪山与经幡背景中的奇幻风格人物肖像。"],
  ["书房挥毫的长者插画", "人物插画", "2026.09.15", "gpt-elder-calligraphy-illustration.png", "中式书房中长者挥毫写字的暖色插画。"],
  ["国风书法长者肖像", "人物插画", "2026.09.15", "gpt-elder-calligraphy-portrait.png", "以书法与传统室内陈设为背景的长者肖像。"],
  ["冰雪奇幻女战士", "奇幻人像", "2026.09.20", "gpt-fantasy-snow-woman.png", "雪山、冰瀑背景中的白发奇幻角色全身像。"],
].map(([title, category, date, file, description]) => ({
  title,
  subtitle: "GPT 生成 · 项目原图",
  category,
  date,
  src: `./images/${file}`,
  transparent: false,
  description,
  prompt: "原始提示词未保存在对应项目目录中；此图来自 GPT 图片生成记录。"
}));

importedImages.push(...Array.from({ length: 16 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    title: `AI 龙虾标志探索 ${number}`,
    subtitle: "GPT 生成 · 项目原图",
    category: "Logo 方案",
    date: "2026.09.30",
    src: `./images/gpt-logo-${number}.png`,
    transparent: false,
    description: `AI 龙虾品牌标志设计探索方案 ${number}。`,
    prompt: "GPT 生成的 AI 龙虾品牌标志探索图。"
  };
}));

images.push(...importedImages);
const allImages = [...images];
let visibleImages = allImages;

const gallery = document.getElementById("gallery");
const galleryLoader = document.getElementById("gallery-loader");
const dialog = document.getElementById("detail-dialog");
const closeButton = document.getElementById("close-button");
const detailImage = document.getElementById("detail-image");
const detailVisual = document.getElementById("detail-visual");
let lastTrigger = null;
let renderedCount = 0;
let isAppending = false;
const batchSize = 8;

const imageCount = document.getElementById("image-count");
const searchInput = document.getElementById("image-search");

function updateLoadingStatus() {
  imageCount.textContent = `${String(visibleImages.length).padStart(2, "0")} 张图片 · 已显示 ${renderedCount}`;
  galleryLoader.textContent = visibleImages.length === 0
    ? "没有找到匹配的图片"
    : renderedCount < visibleImages.length
      ? `继续下滑，加载更多（${renderedCount} / ${visibleImages.length}）`
      : `已显示全部 ${visibleImages.length} 张图片`;
}

function renderCard(item, index) {
  const article = document.createElement("article");
  article.className = "gallery-card";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "card-button";
  button.setAttribute("aria-label", `查看${item.title}的图片与提示词详情`);

  const stage = document.createElement("span");
  stage.className = `image-stage${item.transparent ? " transparent" : ""}`;
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.title;
  img.loading = "lazy";
  stage.append(img);

  const meta = document.createElement("span");
  meta.className = "card-meta";
  const kicker = document.createElement("span");
  kicker.className = "card-kicker";
  kicker.textContent = `${String(index + 1).padStart(2, "0")} / ${item.category} / ${item.date}`;
  const title = document.createElement("span");
  title.className = "card-title";
  title.textContent = item.title;
  const subtitle = document.createElement("span");
  subtitle.className = "card-subtitle";
  subtitle.textContent = item.subtitle;
  meta.append(kicker, title, subtitle);
  button.append(stage, meta);
  article.append(button);
  gallery.append(article);

  button.addEventListener("click", () => {
    lastTrigger = button;
    detailImage.src = item.src;
    detailImage.alt = item.title;
    detailVisual.classList.toggle("transparent", item.transparent);
    const imageIndex = visibleImages.indexOf(item) + 1;
    document.getElementById("detail-index").textContent = `IMAGE ${String(imageIndex).padStart(2, "0")} / ${String(visibleImages.length).padStart(2, "0")}`;
    document.getElementById("detail-category").textContent = `${item.category} · ${item.date}`;
    document.getElementById("detail-title").textContent = item.title;
    document.getElementById("detail-description").textContent = item.description;
    document.getElementById("detail-prompt").textContent = item.prompt;
    dialog.showModal();
  });
}

function appendBatch() {
  if (isAppending || renderedCount >= visibleImages.length) return;
  isAppending = true;
  const end = Math.min(renderedCount + batchSize, visibleImages.length);
  for (let index = renderedCount; index < end; index += 1) {
    renderCard(visibleImages[index], index);
  }
  renderedCount = end;
  updateLoadingStatus();
  isAppending = false;

  if (renderedCount >= visibleImages.length) {
    observer?.disconnect();
    window.removeEventListener("scroll", onScroll);
  }
}

function applySearch() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  visibleImages = query
    ? allImages.filter(item => [item.title, item.subtitle, item.category, item.date, item.description, item.prompt]
        .some(value => String(value).toLocaleLowerCase().includes(query)))
    : allImages;

  gallery.replaceChildren();
  renderedCount = 0;
  observer?.disconnect();
  window.removeEventListener("scroll", onScroll);
  updateLoadingStatus();

  if (visibleImages.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "没有找到匹配的图片，试试其他关键词。";
    gallery.append(emptyState);
    return;
  }

  appendBatch();
  if (observer) observer.observe(galleryLoader);
  else window.addEventListener("scroll", onScroll, { passive: true });
}

function onScroll() {
  if (galleryLoader.getBoundingClientRect().top < window.innerHeight + 600) appendBatch();
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) appendBatch();
    }, { rootMargin: "600px 0px" })
  : null;

updateLoadingStatus();
appendBatch();
if (observer) observer.observe(galleryLoader);
else window.addEventListener("scroll", onScroll, { passive: true });
searchInput.addEventListener("input", applySearch);

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => lastTrigger?.focus());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
