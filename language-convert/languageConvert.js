const $input = document.querySelector(".input");
const $div = document.querySelector(".div");

const convertLanguage = {
    "q": "ㅂ", "w": "ㅈ", "e": "ㄷ", "r": "ㄱ", "t": "ㅅ", "y": "ㅛ", "u": "ㅕ", "i": "ㅑ", "o": "ㅐ", "p": "ㅔ",
    "a": "ㅁ", "s": "ㄴ", "d": "ㅇ", "f": "ㄹ", "g": "ㅎ", "h": "ㅗ", "j": "ㅓ", "k": "ㅏ", "l": "ㅣ",
    "z": "ㅋ", "x": "ㅌ", "c": "ㅊ", "v": "ㅍ", "b": "ㅠ", "n": "ㅜ", "m": "ㅡ",
    "Q": "ㅃ", "W": "ㅉ", "E": "ㄸ", "R": "ㄲ", "T": "ㅆ"
};

const initial = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const medial = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const final = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

let currentHangul = { initial: '', medial: '', final: '' };
let assembledText = "";

function combineHangul() {
    if (currentHangul.initial && currentHangul.medial) {
        const initialIndex = initial.indexOf(currentHangul.initial);
        const medialIndex = medial.indexOf(currentHangul.medial);
        const finalIndex = final.indexOf(currentHangul.final);

        const unicode = 0xAC00 + (initialIndex * 21 * 28) + (medialIndex * 28) + (finalIndex !== -1 ? finalIndex : 0);
        return String.fromCharCode(unicode);
    }
    return currentHangul.initial + currentHangul.medial + currentHangul.final;
}

$input.addEventListener('input', () => {
    let lastChar = $input.value.slice(-1).toLowerCase();  // 입력된 문자열의 마지막 문자
    let converted = convertLanguage[lastChar] || lastChar;

    if (initial.includes(converted) && !currentHangul.initial) {
        currentHangul.initial = converted;
    } else if (medial.includes(converted) && currentHangul.initial && !currentHangul.medial) {
        currentHangul.medial = converted;
    } else if (final.includes(converted) && currentHangul.medial) {
        currentHangul.final = converted;
        let hangul = combineHangul();
        assembledText += hangul;
        $div.innerHTML = assembledText;
        currentHangul = { initial: '', medial: '', final: '' };  // 초기화
    }
});