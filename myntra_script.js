var tl7 = gsap.timeline();
tl7
  .from(
    ".small-heading1",
   {
      bottom: 20,
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".small-heading2",
   {
      bottom: 20,
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )
  .from(
    ".bottom-left",
   {
      bottom: 10,
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )
