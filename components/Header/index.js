// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const headerContainer = document.querySelector('.header-container');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  const headerSpan = document.createElement('span');
  headerSpan.classList.add('date');
  headerSpan.textContent = 'March 28, 2019';
  const lambdaTimes = document.createElement('h1');
  lambdaTimes.textContent = 'Lambda Times';
  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.textContent = '98';
  headerContainer.appendChild(headerDiv);
  headerDiv.appendChild(headerSpan);
  headerDiv.appendChild(lambdaTimes);
  headerDiv.appendChild(temp);

  return Header;
}
Header();
