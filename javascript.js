/*
- input ablak felugrik
- felhasználó beírja a 3 opció közül valamelyiket
- a prompt addig aktív, amíg a 3 opció közül nem lett beírva az egyik helyesen (kis- és nagybetűkre nem érzékeny)
- a gép generál egy választ
- összehasonlítjuk a két választ, és eldöntjük, hogy ki nyert
- a győztes pontszámát növeljük
- ha döntetlen, akkor a kör megismétlődik, a pontszámok nem változnak
- addig fut a játék, amíg 5 kör le nem ment
- az 5. kör végén kiértékeljük a győztest a pontszámok alapján
*/

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            console.log('Rock');
            break;
        case 2:
            console.log('Paper');
            break;
        case 3:
            console.log('Scissors');
            break;
    }
}

getComputerChoice();