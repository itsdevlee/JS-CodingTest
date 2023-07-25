function solution(n, k) {
  
  const floorN=Math.floor(n/10)
  
  n = n * 12000;
  const sum = n + (k>=floorN ? (k - floorN) * 2000 : (floorN - k) * 2000);
  return sum;
}


