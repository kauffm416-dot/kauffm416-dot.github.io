$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(700, 450, 60, 20, "blue");
createPlatform(900, 550, 100, 50, "orange");
createPlatform(500, 350, 50, 20, "pink");
createPlatform(100, 300, 300, 50, "black");
createPlatform(1100, 650, 100, 20, "red");



    // TODO 3 - Create Collectables
createCollectable("max", 700, 300);
createCollectable("diamond", 150, 150,);
createCollectable("steve", 1100, 400);
    
    // TODO 4 - Create Cannons
createCannon("top", 400, 500,);
createCannon("right", 450, 900);
createCannon("right", 300, 1700);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
