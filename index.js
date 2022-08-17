// .fadeUp がついたタグに対してアニメーション
const sample = document.querySelectorAll(".fadeUp");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // // 可視領域から外れたらリセット
        // entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.5 }
);

sample.forEach((item) => {
  observer.observe(item);
});
