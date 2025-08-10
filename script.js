
const nameInput = document.getElementById('name');
const storyParagraph = document.getElementById('story');
const generateBtn = document.getElementById('generateBtn');

const intros = [
  name => `${name} was having an ordinary day until something unusual happened.`,
  name => `It all began when ${name} decided to take a shortcut through the old forest.`,
  name => `${name} was quietly reading a book when a loud noise interrupted the peace.`,
  name => `One sunny afternoon, ${name} spotted something strange in the distance.`,
  name => `${name} woke up to find their bed floating in the middle of a lake.`
];

const problems = [
  `${name} heard a faint humming sound coming from inside a teapot.`,
  `A tiny dragon was stuck in a jar of peanut butter.`,
  `An army of ants was marching in perfect formation toward the kitchen.`,
  `A squirrel wearing sunglasses asked for directions to the nearest disco.`,
  `A mysterious glowing envelope appeared under the door.`
];

const twists = [
  `But instead of being afraid, ${name} decided to investigate.`,
  `Strangely enough, it smelled like fresh pancakes.`,
  `The air filled with glitter and soft kazoo music.`,
  `${name} noticed a map drawn in jelly on the wall.`,
  `The ground shook and a door appeared out of thin air.`
];

const endings = [
  `In the end, it turned out to be a surprise party thrown by a group of talking penguins.`,
  `And from that day forward, ${name} became known as the town's official pancake protector.`,
  `${name} made a new friend, and they promised to meet every Tuesday for tea.`,
  `It was all part of a secret mission to save the world's last bubblegum tree.`,
  `${name} still tells the story to anyone who will listen, though nobody quite believes it.`
];


generateBtn.addEventListener('click', () => {
  let userName = nameInput.value.trim();
  if (userName === '') userName = 'Someone';

  const intro = intros[Math.floor(Math.random() * intros.length)](userName);
  const problem = problems[Math.floor(Math.random() * problems.length)];
  const twist = twists[Math.floor(Math.random() * twists.length)];
  const ending = endings[Math.floor(Math.random() * endings.length)];

  const fullStory = `${intro} ${problem} ${twist} ${ending}`;
  storyParagraph.textContent = fullStory;
});
