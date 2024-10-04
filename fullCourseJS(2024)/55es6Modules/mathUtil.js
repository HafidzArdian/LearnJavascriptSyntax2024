// export that means you can use it in other files
// export default that means you can only use it in one file


export const PI = 3.14;

export function getCirumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return PI * radius * radius;
}

export function getVolume(radius) {
  return (4 / 3) * PI * radius * radius * radius;
}

