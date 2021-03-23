window.addEventListener("load", function()
{
  const animation = document.querySelector('#more_text_link');

  animation.addEventListener('click', (e) => 
  {
    if(e.target.id == 'more_text_link')
      document.getElementById('more_text_content').style.display = "block";
  });
});