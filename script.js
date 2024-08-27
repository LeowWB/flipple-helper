let start_text = document.getElementById('start_text')
let end_text = document.getElementById('end_text')
let guess_text = document.getElementById('guess_text')
let start_side = document.getElementById('start_side')
let end_side = document.getElementById('end_side')
let output_p = document.getElementById('output')

let start_word;
let end_word;
let start_side_words = [];
let end_side_words = [];

function is_enter_keypress(event){
    return event.key === 'Enter'
}

function update_start_end_sides() {
    start_side.innerHTML = start_side_words
    end_side.innerHTML = end_side_words
}

function update_output(output_text) {
    output_p.innerHTML = output_text
}

start_text.addEventListener(
    'keypress',
    (event) => {
        update_output('')
        if (!is_enter_keypress(event))
            return;
        start_word = start_text.value
        if (start_word.length !== 5) {
            update_output('should be length 5')
            return
        }
        start_side_words.push(start_word)
        update_start_end_sides()
    }
)

end_text.addEventListener(
    'keypress',
    (event) => {
        update_output('')
        if (!is_enter_keypress(event))
            return;
        end_word = end_text.value
        if (end_word.length !== 5) {
            update_output('should be length 5')
            return
        }
        end_side_words.push(end_word)
        update_start_end_sides()
    }
)

guess_text.addEventListener(
    'keypress',
    (event) => {
        update_output('')
        if (!is_enter_keypress(event))
            return;
        let guess_word = guess_text.value;
        if (guess_word.length !== 5) {
            update_output('should be length 5')
            return
        }
        for (let i = 0; i < start_side_words.length; i++) {
            let same_chars = 0
            for (let j = 0; j < 5; j++) {
                if (guess_word.charAt(j) === start_side_words[i].charAt(j)) {
                    same_chars++;
                }
            }
            if (same_chars === 4) {
                start_side_words.push(guess_word)
                update_start_end_sides()
                return
            }
        }
        for (let i = 0; i < end_side_words.length; i++) {
            let same_chars = 0
            for (let j = 0; j < 5; j++) {
                if (guess_word.charAt(j) === end_side_words[i].charAt(j)) {
                    same_chars++;
                }
            }
            if (same_chars === 4) {
                end_side_words.push(guess_word)
                update_start_end_sides()
                return
            }
        }
        update_output('no match')
    }
)
