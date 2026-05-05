// BEGIN
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getX() { return this.x }

    getY() { return this.y }
}
class Segment {
    constructor(beginPoint, endPoint) {
        this.beginPoint = beginPoint
        this.endPoint = endPoint
    }
    getBeginPoint() { return this.beginPoint}

    getEndPoint() { return this.endPoint }
}
function reverse(segment) {
    const beginPoint = segment.getBeginPoint()
    const endPoint = segment.getEndPoint()
    const newBeginPoint = new Point(beginPoint.getX(), beginPoint.getY())
    const newEndPoint = new Point(endPoint.getX(), endPoint.getY())
    return new Segment(newEndPoint, newBeginPoint)
}
export { Point, Segment, reverse}
// END
