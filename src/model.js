import {TitleBlock, ImageBlock, TextColumnsBlock,TextBlock} from "./classes/blocks"
import image from "./assets/image.jpg"
import { css } from "./utils"

const text = `Улыбнись утром, выпей кофе, оденься, включи весну в наушниках и иди туда, где хорошо!
Ещё больше жизнеутверждающего контента Вы найдете по ссылке: <a href="https://smsta.ru/status/mood" target="_blank">Positive</a>`

export const model = [
    new TitleBlock('Конструктор сайтов на JavaScript!', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
             color: '#fff',
             padding: '1.5rem',
             'text-align': 'center'
        })
    }),
    new ImageBlock( image, {
        styles: 'padding: 2rem 0; display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: 200px; border-radius:50px;'
    }),
    new TextColumnsBlock( [
        'Мир принадлежит тому, кто ему рад!',
        'Улыбка – самый недорогой способ выглядеть лучше!',
        'Пользуйся хорошим настроением, оно приходит так редко!'
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    })     
]