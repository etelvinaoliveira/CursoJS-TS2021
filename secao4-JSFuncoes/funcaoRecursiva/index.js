function recursiva(max) {
  console.log(max);

  if (max >= 10000) return;
  max++;
  
  recursiva(max);
}

recursiva(5000);
