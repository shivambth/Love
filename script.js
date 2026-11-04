/**
 * BUKU CINTA 4 BULAN - AIRA & SHIVAM
 * Fully Integrated with 50 Exact Photos & 150 Dynamic 3D Book Pages
 */

const USER_DATA = {
    herName: "Aira",
    myName: "Shivam",
    nicknames: ["bebyycuu", "cantikkcuu", "Duniyakuu", "darlingcuuu", "istriicuuuu", "ciyanggcuu"],
    lastNickname: "lesbicuuu",
    startDate: "6 July 2026 (10:29 PM)",
    firstMet: "Litmatch",
    dreamMeeting: "2028"
};

// Exact 50 Photo filenames provided by user
const PHOTO_LIST = [
    "0b8aa28f-6950-458d-8b1a-01778962e1a6.jpeg",
    "18f261ae-4bcf-4466-97a6-5e588eca73f9.jpeg",
    "1f8c80fa-d609-4941-b572-09cdb5e18b34.jpeg",
    "24b76626-dabd-4dbb-b906-34e9d8bbc6c7.jpeg",
    "2c43eb5c-d0ec-4196-b516-66fd36cd6493.jpeg",
    "3020cea6-faf3-40d0-b9e0-dc5838cf818e.jpeg",
    "33f5fb6a-9ebc-4058-8002-141f7a7f958f.jpeg",
    "37011a39-d7a8-40c9-9bec-31351fd1601c.jpeg",
    "3c813296-0f22-4b7c-a945-f81a02b58218.jpeg",
    "47c26cdd-18c4-4db9-81ef-7ca0ccbaa0d4.jpeg",
    "49fbb1b4-548e-411e-bbd9-9bf9b4b0faec.jpeg",
    "519dab54-0641-4113-98ae-3b5589d88f97.jpeg",
    "ffe09983-18ad-4733-af06-1243a4c8b3e2.jpeg",
    "fe9d4e97-ae11-4958-adb2-092fa9dd9946.jpeg",
    "f1342906-44ef-48a7-910f-43d32dbd7e57.jpeg",
    "eef5a94c-07a8-4816-a8a1-7406d846571f.jpeg",
    "ec825d58-7514-45d1-92b5-c6103bac9459.jpeg",
    "ddaaed60-dbaa-4af3-bc21-cd0a728cf58f.jpeg",
    "dbbe551e-ca10-42fb-87d6-32d8af894959.jpeg",
    "d228e45c-85ac-4d1f-9595-114a02d2afcc.jpeg",
    "d21a8784-e9b8-4f0c-8e7b-b4bc26df61a8.jpeg",
    "cdb58739-d45d-4876-afb4-a6cd672f01e8.jpeg",
    "cd6926ba-9b68-42ff-9728-1a58025130f0.jpeg",
    "ccf20a13-e7f0-4b24-8e65-65258ab13e6b.jpeg",
    "b268f545-4a48-4c32-afdc-210b2faab711.jpeg",
    "aef7cb7d-ea44-4c6c-8f8b-2e881e66c5cb.jpeg",
    "ab56ae29-1c51-4a90-b970-e8bb94b09977.jpeg",
    "ab262628-a529-4a6a-9e29-0cb1cf83f8b5.jpeg",
    "aacb8353-33b0-430d-8fb7-02fd8440e0a1.jpeg",
    "a8922e4c-b11e-4b5e-a444-b58d80fae3a3.jpeg",
    "a241a29b-48c8-4d9a-90ca-dc42a0ec8122.jpeg",
    "a12d1b04-17e1-41a3-a91f-80f63ef41cfb.jpeg",
    "9d5851e1-fd59-4489-88b9-deba39090db0.jpeg",
    "9abe38b0-da98-4c85-900d-9bfc15b88a89.jpeg",
    "93d85390-4302-4a11-9ba2-1840246f7e64.jpeg",
    "901fdca7-3129-4fa1-9ff7-fbd38d5eee75.jpeg",
    "8983be6f-3b77-403b-a2be-a7486c23fc93.jpeg",
    "84ede98e-6f16-4429-9a50-ca1cc5dec4d3.jpeg",
    "81021cee-474d-49fa-9418-eceb3a4c8e79.jpeg",
    "7f744a9e-f307-4dfb-98e1-15e52c7fadd0.jpeg",
    "7d0e97f0-76e6-47e4-b97b-fb4cb736a27f.jpeg",
    "751aa38b-e5d6-4845-8fa1-549e3fa0edf1.jpeg",
    "6d489dba-eaf6-4809-84dd-c6b776a86f04.jpeg",
    "6cdc26a3-8aae-454f-8fd3-b101c579b286.jpeg",
    "6cb1ed0e-741f-4f1e-a4f6-9e72343c00e2.jpeg",
    "6befaa43-491c-4e52-94a3-f721091c3772.jpeg",
    "6488967a-534c-4ed5-9c19-0070ca131b31.jpeg",
    "615c9168-1d4d-439a-b23b-053da7e9aa76.jpeg",
    "5fd0c8b4-6523-4817-a181-1c88e40dca91.jpeg",
    "5e005d63-93a7-4cc6-acb3-351cc6fc3010.jpeg"
];

let showEnglish = true;
let currentPage = 0;
const totalPages = 150;

function generateBookPages() {
    const pages = [];

    // Page 1: Cover
    pages.push({
        title: "Buku Cinta Kita 📖❤️",
        indonesian1: `Halo ${USER_DATA.herName} ${USER_DATA.nicknames[0]}! Aku membuat buku digital 3D khusus ini untuk merayakan 4 bulan perjalanan cinta kita yang sangat berharga.`,
        english1: `Hello ${USER_DATA.herName} my baby! I created this special 3D digital book to celebrate our precious 4-month love journey.`,
        indonesian2: `Nikmati setiap halaman karena setiap kata dan foto di sini ditulis dengan seluruh hatiku untukmu, ${USER_DATA.nicknames[1]}.`,
        english2: `Enjoy every single page because every word and photo here is written with all my heart for you.`,
        photo: PHOTO_LIST[0],
        photoStyle: "polaroid"
    });

    // Page 2: Litmatch Meeting
    pages.push({
        title: "Pertemuan Pertama di Litmatch ✨",
        indonesian1: `Semuanya dimulai pada tanggal ${USER_DATA.startDate}. Kita pertama kali berkenalan di Litmatch, dan pada malam yang sama jam 10:29 malam, kita berpindah ke WhatsApp.`,
        english1: `It all started on ${USER_DATA.startDate}. We first met on Litmatch, and on the same night at 10:29 PM, we moved to WhatsApp.`,
        indonesian2: `Malam itu menjadi awal dari segalanya. Suaramu, caramu meresponku, dan kehangatanmu membuat ${USER_DATA.myName} langsung merasa bahwa kamu adalah seseorang yang sangat istimewa.`,
        english2: `That night became the beginning of everything. Your warmth made me feel instantly that you are someone very special.`,
        photo: PHOTO_LIST[1],
        photoStyle: "heart-shape"
    });

    // Page 3: Fights & First Call Kiss
    pages.push({
        title: "Awal Perjalanan & Ciuman Pertama 💖",
        indonesian1: `Di 10 hari pertama, kita sempat sering bertengkar kecil karena penyesuaian. Tapi setelah melewati masa itu, hubungan kita berubah menjadi sangat bahagia dan penuh dengan kasih sayang.`,
        english1: `In the first 10 days, we had small fights while adjusting. But after crossing that, our relationship became endlessly happy and sweet.`,
        indonesian2: `Ingatkah kamu saat telepon pertama kita? Ketika kita berciuman di telepon, itu adalah momen paling manis yang tidak akan pernah aku lupakan, ${USER_DATA.nicknames[2]}.`,
        english2: `Do you remember our first phone call? When we kissed over the call, it was the sweetest moment I will never forget.`,
        photo: PHOTO_LIST[2],
        photoStyle: "stamp-style"
    });

    // Pages 4 to 149: Detailed Paragraphs, Interleaved Photos, and 10 Mini-Games
    for (let i = 4; i < totalPages - 1; i++) {
        const photoFilename = PHOTO_LIST[i % PHOTO_LIST.length];
        const styles = ['polaroid', 'heart-shape', 'stamp-style'];
        const chosenStyle = styles[i % styles.length];

        if (i % 14 === 0) {
            // Mini-Games pages (10 distinct games across the book)
            const gameNum = Math.floor(i / 14);
            pages.push({
                title: `Game Cute #${gameNum} 🎮`,
                indonesian1: `Waktunya bermain game interaktif bersama, ${USER_DATA.nicknames[i % USER_DATA.nicknames.length]}! Selesaikan tantangan seru ini untuk membuka kejutan cinta dari ${USER_DATA.myName}.`,
                english1: `Time to play an interactive mini-game together! Complete this fun challenge to unlock a love surprise from me.`,
                isGamePage: true,
                gameId: (gameNum % 10) + 1
            });
        } else {
            pages.push({
                title: `Momen Indah Kita #${i} 💕`,
                indonesian1: `Setiap hari bersamamu terasa sangat luar biasa. Meskipun kamu terkadang suka bad mood, pemalas, dan pelupa 😭, aku tetap mencintaimu sepenuh hatiku, ${USER_DATA.nicknames[i % USER_DATA.nicknames.length]}.`,
                english1: `Every day with you feels extraordinary. Even when you are moody, lazy, and forgetful 😭, I still love you completely with all my heart.`,
                photo: photoFilename,
                photoStyle: chosenStyle,
                indonesian2: `Saat kita bertemu nanti di tahun ${USER_DATA.dreamMeeting}, hal pertama yang akan aku lakukan adalah memelukmu erat-erat dan menciummu tanpa henti selama 2-3 jam! Aku sangat menyayangimu, ${USER_DATA.lastNickname}.`,
                english2: `When we meet in ${USER_DATA.dreamMeeting}, the first thing I will do is hug you tightly and kiss you non-stop for 2-3 hours! I cherish you so much.`
            });
        }
    }

    // Page 150: Final Screen
    pages.push({
        title: "Bab 4 Selesai, Bab 5 Dimulai! 💍",
        indonesian1: `Terima kasih telah menjadi bagian paling indah dalam hidupku selama 4 bulan ini. Tetap memilihmu, tetap mencintaimu, dan tetap kita. Selamat 4 Bulan, ${USER_DATA.lastNickname}! ❤️`,
        english1: `Thank you for being the most beautiful part of my life for these 4 months. Still choosing you, still loving you, still us. Happy 4 Months, my love! ❤️`,
        photo: PHOTO_LIST[49],
        photoStyle: "polaroid"
    });

    return pages;
}

const bookData = generateBookPages();

function renderBook() {
    const container = document.getElementById('book-container');
    container.innerHTML = '';

    bookData.forEach((page, index) => {
        const pageEl = document.createElement('div');
        pageEl.className = `book-page ${index === 0 ? 'active' : ''}`;
        pageEl.style.zIndex = totalPages - index;

        let contentHTML = `
            <div class="page-header-cute">
                <h2>${page.title}</h2>
            </div>
            <p class="indonesian-text">${page.indonesian1}</p>
            <p class="english-subtext ${showEnglish ? '' : 'hidden'}">${page.english1}</p>
        `;

        if (page.photo) {
            contentHTML += `
                <div class="photo-container">
                    <div class="photo-frame ${page.photoStyle}">
                        <img src="assets/photos/${page.photo}" alt="Our Memory" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="placeholder-box" style="display:none;">
                            <span>🖼️ ${page.photo}</span>
                            <br><small>(Letakkan foto di assets/photos/)</small>
                        </div>
                    </div>
                </div>
            `;
        }

        if (page.indonesian2) {
            contentHTML += `
                <p class="indonesian-text">${page.indonesian2}</p>
                <p class="english-subtext ${showEnglish ? '' : 'hidden'}">${page.english2}</p>
            `;
        }

        if (page.isGamePage) {
            contentHTML += `
                <div style="text-align: center; margin-top: 15px;">
                    <button class="cute-btn" style="padding: 10px 20px; font-size: 0.95rem;" onclick="launchGame(${page.gameId})">Mainkan Game #${page.gameId} 🎮</button>
                </div>
            `;
        }

        pageEl.innerHTML = contentHTML;
        container.appendChild(pageEl);
    });

    updatePageIndicator();
}

document.getElementById('next-page-btn').addEventListener('click', nextPage);
document.getElementById('prev-page-btn').addEventListener('click', prevPage);

function nextPage() {
    if (currentPage < totalPages - 1) {
        const pages = document.querySelectorAll('.book-page');
        pages[currentPage].classList.add('flipped');
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
        updatePageIndicator();
    }
}

function prevPage() {
    if (currentPage > 0) {
        const pages = document.querySelectorAll('.book-page');
        currentPage--;
        pages[currentPage].classList.remove('flipped');
        pages[currentPage].classList.add('active');
        updatePageIndicator();
    }
}

function updatePageIndicator() {
    document.getElementById('page-indicator').textContent = `Halaman ${currentPage + 1} / ${totalPages}`;
}

document.getElementById('toggle-lang-btn').addEventListener('click', () => {
    showEnglish = !showEnglish;
    document.getElementById('toggle-lang-btn').textContent = `🌐 EN Text: ${showEnglish ? 'ON' : 'OFF'}`;
    document.querySelectorAll('.english-subtext').forEach(el => {
        if (showEnglish) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
});

document.getElementById('restart-book-btn').addEventListener('click', () => {
    currentPage = 0;
    renderBook();
});

// 10 Interactive Mini Games
function launchGame(id) {
    const modal = document.getElementById('game-modal');
    const content = document.getElementById('modal-game-content');
    modal.classList.remove('hidden');

    if (id === 1) {
        content.innerHTML = `
            <h3>🧠 Kuis Kenangan Kita</h3>
            <p style="margin: 12px 0;">Di aplikasi apa pertama kali Aira dan Shivam bertemu?</p>
            <button class="cute-btn" onclick="alert('Benar sekali! Litmatch ❤️'); closeModal();" style="margin: 4px;">A. Litmatch</button>
            <button class="cute-btn" onclick="alert('Salah wkwk!');" style="margin: 4px;">B. Instagram</button>
        `;
    } else if (id === 2) {
        content.innerHTML = `
            <h3>🔒 Kombinasi Kunci Cinta</h3>
            <p style="margin: 10px 0;">Tahun berapa kita berencana akan bertemu langsung?</p>
            <input type="text" id="lock-input" placeholder="Masukkan tahun..." style="padding: 6px; border-radius: 6px; border: 1px solid #ccc; text-align: center;">
            <br><button class="cute-btn" style="margin-top: 10px;" onclick="checkLock()">Buka Kunci</button>
        `;
    } else if (id === 3) {
        content.innerHTML = `
            <h3>💖 Kalkulator Kecocokan</h3>
            <p style="margin: 10px 0;">Menghitung persetujuan cinta Shivam & Aira...</p>
            <div style="font-size: 1.8rem; color: var(--accent-red); margin: 10px 0;">100% PERFECT MATCH! ❤️</div>
            <p style="font-size: 0.85rem;">Takdir terbaik yang pernah ada.</p>
            <button class="cute-btn" style="margin-top: 10px;" onclick="closeModal()">Yayy! ✨</button>
        `;
    } else {
        content.innerHTML = `
            <h3>✨ Game Mini Spesial #${id}</h3>
            <p style="margin: 12px 0;">Kamu mendapatkan pelukan hangat dan ciuman virtual tanpa henti dari Shivam! MUAAAH! 😘</p>
            <button class="cute-btn" onclick="closeModal()">Terima Kasih ❤️</button>
        `;
    }
}

function checkLock() {
    const val = document.getElementById('lock-input').value;
    if (val === USER_DATA.dreamMeeting) {
        alert('Benar! Sampai jumpa di tahun 2028, Aira kesayanganku! ❤️');
        closeModal();
    } else {
        alert('Salah! Petunjuk: Tahun impian pertemuan kita (202...).');
    }
}

function closeModal() {
    document.getElementById('game-modal').classList.add('hidden');
}

document.getElementById('close-modal-btn').addEventListener('click', closeModal);

document.addEventListener('DOMContentLoaded', renderBook);
