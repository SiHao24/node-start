import { wordsToSentence } from './utils/utils';
import './index.scss';
var el = document.createElement('div'),
    text = document.createTextNode(
        wordsToSentence('welcome', 'to', 'my', 'app!')
    );
    el.id = 'app';

    el.appendChild(text);
    document.body.appendChild(el);