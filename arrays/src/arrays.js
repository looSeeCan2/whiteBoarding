const form = document.querySelector("form");

const arrays = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = e.target.elements.fullName.value;
    console.log(fullName);
    const occupation = e.target.elements.occupation.value;
    console.log(occupation);
    const a = throwTheValuesInAnArray(fullName, occupation);
    console.log(a);
    // const b = throwTheValuesInAnObject(fullName, occupation);
    // console.table(b);
  });

  const personArray = [];
  const throwTheValuesInAnArray = (item1, item2) => {
    personArray.push(item1, item2);
    const paragraph = document.querySelector("#paragraph");
    paragraph.innerText = ` ${item1}, Thank You for signing up. You are now in our database. How is your career as a(n) ${item2}?`;
    return personArray;
  };

  const arrayOfPersonObjects = [];
  const throwTheValuesInAnObject = (item1, item2) => {
    const persons = {
      name: item1,
      occupation: item2,
    };
    const paragraph = document.querySelector("#paragraph");
    paragraph.innerText = `${item1}, Thank You for signing up. You are now in our database. How is your career as a(n) ${item2}?`;
    arrayOfPersonObjects.push(persons);
    return arrayOfPersonObjects;
  };

  const clear = document.querySelector(".clear");
  clear.addEventListener("click", () => {
    form.reset();
    paragraph.innerText = "";
  });
};
export default arrays;
