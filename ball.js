class Ball {
  elem = document.getElementById("elem");
  radius = 100;
  growRate = 0.5;
  isGrowing = false;

  constructor() {
    this.elem.style.width = this.radius + "px";
  }

  pulse() {
    if (this.isGrowing) {
      this.growRate += 0.01;
      this.changeSize("shrink");
    } else {
      this.changeSize("grow");
      this.growRate -= 0.01;
    }
  }

  changeSize(inst) {
    if (inst === "grow") {
      this.radius -= this.growRate;
      this.elem.style.width = this.radius + "px";
      this.elem.style.height = this.radius + "px";
    } else if (inst === "shrink") {
      this.radius += this.growRate;
      this.elem.style.width = this.radius + "px";
      this.elem.style.height = this.radius + "px";
    } else return;
  }

  checkSize(radius) {
    if (radius < 100) {
      this.isGrowing = true;
    } else if (radius > 300) {
      this.isGrowing = false;
    } else return;
  }
}
