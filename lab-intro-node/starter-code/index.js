class SortedList {
  constructor(item, pos) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    });
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.length - 1 || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    if (!this.length) {
      return 0;
    } else {
      return this.items.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    }
  }
  average() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}
module.exports = SortedList;
