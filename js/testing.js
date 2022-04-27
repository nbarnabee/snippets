describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(saleHotdogs(1),100);
    Test.assertSimilar(saleHotdogs(4),400);
    Test.assertSimilar(saleHotdogs(5),475);
    Test.assertSimilar(saleHotdogs(9),855);
    Test.assertSimilar(saleHotdogs(10),900);
    Test.assertSimilar(saleHotdogs(100),9000);
  });
});

// I kinda get what this is doing.  Should play with it.
// This comes from https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript


const saleHotdogs = n => n < 5 ? 100*n : n < 10 ? 95*n : 90*n