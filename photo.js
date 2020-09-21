class Photo {
  width;
  height;

  constructor(width = 8, height = 10) {
    this.width = width;
    this.height = height;
  }

  price() {
    if (this.width == 8 && this.height == 10) {
      return 4;
    } else if (this.width == 10 && this.height == 12) {
      return 6;
    } else {
      return 10;
    }
  }

  toString() {
    return (
      "This is a " +
      this.width.toString() +
      " by " +
      this.height.toString() +
      " and it costs " +
      this.price().toString()
    );
  }
}

let newPhoto = new Photo();

console.log(newPhoto);
