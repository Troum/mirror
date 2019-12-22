$().ready(function () {
  let images = [];
  let obj = {curImg: 0};

  for (let i = 1; i < 137; i++) {
    images.push(`img/frames/frame-${i}.png`)
  }

  let tl = new TimelineMax();
  let controller = new ScrollMagic.Controller();
  tl
    .set('#image-container', {
      x: '30%',
      transformOrigin: 'center center'
    })
    .set('.title-container', {
      x: '10%'
    })
    .to('#image-container', 3, {
      x: '-40%'
    })
    .to('.title-container', 2, {
      x: '70%'
    }, '-=3')
    .to('.greeting1', 2, {
      autoAlpha: 0
    }, '-=3')
    .to(obj, 3, {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 0,
      immediateRender: true,
      ease: Linear.easeNone,
      onUpdate: () => {
        $('#frame').attr('src', images[obj.curImg])
      }
    }, '-=3')
    .to('.greeting2', 1.5, {
      autoAlpha: 1,
      translateY: -180
    })
    .from('.one', 0.5, {
      autoAlpha: 0
    }, '-=3')
    .to('.one', 0.5, {
      translateY: -120
    }, '-=3')
    .from('.two', 0.75, {
      autoAlpha: 0
    }, '-=3')
    .to('.two', 0.75, {
      translateY: -120
    }, '-=3')
    .from('.three', 1, {
      autoAlpha: 0
    }, '-=3')
    .to('.three', 1, {
      translateY: -120
    }, '-=3');

  let scene = new ScrollMagic.Scene({
    triggerElement: '#container',
    triggerHook: 0,
    duration: '100%'
  })
    .setTween(tl)
    .setPin('#container')
    .addTo(controller)

});
