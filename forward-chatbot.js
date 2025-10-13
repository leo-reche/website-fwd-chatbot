for (var page of ['/user-admission-process','/digital-campus']){
    if (window.location.pathname.includes(page)) {
        console.log(" ============== Test - BOT OFF =============");
        document.body.classList.add("bot-off")
    }
}

// Event listener for clicks on ChatBot links
document.addEventListener('click', function(event) {

  const link = event.target.closest('a'); // This line finds the closest link element

  if (link && link.target === '_blank') { //If the link is to a redirected page & 
    const pxeDiv = event.target.closest('.pxe-markdown');  //There is a pxe ancestor
    if (pxeDiv) {
        fetch('https://hooks.zapier.com/hooks/catch/8011346/u9p26zt/', {
            method: 'POST',
            body: JSON.stringify({ datafield: link.href }),
        }); //Records a click
    }
  }
});
