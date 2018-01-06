import { wordsToSentence } from './utils/utils';
var el = document.createElement('div'),
    text = document.createTextNode(
        wordsToSentence('welcome', 'to', 'my', 'app!')
    );

    el.appendChild(text);
    document.body.appendChild(el);