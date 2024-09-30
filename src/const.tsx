import {HangulConfig} from "./types/HangulConfig";

/**
 * 韩语的辅音可以根据发音方式分为以下几类：
 *
 * 松音（普通音，lax consonants）：发音时声带放松，气流较弱。
 * 送气音（aspirated consonants）：发音时伴有较强的气流。
 * 紧音（tensed consonants）：发音时声带紧张，气流较强。
 * 鼻音（nasal consonants）：发音时气流通过鼻腔。
 * 流音（liquid consonants）：发音时气流部分通过口腔，部分通过鼻腔。
 */
export const hangulCharacters: HangulConfig[] = [
    {id: 1, hangul: 'ㄱ', audioUrl: 'https://example.com/audio/g.mp3', rome: ['g', 'k'], type: 'consonant', subType: 'lax'},
    {id: 2, hangul: 'ㄴ', audioUrl: 'https://example.com/audio/n.mp3', rome: ['n'], type: 'consonant', subType: 'nasal'},
    {id: 3, hangul: 'ㄷ', audioUrl: 'https://example.com/audio/d.mp3', rome: ['d', 't'], type: 'consonant', subType: 'lax'},
    {id: 4, hangul: 'ㄹ', audioUrl: 'https://example.com/audio/r.mp3', rome: ['r', 'l'], type: 'consonant', subType: 'liquid'},
    {id: 5, hangul: 'ㅁ', audioUrl: 'https://example.com/audio/m.mp3', rome: ['m'], type: 'consonant', subType: 'nasal'},
    {id: 6, hangul: 'ㅂ', audioUrl: 'https://example.com/audio/b.mp3', rome: ['b', 'p'], type: 'consonant', subType: 'lax'},
    {id: 7, hangul: 'ㅅ', audioUrl: 'https://example.com/audio/s.mp3', rome: ['s'], type: 'consonant', subType: 'lax'},
    {id: 8, hangul: 'ㅇ', audioUrl: 'https://example.com/audio/ng.mp3', rome: ['ng', 'silent'], type: 'consonant', subType: 'nasal'},
    {id: 9, hangul: 'ㅈ', audioUrl: 'https://example.com/audio/j.mp3', rome: ['j'], type: 'consonant', subType: 'lax'},
    {id: 10, hangul: 'ㅊ', audioUrl: 'https://example.com/audio/ch.mp3', rome: ['ch'], type: 'consonant', subType: 'aspirated'},
    {id: 11, hangul: 'ㅋ', audioUrl: 'https://example.com/audio/k.mp3', rome: ['k'], type: 'consonant', subType: 'aspirated'},
    {id: 12, hangul: 'ㅌ', audioUrl: 'https://example.com/audio/t.mp3', rome: ['t'], type: 'consonant', subType: 'aspirated'},
    {id: 13, hangul: 'ㅍ', audioUrl: 'https://example.com/audio/p.mp3', rome: ['p'], type: 'consonant', subType: 'aspirated'},
    {id: 14, hangul: 'ㅎ', audioUrl: 'https://example.com/audio/h.mp3', rome: ['h'], type: 'consonant', subType: 'aspirated'},
    {id: 15, hangul: 'ㅏ', audioUrl: 'https://example.com/audio/a.mp3', rome: ['a'], type: 'vowel', subType: 'basic'},
    {id: 16, hangul: 'ㅑ', audioUrl: 'https://example.com/audio/ya.mp3', rome: ['ya'], type: 'vowel', subType: 'basic'},
    {id: 17, hangul: 'ㅓ', audioUrl: 'https://example.com/audio/eo.mp3', rome: ['eo'], type: 'vowel', subType: 'basic'},
    {id: 18, hangul: 'ㅕ', audioUrl: 'https://example.com/audio/yeo.mp3', rome: ['yeo'], type: 'vowel', subType: 'basic'},
    {id: 19, hangul: 'ㅗ', audioUrl: 'https://example.com/audio/o.mp3', rome: ['o'], type: 'vowel', subType: 'basic'},
    {id: 20, hangul: 'ㅛ', audioUrl: 'https://example.com/audio/yo.mp3', rome: ['yo'], type: 'vowel', subType: 'basic'},
    {id: 21, hangul: 'ㅜ', audioUrl: 'https://example.com/audio/u.mp3', rome: ['u'], type: 'vowel', subType: 'basic'},
    {id: 22, hangul: 'ㅠ', audioUrl: 'https://example.com/audio/yu.mp3', rome: ['yu'], type: 'vowel', subType: 'basic'},
    {id: 23, hangul: 'ㅡ', audioUrl: 'https://example.com/audio/eu.mp3', rome: ['eu'], type: 'vowel', subType: 'basic'},
    {id: 24, hangul: 'ㅣ', audioUrl: 'https://example.com/audio/i.mp3', rome: ['i'], type: 'vowel', subType: 'basic'},
    {id: 25, hangul: 'ㅐ', audioUrl: 'https://example.com/audio/ae.mp3', rome: ['ae'], type: 'vowel', subType: 'compound'},
    {id: 26, hangul: 'ㅒ', audioUrl: 'https://example.com/audio/yae.mp3', rome: ['yae'], type: 'vowel', subType: 'compound'},
    {id: 27, hangul: 'ㅔ', audioUrl: 'https://example.com/audio/e.mp3', rome: ['e'], type: 'vowel', subType: 'compound'},
    {id: 28, hangul: 'ㅖ', audioUrl: 'https://example.com/audio/ye.mp3', rome: ['ye'], type: 'vowel', subType: 'compound'},
    {id: 29, hangul: 'ㅘ', audioUrl: 'https://example.com/audio/wa.mp3', rome: ['wa'], type: 'vowel', subType: 'compound'},
    {id: 30, hangul: 'ㅙ', audioUrl: 'https://example.com/audio/wae.mp3', rome: ['wae'], type: 'vowel', subType: 'compound'},
    {id: 31, hangul: 'ㅚ', audioUrl: 'https://example.com/audio/oe.mp3', rome: ['oe'], type: 'vowel', subType: 'compound'},
    {id: 32, hangul: 'ㅝ', audioUrl: 'https://example.com/audio/weo.mp3', rome: ['weo'], type: 'vowel', subType: 'compound'},
    {id: 33, hangul: 'ㅞ', audioUrl: 'https://example.com/audio/we.mp3', rome: ['we'], type: 'vowel', subType: 'compound'},
    {id: 34, hangul: 'ㅟ', audioUrl: 'https://example.com/audio/wi.mp3', rome: ['wi'], type: 'vowel', subType: 'compound'},
    {id: 35, hangul: 'ㅢ', audioUrl: 'https://example.com/audio/ui.mp3', rome: ['ui'], type: 'vowel', subType: 'compound'},
    {id: 36, hangul: 'ㄲ', audioUrl: 'https://example.com/audio/kk.mp3', rome: ['kk'], type: 'consonant', subType: 'tensed'},
    {id: 37, hangul: 'ㄸ', audioUrl: 'https://example.com/audio/tt.mp3', rome: ['tt'], type: 'consonant', subType: 'tensed'},
    {id: 38, hangul: 'ㅃ', audioUrl: 'https://example.com/audio/pp.mp3', rome: ['pp'], type: 'consonant', subType: 'tensed'},
    {id: 39, hangul: 'ㅆ', audioUrl: 'https://example.com/audio/ss.mp3', rome: ['ss'], type: 'consonant', subType: 'tensed'},
    {id: 40, hangul: 'ㅉ', audioUrl: 'https://example.com/audio/jj.mp3', rome: ['jj'], type: 'consonant', subType: 'tensed'}
]

export const vowels: HangulConfig[] = hangulCharacters.filter((char) => char.type === 'vowel')
export const consonants: HangulConfig[] = hangulCharacters.filter((char) => char.type === 'consonant')
export const basicVowels: HangulConfig[] = vowels.filter((char) => char.subType === 'basic')
export const compoundVowels: HangulConfig[] = vowels.filter((char) => char.subType === 'compound')
export const laxConsonants: HangulConfig[] = consonants.filter((char) => char.subType === 'lax')
export const aspiratedConsonants: HangulConfig[] = consonants.filter((char) => char.subType === 'aspirated')
export const tensedConsonants: HangulConfig[] = consonants.filter((char) => char.subType === 'tensed')
export const nasalConsonants: HangulConfig[] = consonants.filter((char) => char.subType === 'nasal' || char.subType === 'liquid')
