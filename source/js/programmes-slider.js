new Glide('.programmes__glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 30,
  autoplay: 4000,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
  breakpoints: {
    1100: {
      perView: 2
    },
    550: {
      perView: 1
    }
  },
}).mount();
