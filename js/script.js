const board = document.querySelector('.board');


for (i = 1; i <= 100; i++) {
    const content = document.createElement('div');   
    content.classList.add('content');
    
    if (i % 3 == 0 && i % 5 == 0) {
        content.innerText = 'FizzBuzz'
        content.classList.add('fizzbuzz')
    }else if (i % 5 == 0) {
        content.innerText = 'Buzz'
        content.classList.add('buzz')
    }else if (i % 3 == 0) {
        content.innerText = 'Fizz'
        content.classList.add('fizz')
    }else {
        content.innerText = `${i}`
        content.classList.add('generic')
    }

    board.append(content)
}
