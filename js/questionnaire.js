(() => {
  const surveyData = {
    ui: {
      zh: {
        back: '返回上一题',
        next: '继续',
        input: '请输入...',
        langTitle: '请选择调查语言 / 言語を選択してください / Select Language',
      },
      ja: {
        back: '戻る',
        next: '次へ',
        input: '入力欄',
        langTitle: '言語を選択してください',
      },
      en: {
        back: 'Back',
        next: 'Next',
        input: 'Please enter...',
        langTitle: 'Select Language',
      },
    },
    questions: [
      {
        id: 'q4',
        text: {
          zh: '4. 您平均每天使用社交媒体的时间是？',
          ja: '4. 1日あたりのSNS利用時間は？',
          en: '4. Average daily social media time?',
        },
        options: [
          { val: 1, text: { zh: '1小时以内', ja: '1時間未満', en: 'Less than 1h' }, nextId: 'q5' },
          { val: 2, text: { zh: '1-3小时', ja: '1〜3時間', en: '1~3 hours' }, nextId: 'q5' },
          { val: 3, text: { zh: '3-5小时', ja: '3~5時間', en: '3~5 hours' }, nextId: 'q5' },
          { val: 4, text: { zh: '5小时以上', ja: '5時間以上', en: 'More than 5h' }, nextId: 'q4a' },
        ],
      },
      {
        id: 'q4a',
        text: {
          zh: '4a. 您是否曾尝试主动减少使用时间？',
          ja: '4a. 利用時間を減らそうとしたことはありますか？',
          en: '4a. Tried to reduce usage?',
        },
        options: [{ val: 1, text: { zh: '是', ja: 'はい', en: 'Yes' }, nextId: 'q5' }],
      },
      {
        id: 'q5',
        text: {
          zh: '5. 您通常在什么时间段使用社交媒体？（可多选）',
          ja: '5. SNSを主に使う時間帯はいつですか？（複数選択可）',
          en: '5. What time of day do you usually use social media? (Select all that apply)',
        },
        options: [
          { val: 1, text: { zh: '早晨起床后', ja: '朝起きた後', en: 'After waking up' }, nextId: 'q7' },
          { val: 2, text: { zh: '通勤途中', ja: '通勤途中', en: 'During commute' }, nextId: 'q7' },
          { val: 3, text: { zh: '工作/学习间隙', ja: '仕事/勉強の合間', en: 'During work/study breaks' }, nextId: 'q7' },
          { val: 4, text: { zh: '睡前', ja: '寝る前', en: 'Before bed' }, nextId: 'q7' },
        ],
      },
      {
        id: 'q7',
        specialEffect: 'replaceText',
        initialText: {
          zh: '7. 您会想要试试养金鱼吗？',
          ja: '7. 金魚を飼ってみたいと思いますか？',
          en: '7. Would you consider keeping a goldfish?',
        },
        actualText: {
          zh: '7. 您发布内容后，通常会检查热度数据吗？',
          ja: '7. 投稿した後、再生数やいいね数を確認しますか？',
          en: '7. Do you check metrics after posting?',
        },
        options: [
          { val: 1, text: { zh: '从不', ja: 'まったくない', en: 'Never' }, nextId: 'q17' },
          { val: 2, text: { zh: '有时', ja: '時々', en: 'Sometimes' }, nextId: 'q17' },
          { val: 3, text: { zh: '总是', ja: '必ずする', en: 'Always' }, nextId: 'q17' },
        ],
      },
      {
        id: 'q17',
        img: 'photo1.png',
        alt: '一位女性的照片',
        text: { zh: '17. 您是否认识这位女性？', ja: '17. この女性を知ってますが？', en: '17. Do you recognize this woman?' },
        options: [
          { val: 'yes', text: { zh: '是', ja: 'はい', en: 'Yes' }, nextId: 'video_top' },
          { val: 'no', text: { zh: '否', ja: 'いいえ', en: 'No' }, nextId: 'video_top' },
        ],
      },
      {
        id: 'video_top',
        video: 'https://www.youtube.com/embed/Ml_gxQOcEsg',
        text: {
          zh: '在继续之前，请观看以下短片。',
          ja: '続ける前に、以下の短い動画をご覧ください。',
          en: 'Before we continue, please watch the following short video.',
        },
        options: [{ val: 'ok', text: { zh: '我了解了', ja: '了解した', en: 'I have watched the video' }, nextId: 'q19' }],
      },
      {
        id: 'q19',
        text: { zh: '19. 您经常以倍速观看视频吗？', ja: '19. 倍速で動画を見ることありますか？', en: '19. Do you often watch videos at double speed?' },
        options: [
          { val: 1, text: { zh: '经常', ja: 'よく', en: 'Often' }, nextId: 'q20' },
          { val: 2, text: { zh: '偶尔', ja: '時々', en: 'Occasionally' }, nextId: 'q20' },
          { val: 3, text: { zh: '从不', ja: 'まったくない', en: 'Never' }, nextId: 'q20' },
        ],
      },
      {
        id: 'q20',
        text: {
          zh: '20. 您上一次感受到自己的双手是什么时候？',
          ja: '20. 最後に自分の手の感覚を意識したのはいつですか？',
          en: '20. When did you last notice the feeling of your own hands?',
        },
        options: [
          { val: 1, text: { zh: '就在刚才', ja: 'さっき', en: 'Just now' }, nextId: 'news_top' },
          { val: 2, text: { zh: '几小时前', ja: '数時間前', en: 'A few hours ago' }, nextId: 'news_top' },
          { val: 3, text: { zh: '我不太记得了', ja: 'あまり覚えていない', en: "I'm not really sure" }, nextId: 'news_top' },
          { val: 4, text: { zh: '我不理解这个问题', ja: 'この質問の意味がよくわからない', en: "I don't understand the question" }, nextId: 'news_top' },
        ],
      },
      {
        id: 'news_top',
        text: {
          zh: '以下是近期流传的几条新闻报道。请根据您的判断，评估每条信息的可信度。',
          ja: '以下は、最近ネット上で広まっているニュースです。それぞれについて、信頼度を判断してください。',
          en: 'The following are recent news reports circulating online. Please evaluate the credibility of each piece of information based on your judgment.',
        },
        options: [{ val: 'ok', text: { zh: '我了解了', ja: '了解した', en: 'I agreed' }, nextId: 'news_a' }],
      },
      {
        id: 'news_a',
        type: 'news',
        img: 'NEWS1.png',
        tag: 'NEWS A',
        text: {
          zh: '研究人员在对多地淡水养殖场的抽样检测中发现，部分淡水鱼类体内检出异尖线虫及阔节裂头绦虫幼虫，生食或半生食此类水产品存在感染风险。相关机构已建议消费者确保充分加热后食用。',
          ja: '複数の淡水養殖場を対象にした抽出検査で、一部の淡水魚の体内からアニサキスおよび広節裂頭条虫の幼虫が検出されました。生食・半生食による感染リスクがあるとして、関係機関は十分に加熱してから食べるよう呼びかけています。',
          en: 'Researchers conducting spot-checks at multiple freshwater fish farms have detected anisakis and broad tapeworm larvae in certain fish samples. Eating such fish raw or undercooked poses an infection risk.Relevant health authorities have recommended thorough cooking before consumption.',
        },
        options: [
          { val: 1, text: { zh: '很可能是真实的', ja: '信用できる', en: 'Very likely true' }, nextId: 'end' },
          { val: 2, text: { zh: '很可能是虚假的', ja: '信用できない', en: 'Very likely false' }, nextId: 'question_input' },
          { val: 3, text: { zh: '不确定', ja: 'わからない', en: 'Not sure' }, nextId: 'question_input' },
        ],
      },
      {
        id: 'question_input',
        text: { zh: '18. 您认为她发生了什么？', ja: '18. 彼女に何が起きたと思いますか？', en: '18. What do you think happened to her?' },
        type: 'textarea',
        options: [{ val: 'ok', text: { zh: '提交', ja: '提出', en: 'Submit' }, nextId: 'end' }],
      },
    ],
  };

  const BASE_IMG = 'asset/';
  let currentLang = null;
  let currentId = 'lang-select';
  let history = [];

  function getContainer() {
    return document.getElementById('survey-container');
  }

  function renderLangSelect() {
    const container = getContainer();
    if (!container) return;
    container.innerHTML = `
      <h2 style="text-align:center">${surveyData.ui.zh.langTitle}</h2>
      <div class="btn-list">
        <button data-lang="zh">简体中文</button>
        <button data-lang="ja">日本語</button>
        <button data-lang="en">English</button>
      </div>
    `;

    const buttons = container.querySelectorAll('button[data-lang]');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => startSurvey(btn.getAttribute('data-lang')));
    });
  }

  function startSurvey(lang) {
    currentLang = lang;
    currentId = 'q4';
    history = [];
    renderQuestion();
  }

  function renderQuestion() {
    const container = getContainer();
    if (!container) return;

    if (currentId === 'end') {
      showEnd();
      return;
    }

    const q = surveyData.questions.find((item) => item.id === currentId);
    if (!q) {
      container.innerHTML = `<div class="end-text">Missing question: ${currentId}</div>`;
      return;
    }

    let html = '';

    if (q.specialEffect === 'replaceText') {
      html += `<h2 id="dynamic-text">${q.initialText[currentLang]}</h2>`;
      setTimeout(() => {
        const el = document.getElementById('dynamic-text');
        if (el) el.innerText = q.actualText[currentLang];
      }, 500);
    } else {
      if (q.type === 'news') html += `<span class="news-tag">${q.tag}</span>`;
      html += `<h2>${q.text[currentLang]}</h2>`;
    }

    if (q.img || q.type === 'news') {
      const imgSrc = q.img ? BASE_IMG + q.img : BASE_IMG + 'placeholder.png';
      html += `<img src="${imgSrc}" class="question-img" onerror="this.src='${BASE_IMG}placeholder.png'">`;
    }

    if (q.video) {
      html += `<iframe src="${q.video}" class="question-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (q.type === 'textarea') {
      html += `
        <div class="btn-list">
          <textarea id="user-input"
            style="width: 100%; height: 120px; padding: 12px; border-radius: 8px; border: 1.5px solid #d7d8da; font-family: inherit; resize: none;"
            placeholder="${surveyData.ui[currentLang].input}"></textarea>
      `;
      q.options.forEach((opt) => {
        html += `<button data-next="${opt.nextId}" data-action="saveAndNext" style="text-align: center; background: #5a4765; color: white;">${opt.text[currentLang]}</button>`;
      });
      html += `</div>`;
    } else {
      html += `<div class="btn-list">`;
      q.options.forEach((opt) => {
        html += `<button data-next="${opt.nextId}" data-action="navigate">${opt.text[currentLang]}</button>`;
      });
      html += `</div>`;
    }

    if (history.length > 0) {
      html += `<div class="nav"><button class="back-btn" data-action="goBack">${surveyData.ui[currentLang].back}</button></div>`;
    }

    container.innerHTML = html;

    const actionButtons = container.querySelectorAll('button[data-action]');
    actionButtons.forEach((btn) => {
      const action = btn.getAttribute('data-action');
      const nextId = btn.getAttribute('data-next');
      if (action === 'navigate') btn.addEventListener('click', () => navigate(nextId));
      if (action === 'saveAndNext') btn.addEventListener('click', () => saveAndNext(nextId));
      if (action === 'goBack') btn.addEventListener('click', () => goBack());
    });
  }

  function saveAndNext(nextId) {
    const inputEl = document.getElementById('user-input');
    const inputVal = inputEl ? inputEl.value : '';
    console.log('用户输入内容:', inputVal);
    navigate(nextId);
  }

  function navigate(nextId) {
    history.push(currentId);
    currentId = nextId;
    renderQuestion();
  }

  function goBack() {
    if (history.length > 0) {
      currentId = history.pop();
      renderQuestion();
    }
  }

  function showEnd() {
    const container = getContainer();
    if (!container) return;
    const endMsg = {
      zh: '感谢您完成本次调查。您的回答已记录。请继续您的一天。<br><br>如果您对本调查有任何疑问，或希望了解更多关于富士神经科学研究中心的信息，欢迎通过以下方式联系我们：<br>X（Twitter）：@FRIN_Yatsume<br>Gmail: yatsume0401@gmail.com<br>我们通常在48小时内回复。',
      ja: 'アンケートにご協力ありがとうございました。どうぞ、よい一日をお過ごしください。<br><br>本アンケートに関するご質問や、<br><br>富士神経科学研究センターについての詳細をお知りになりたい方は、<br><br>以下の方法でご連絡ください：<br><br>X（Twitter）：@FRIN_Yatsume<br><br>Gmail：yatsume0401@gmail.com<br><br>通常48時間以内にご返信いたします。',
      en: 'Thank you for completing this survey. Your responses have been recorded. Please go on with your day.<br><br>If you have any questions about this survey, <br><br>or would like to learn more about the Fuji Research Institute of Neuroscience, <br><br>please reach out through the following:<br><br>X (Twitter): @FRIN_Yatsume<br>Gmail: yatsume0401@gmail.com<br>We typically respond within 48 hours.',
    };
    container.innerHTML = `<div class="end-text">${endMsg[currentLang]}</div>`;
  }

  function boot() {
    const container = getContainer();
    if (!container) return;
    renderLangSelect();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
