// start_button IDの要素をstart_button変数に代入(constなので再代入不可能)
const start_button = document.getElementById('start_button');
const main_display = document.getElementById('main_display');
const enter_button = document.getElementById('enter_button');
const question_number = document.getElementById('question_number');
const main_text = document.getElementById('main_text');
const answer_box = document.getElementById('answer_box');

let random_number;
let score = 0;
var random_select;
let start_button_push = 0;
let count_var = 0;
let month_word = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// start_buttonがクリックされたのを検知して関数を実行
start_button.addEventListener('click', start_game);

// 答えのinput要素内でエンターキーのキーダウンが発生したのを検知して関数を実行
answer_box.addEventListener('keydown', answer_send)

function start_game(){
    if(start_button_push<=0){
        alert('月を英語で答えてください');
        main_display.style.height = '20rem';
        main_display.style.visibility = 'visible';
        start_button_push++;
        question_number.style.visibility = 'visible';
        question_number.textContent = count_var + '/20';
        q_summon();
    }
}

function q_summon(){
    count_var++;
    question_number.textContent = count_var + '/20';
    answer_box.value='';
    random_number = Math.floor(Math.random() * 12);
    random_select = month_word[random_number];
    main_text.textContent = 'What is ' + (random_number + 1) + '月?';
}

function answer_send(enterkey){
    if(enterkey.key === 'Enter'){
        let answer_text = answer_box.value;
        if(answer_text === random_select){
            alert('correct | +1 score');
            score++;
            q_summon();
        }else{
            alert('incorrect | correct answer : ' + random_select);
            q_summon();
        }
    }
}

// Debug //
function answer_print(){
    console.log('Answer : '+random_select+' | '+'Random Number : '+random_number);
}