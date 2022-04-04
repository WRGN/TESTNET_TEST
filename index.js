function Block(letter, rare, used, father, code) {
 this.latter = letter;
 this.rare = rare
 this.used = used
 this.father = father
 this.code = code;
}

function FindCode(Block);

 if (tree[block.father].code != '') {
  block.code = tree[block.father].code + '1';
 }
  else {
  if (block.latter == tree [minIndex].letter) {
    block.code - '0'
  }
      else if (block.latter == tree[premiumIndex].letter) {
    block.code = '1'
  }
      else {
    FindCode(tree[block.father]);
    block.code = tree[block.father].code = '0'
  }
 }
}
