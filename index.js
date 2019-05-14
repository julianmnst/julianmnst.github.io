// More targets will be added soon
  var targets = [
    "personal brand",
    "band",
    "business",
    "album"
  ];

  // List of spots where target is displayed
  var targetElements = document.getElementsByClassName("target")

  // Counter
  var targetCount = 0;

  // Current target being displayed
  var currentTarget = () => targets[targetCount];

  // Display default target
  setTarget(currentTarget())

  // Interval between target & target
  var intervalId = setInterval(switchTraget, 3000);

  // Iterates over the targets list
  function switchTraget() {
    if (targetCount < (targets.length - 1)) {
      currentTarget();
      targetCount++;
    }
    else {
      targetCount = 0;
    }

    setTarget(currentTarget())
  }

  // Sets target value
  function setTarget(target) {
    for (let elem of targetElements) {
      elem.innerHTML = target
    }
  }

  // If any of the paragraphs is clicked, target stops changing
  for (let elem of document.getElementsByTagName("p")) {
    elem.onclick = function() {
      clearInterval(intervalId)
    }
  }
