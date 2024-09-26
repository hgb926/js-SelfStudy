const $input = document.querySelector(".input");
const $div = document.querySelector(".div");

const convertLanguage = {
    "q": "ㅂ",
    "w": "ㅈ",
    "e": "ㄷ",
    "r": "ㄱ",
    "t": "ㅅ",
    "y": "ㅛ",
    "u": "ㅕ",
    "i": "ㅑ",
    "o": "ㅐ",
    "p": "ㅔ",
    "a": "ㅁ",
    "s": "ㄴ",
    "d": "ㅇ",
    "f": "ㄹ",
    "g": "ㅎ",
    "h": "ㅗ",
    "j": "ㅓ",
    "k": "ㅏ",
    "l": "ㅣ",
    "z": "ㅋ",
    "x": "ㅌ",
    "c": "ㅊ",
    "v": "ㅍ",
    "b": "ㅠ",
    "n": "ㅜ",
    "m": "ㅡ",

    // Uppercase letters
    "Q": "ㅃ",
    "W": "ㅉ",
    "E": "ㄸ",
    "R": "ㄲ",
    "T": "ㅆ",
    "Y": "ㅛ",
    "U": "ㅕ",
    "I": "ㅑ",
    "O": "ㅒ",
    "P": "ㅖ",
    "A": "ㅁ",
    "S": "ㄴ",
    "D": "ㅇ",
    "F": "ㄹ",
    "G": "ㅎ",
    "H": "ㅗ",
    "J": "ㅓ",
    "K": "ㅏ",
    "L": "ㅣ",
    "Z": "ㅋ",
    "X": "ㅌ",
    "C": "ㅊ",
    "V": "ㅍ",
    "B": "ㅠ",
    "N": "ㅜ",
    "M": "ㅡ"
};

// 한글 자모 조합에 필요한 배열
const initial = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const medial = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const final = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 초성, 중성, 종성을 합쳐 하나의 음절로 만드는 함수
function combineHangul(initialChar, medialChar, finalChar) {
    const initialIndex = initial.indexOf(initialChar);
    const medialIndex = medial.indexOf(medialChar);
    const finalIndex = final.indexOf(finalChar);

    if (initialIndex !== -1 && medialIndex !== -1) {
        const unicode = 0xAC00 + (initialIndex * 21 * 28) + (medialIndex * 28) + (finalIndex !== -1 ? finalIndex : 0);
        return String.fromCharCode(unicode);
    } else {
        return initialChar;  // 해당되지 않으면 원래 문자를 반환
    }
}

let chars = { initial: '', medial: '', final: '' };

$input.addEventListener('input', () => {
    let lastChar = $input.value.slice(-1);  // 입력된 문자열의 마지막 문자
    let converted = convertLanguage[lastChar] || lastChar;  // 변환된 문자

    console.log('입력된 문자:', lastChar, '변환된 문자:', converted);  // 디버깅용 로그

    // 초성, 중성, 종성 순서로 조합
    if (initial.includes(converted) && !chars.initial) {
        chars.initial = converted;
        console.log('초성 설정:', chars.initial);
    } else if (medial.includes(converted) && chars.initial && !chars.medial) {
        chars.medial = converted;
        console.log('중성 설정:', chars.medial);
    } else if (final.includes(converted) && chars.medial) {
        chars.final = converted;
        console.log('종성 설정:', chars.final);
        let hangul = combineHangul(chars.initial, chars.medial, chars.final);
        $div.innerHTML = hangul;  // 완성된 한글 출력
        console.log('완성된 한글:', hangul);
        chars = { initial: '', medial: '', final: '' };  // 초기화
    }
});