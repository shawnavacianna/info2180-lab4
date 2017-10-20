window.onload = function() {
	document.getElementById("boundary1").addEventListener("mouseover",overBoundary);
  };
  
  function overBoundary() {
      // $("boundary1").style.backgroundColor = "#ff8888";
      document.getElementById("boundary1").classList.add("youlose");
  }
