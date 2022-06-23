//soal 11
function startsWithE(animal) {

    return animal.startsWith('e')
    
    }
    const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
        'eel', 'rabbit', 'goose', 'earwig'];
    
    const animalsE = animals.filter(startsWithE);
    
    console.log(animalsE); // ["elephant", "emu", "eel", "earwig"]
    