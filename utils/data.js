const names = [
    "Eren",
    "Mikasa",
    "Armin",
    "Levi",
    "Erwin",
    "Hange",
    "Jean",
    "Sasha",
    "Connie",
    "Reiner",
    "Bertolt",
    "Annie",
    "Marco",
    "Ymir",
    "Zeke",
    "Historia",
    "Nanaba",
    "Falco",
    "Pieck",
    "Porco",
    "Floch",
    "Sina",
    "Magath",
    "Kenny",
    "Mike",
    "Daz",
    "Gabi",
    "Dina",
    "Floche",
    "Grisha",
    "Carla",
];

const thoughts = [
    "I'm going to kill all the titans!",
    "Erwin is the best commander!",
    "Eren must be stopped!",
    "Paradis Island is the best!",
    "Get Rumbled stay Humbled!",
    "RUMBLING ITS COMING RUMBLING ITS COMING!",
    "Tatakae!",
    "Gabbi is the worst!",
    "The Survey Corps is the best!",
    "Mikasa is pretty cool!",
    "Armin is the smartest!",
    "Levi is the best!",
    "Mikasa loves Eren!",
    "Jean loves Mikasa!",
    "Marco is half there",
    "Eremika is the best ship!",
    "Eren did nothing wrong!",
    "Yaegerists for life!",
    "Marley is the worst!",
    "The Eldians are the best!",
    "Zeke smells",
    "I miss Carla",
    "Eren loves Mikasa",
    "Eren loves you more than you love him",
    "Free my boy Eren, he did nothing wrong",
    "If I kill all the enemies, will I be free?",

];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
    `${getRandomArrItem(names)}` ;

const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
        });
    }
    return results;
};

module.exports = { getRandomName, getRandomThoughts };