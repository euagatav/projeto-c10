var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2733615b-832d-4e37-88f3-cb8c9faa82cb","3fd528bb-4c4e-4145-b513-d16fbf440e1f","c69e929b-95f6-44f9-95fa-b6083e65abac"],"propsByKey":{"2733615b-832d-4e37-88f3-cb8c9faa82cb":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"liip36Uzd.UEskze8YUtuWMvk3veS2QD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png"},"3fd528bb-4c4e-4145-b513-d16fbf440e1f":{"name":"tubarão","sourceUrl":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png","frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":2,"version":"h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png"},"c69e929b-95f6-44f9-95fa-b6083e65abac":{"name":"peixe","sourceUrl":"assets/api/v1/animation-library/gamelab/aNRXyLdSoIzAXdOjVWpSGNAPrl.zdi8e/category_animals/tropicalfish_01.png","frameSize":{"x":400,"y":198},"frameCount":1,"looping":true,"frameDelay":2,"version":"aNRXyLdSoIzAXdOjVWpSGNAPrl.zdi8e","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":198},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aNRXyLdSoIzAXdOjVWpSGNAPrl.zdi8e/category_animals/tropicalfish_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200,200);
 fundo.setAnimation("fundo")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("peixe");
hero.scale=.2;
enemy1.setAnimation("tubarão");
enemy1.scale=.2;
enemy2.setAnimation("tubarão");
enemy2.scale=.2;
enemy3.setAnimation("tubarão");
enemy3.scale=.2;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3");
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_collect/vibrant_game_frog_item.mp3", false);
   
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
