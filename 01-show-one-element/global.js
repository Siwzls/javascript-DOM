window.addEventListener("load", function()
{
  const animation = document.querySelector('#more_text_link');

  animation.addEventListener('click', (e) => 
  {
    document.getElementById('more_text_content').style.display = "block";
  });
});