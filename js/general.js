function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function loader(){
	$('#loader').css('transform', 'translateY(-100%)');
}