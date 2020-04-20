const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.getElementById('monthly').style.display = 'block';
    document.getElementById('annual').style.display = 'none';

    document.getElementById('monthly2').style.display = 'block';
    document.getElementById('annual2').style.display = 'none';

    document.getElementById('monthly3').style.display = 'block';
    document.getElementById('annual3').style.display = 'none';
  } else if (e.target.unchecked) {
    document.getElementById('monthly').style.display = 'none';
    document.getElementById('annual').style.display = 'block';

    document.getElementById('monthly2').style.display = 'none';
    document.getElementById('annual2').style.display = 'block';

    document.getElementById('monthly3').style.display = 'none';
    document.getElementById('annual3').style.display = 'block';
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// store user preference for future use

//theme1

function switchTheme(e) {
  if (e.target.checked) {
    document.getElementById('monthly').style.display = 'block';
    document.getElementById('annual').style.display = 'none';
  } else {
    document.getElementById('monthly').style.display = 'none';
    document.getElementById('annual').style.display = 'block';
    localStorage.setItem('theme', 'dark'); //add this
  }

  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }

  //theme2

  if (e.target.checked) {
    document.getElementById('monthly2').style.display = 'block';
    document.getElementById('annual2').style.display = 'none';
  } else {
    document.getElementById('monthly2').style.display = 'none';
    document.getElementById('annual2').style.display = 'block';
    localStorage.setItem('theme2', 'dark'); //add this
  }

  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme2', 'light'); //add this
  }

  //theme3

  if (e.target.checked) {
    document.getElementById('monthly3').style.display = 'block';
    document.getElementById('annual3').style.display = 'none';
  } else {
    document.getElementById('monthly3').style.display = 'none';
    document.getElementById('annual3').style.display = 'block';
    localStorage.setItem('theme3', 'dark'); //add this
  }

  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme3', 'light'); //add this
  }
}

//check for saved user preference, if any, on load of the website

const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
