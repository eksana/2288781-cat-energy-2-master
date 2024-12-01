/* в этот файл добавляет скрипты*/

const icons = document.querySelectorAll('.toggle');
icons.forEach ((icon) => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle('open');
  });
});
