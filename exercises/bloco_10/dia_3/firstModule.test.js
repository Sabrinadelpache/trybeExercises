function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

test.skip("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  randomRgbColor = jest
    .fn()
    .mockReturnValueOnce("rgb(10,20,30)")
    .mockReturnValueOnce("rgb(10,20,30)")
    .mockReturnValueOnce("second normal call");

  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
  expect(randomRgbColor()).toBe("rgb(10,20,30)");
  expect(randomRgbColor()).toBe("second normal call");
  expect(randomRgbColor()).toBe(undefined);
});


const { expect } = require("@jest/globals");
const math = require("./math");

// jest.mock("./math");

// test("#somar", () => {
//

//   math.somar.mockImplementation((a, b) => a + b);
//   math.subtrair.mockImplementation((a, b) => a - b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
//   expect(math.subtrair(4,10)).toBe(-6)
//   expect(math.subtrair).toHaveBeenCalled();
//   expect(math.subtrair(10,6)).toBe(4);
//   expect(math.subtrair).toHaveBeenCalledTimes(2);
//   expect(math.subtrair).toHaveBeenCalledWith(4,10);
//   expect(math.subtrair).toHaveBeenCalledWith(10,6);
//   math.somar.mockReset();
//   expect(math.somar(1, 2)).toBe(undefined);
// });

test.skip('Somar implemetation using spyOn()', () => {
    const mockSub = jest
        .spyOn(math, "somar")
        .mockImplementation((a, b) => a - b);

    mockSub(2,2);
    expect(mockSub).toHaveBeenCalled();
    expect(mockSub).toHaveBeenCalledTimes(1);
    expect(mockSub).toHaveBeenCalledWith(2,2);
    expect(mockSub(2,2)).toBe(0);

    math.somar.mockRestore();
    expect(math.somar(2,2)).resolves.toBe(4)

});

const api = require("./api");

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

test.skip("testando requisição caso a promise resolva", async () => {
  apiURL = jest.fn().mockResolvedValue(requestReturn);

  apiURL();
  expect(apiURL).toHaveBeenCalledTimes(1);
  expect(apiURL()).resolves.toBe(requestReturn)
});