const textArea = document.querySelector('#textarea');
const charCount = document.querySelector('#char-count');
const wordCount = document.querySelector('#word-count');

textArea.addEventListener('input', function () {
  const text = textArea.value.trim();

  // 1. Calculate character count
  charCount.innerHTML = text.length;

  // 2. Calculate word count
  if (text === '') {
    wordCount.innerHTML = 0;
  } else {
    // Splits text by one or more spaces/newlines
    const words = text.split(/\s+/);
    wordCount.innerHTML = words.length;
  }
});
